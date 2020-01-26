import * as Embeds from "../templates/embed-templates";

import Role               from "../interfaces/role";
import Team               from "../structs/team";
import Phase              from "../structs/phase";
import Player             from "../structs/player";
import Command            from "../structs/command";
import RoleTemplate       from "../templates/role-templates";
import ActionTemplate     from "../templates/action-templates";
import RecognisedCommands from "../structs/recognised-commands";

export default class Insomniac implements Role {
    readonly player: Player;

    readonly name       = RoleTemplate.insomniac.name;
    readonly pluralName = RoleTemplate.insomniac.pluralName;
    readonly appearance = RoleTemplate.villager.appearance;
    readonly team       = Team.Villagers;

    usedAction = false;
    target?: Player;

    constructor(player: Player) {
        this.player = player;
    }

    sendRole(): void {
        this.player.send(Embeds.insomniacRoleEmbed(this.player.game.guild));
    }

    sendActionReminder(): void {
        // Reset active.
        this.target = undefined;
        this.usedAction = false;

        this.player.send(Embeds.insomniacActionEmbed(
            this.player.game.guild,
            this.player.game.players.alive,
            this.player));
    }

    action(command: Command): boolean {
        if (command.type === RecognisedCommands.Inspect) {
            // Player cannot make a target outside of the night phase.
            if (this.player.game.phase !== Phase.Night) {
                this.player.send(ActionTemplate.seer.nonNightPhase());
                return false;
            }
            // Player did not have a target.
            if (command.target === undefined && command.args === "") {
                this.player.send(ActionTemplate.seer.noTarget());
                return false;
            }
            // Could not find that target.
            if (command.target === undefined) {
                this.player.send(ActionTemplate.seer.noTargetFound(command.args));
                return false;
            }
            // Multiple players were found under that name.
            if (command.target instanceof Array) {
                this.player.send(ActionTemplate.seer.multipleTargetsFound(command.target, command.args));
                return false;
            }
            // Player targeting themselves.
            if (command.target.id === this.player.id) {
                this.player.send(ActionTemplate.seer.selfTarget());
                return false;
            }
            // Target is dead.
            if (!command.target.alive) {
                this.player.send(ActionTemplate.seer.deadTarget(command.target));
                return false;
            }

            // All is good!
            this.target = command.target;
            this.player.send(ActionTemplate.seer.success(this.target));
            this.usedAction = true;
            return true;
        }

        // Not a command I understand, ignore it.
        return false;
    }
}