import Player from "../structs/player";
import Command from "../structs/command";
import Teams from "../structs/teams";

export default interface Role {
    name: string;
    pluralName: string;
    appearance: string;
    team: Teams;

    player: Player;

    getRoleMessage: () => unknown;
    getNightActionMessage?: () => unknown;

    actionHandler: (command: Command) => void;

    resetChoices: () => void;
}