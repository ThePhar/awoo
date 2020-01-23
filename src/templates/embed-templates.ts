import * as Discord from "discord.js";

import Player from "../structs/player";
import Game from "../structs/game";
import getTip from "./tips";

import RoleTemplate from "./role-templates";
import PhaseTemplate from "./phase-templates";
import Color from "../structs/color";
import Team from "../structs/team";
import Moment from "moment";
import Witch from "../roles/witch";

const dateFormat = "dddd, MMMM Do [at] H:mm A [CST-6:00]";

export function lobbyEmbed(game: Game): Discord.RichEmbed {
    const players = game.players;

    return new Discord.RichEmbed()
        .setTitle("Ready For A New Game")
        .setDescription(`Welcome to Awoo v0.4 prebuild. This server is registered as a Developer tier and has access to all features.\n\nTo join an upcoming game, use \`!join\` in ${game.channel}.`)
        .setColor(Color.Information)
        .setFooter(getTip())
        .addField("Signed Up Players", players.all.length > 0 ? players.all : "-", true);
}

/* Phase Embeds */
export function dayEmbed(game: Game, dusk: Moment.Moment): Discord.RichEmbed {
    const players = game.players;

    return new Discord.RichEmbed()
        .setTitle(PhaseTemplate.day.title(game.day))
        .setDescription(PhaseTemplate.day.description + `\n\nThe sun will set on **${dusk.format(dateFormat)}**.`)
        .setColor(PhaseTemplate.day.color)
        .setImage(PhaseTemplate.day.image)
        .setFooter(getTip())
        .addField("Alive Players", players.alive.length > 0 ? players.alive : "-", true)
        .addField("Eliminated Players", players.dead.length > 0 ? players.dead : "-", true);
}
export function nightEmbed(game: Game, dawn: Moment.Moment): Discord.RichEmbed {
    const players = game.players;

    return new Discord.RichEmbed()
        .setTitle(PhaseTemplate.night.title(game.day))
        .setDescription(PhaseTemplate.night.description + `\n\nThe sun will rise on **${dawn.format(dateFormat)}**.`)
        .setColor(PhaseTemplate.night.color)
        .setImage(PhaseTemplate.night.image)
        .setFooter(getTip())
        .addField("Alive Players", players.alive.length > 0 ? players.alive : "-", true)
        .addField("Eliminated Players", players.dead.length > 0 ? players.dead : "-", true);
}

/* Role Embeds */
export function villagerRoleEmbed(guild: Discord.Guild): Discord.RichEmbed {
    return new Discord.RichEmbed()
        .setTitle(RoleTemplate.villager.roleNotification.title)
        .setDescription(RoleTemplate.villager.roleNotification.description)
        .setThumbnail(RoleTemplate.villager.roleNotification.thumbnail)
        .setColor(RoleTemplate.villager.roleNotification.color)
        .setAuthor(guild.name, guild.iconURL)
        .setFooter(getTip())
        .addField(
            RoleTemplate.villager.roleNotification.fields[0].name,
            RoleTemplate.villager.roleNotification.fields[0].value,
            true
        )
        .addField(
            RoleTemplate.villager.roleNotification.fields[1].name,
            RoleTemplate.villager.roleNotification.fields[1].value,
            true
        )
        .addField(
            "During the Day",
            RoleTemplate.villager.roleNotification.accusationExample,
        );
}
export function werewolfRoleEmbed(guild: Discord.Guild, werewolves: Player[]): Discord.RichEmbed {
    return new Discord.RichEmbed()
        .setTitle(RoleTemplate.werewolf.roleNotification.title)
        .setDescription(RoleTemplate.werewolf.roleNotification.description)
        .setThumbnail(RoleTemplate.werewolf.roleNotification.thumbnail)
        .setColor(RoleTemplate.werewolf.roleNotification.color)
        .setAuthor(guild.name, guild.iconURL)
        .setFooter(getTip())
        .addField(
            RoleTemplate.werewolf.roleNotification.fields[0].name,
            RoleTemplate.werewolf.roleNotification.fields[0].value,
            true
        )
        .addField(
            RoleTemplate.werewolf.roleNotification.fields[1].name,
            RoleTemplate.werewolf.roleNotification.fields[1].value,
            true
        )
        .addField(
            "Werewolves",
            werewolves,
            true
        )
        .addField(
            "During the Day",
            RoleTemplate.villager.roleNotification.accusationExample,
        )
        .addField(
            "During the Night",
            RoleTemplate.werewolf.roleNotification.actions,
        );
}
export function seerRoleEmbed(guild: Discord.Guild): Discord.RichEmbed {
    return new Discord.RichEmbed()
        .setTitle(RoleTemplate.seer.roleNotification.title)
        .setDescription(RoleTemplate.seer.roleNotification.description)
        .setThumbnail(RoleTemplate.seer.roleNotification.thumbnail)
        .setColor(RoleTemplate.villager.roleNotification.color)
        .setAuthor(guild.name, guild.iconURL)
        .setFooter(getTip())
        .addField(
            RoleTemplate.villager.roleNotification.fields[0].name,
            RoleTemplate.villager.roleNotification.fields[0].value,
            true
        )
        .addField(
            RoleTemplate.villager.roleNotification.fields[1].name,
            RoleTemplate.villager.roleNotification.fields[1].value,
            true
        )
        .addField(
            "During the Day",
            RoleTemplate.villager.roleNotification.accusationExample,
        )
        .addField(
            "During the Night",
            RoleTemplate.seer.roleNotification.actions,
        );
}
export function bodyguardRoleEmbed(guild: Discord.Guild): Discord.RichEmbed {
    return new Discord.RichEmbed()
        .setTitle(RoleTemplate.bodyguard.roleNotification.title)
        .setDescription(RoleTemplate.bodyguard.roleNotification.description)
        .setThumbnail(RoleTemplate.bodyguard.roleNotification.thumbnail)
        .setColor(RoleTemplate.villager.roleNotification.color)
        .setAuthor(guild.name, guild.iconURL)
        .setFooter(getTip())
        .addField(
            RoleTemplate.villager.roleNotification.fields[0].name,
            RoleTemplate.villager.roleNotification.fields[0].value,
            true
        )
        .addField(
            RoleTemplate.villager.roleNotification.fields[1].name,
            RoleTemplate.villager.roleNotification.fields[1].value,
            true
        )
        .addField(
            "During the Day",
            RoleTemplate.villager.roleNotification.accusationExample,
        )
        .addField(
            "During the Night",
            RoleTemplate.bodyguard.roleNotification.actions,
        );
}
export function hunterRoleEmbed(guild: Discord.Guild): Discord.RichEmbed {
    return new Discord.RichEmbed()
        .setTitle(RoleTemplate.hunter.roleNotification.title)
        .setDescription(RoleTemplate.hunter.roleNotification.description)
        .setThumbnail(RoleTemplate.hunter.roleNotification.thumbnail)
        .setColor(RoleTemplate.villager.roleNotification.color)
        .setAuthor(guild.name, guild.iconURL)
        .setFooter(getTip())
        .addField(
            RoleTemplate.villager.roleNotification.fields[0].name,
            RoleTemplate.villager.roleNotification.fields[0].value,
            true
        )
        .addField(
            RoleTemplate.villager.roleNotification.fields[1].name,
            RoleTemplate.villager.roleNotification.fields[1].value,
            true
        )
        .addField(
            "During the Day",
            RoleTemplate.villager.roleNotification.accusationExample,
        )
        .addField(
            "Anytime",
            RoleTemplate.hunter.roleNotification.actions,
        );
}
export function lycanRoleEmbed(guild: Discord.Guild): Discord.RichEmbed {
    return new Discord.RichEmbed()
        .setTitle(RoleTemplate.lycan.roleNotification.title)
        .setDescription(RoleTemplate.lycan.roleNotification.description)
        .setThumbnail(RoleTemplate.lycan.roleNotification.thumbnail)
        .setColor(RoleTemplate.villager.roleNotification.color)
        .setAuthor(guild.name, guild.iconURL)
        .setFooter(getTip())
        .addField(
            RoleTemplate.villager.roleNotification.fields[0].name,
            RoleTemplate.villager.roleNotification.fields[0].value,
            true
        )
        .addField(
            RoleTemplate.villager.roleNotification.fields[1].name,
            RoleTemplate.villager.roleNotification.fields[1].value,
            true
        )
        .addField(
            "During the Day",
            RoleTemplate.villager.roleNotification.accusationExample,
        );
}
export function mayorRoleEmbed(guild: Discord.Guild): Discord.RichEmbed {
    return new Discord.RichEmbed()
        .setTitle(RoleTemplate.mayor.roleNotification.title)
        .setDescription(RoleTemplate.mayor.roleNotification.description)
        .setThumbnail(RoleTemplate.mayor.roleNotification.thumbnail)
        .setColor(RoleTemplate.villager.roleNotification.color)
        .setAuthor(guild.name, guild.iconURL)
        .setFooter(getTip())
        .addField(
            RoleTemplate.villager.roleNotification.fields[0].name,
            RoleTemplate.villager.roleNotification.fields[0].value,
            true
        )
        .addField(
            RoleTemplate.villager.roleNotification.fields[1].name,
            RoleTemplate.villager.roleNotification.fields[1].value,
            true
        )
        .addField(
            "During the Day",
            RoleTemplate.villager.roleNotification.accusationExample,
        );
}
export function tannerRoleEmbed(guild: Discord.Guild): Discord.RichEmbed {
    return new Discord.RichEmbed()
        .setTitle(RoleTemplate.tanner.roleNotification.title)
        .setDescription(RoleTemplate.tanner.roleNotification.description)
        .setThumbnail(RoleTemplate.tanner.roleNotification.thumbnail)
        .setColor(RoleTemplate.tanner.roleNotification.color)
        .setAuthor(guild.name, guild.iconURL)
        .setFooter(getTip())
        .addField(
            RoleTemplate.tanner.roleNotification.fields[0].name,
            RoleTemplate.tanner.roleNotification.fields[0].value,
            true
        )
        .addField(
            RoleTemplate.tanner.roleNotification.fields[1].name,
            RoleTemplate.tanner.roleNotification.fields[1].value,
            true
        )
        .addField(
            "During the Day",
            RoleTemplate.villager.roleNotification.accusationExample,
        );
}
export function sorceressRoleEmbed(guild: Discord.Guild): Discord.RichEmbed {
    return new Discord.RichEmbed()
        .setTitle(RoleTemplate.sorceress.roleNotification.title)
        .setDescription(RoleTemplate.sorceress.roleNotification.description)
        .setThumbnail(RoleTemplate.sorceress.roleNotification.thumbnail)
        .setColor(RoleTemplate.werewolf.roleNotification.color)
        .setAuthor(guild.name, guild.iconURL)
        .setFooter(getTip())
        .addField(
            RoleTemplate.werewolf.roleNotification.fields[0].name,
            RoleTemplate.werewolf.roleNotification.fields[0].value,
            true
        )
        .addField(
            RoleTemplate.werewolf.roleNotification.fields[1].name,
            RoleTemplate.werewolf.roleNotification.fields[1].value,
            true
        )
        .addField(
            "During the Day",
            RoleTemplate.villager.roleNotification.accusationExample,
        )
        .addField(
            "During the Night",
            RoleTemplate.sorceress.roleNotification.actions,
        );
}
export function insomniacRoleEmbed(guild: Discord.Guild): Discord.RichEmbed {
    return new Discord.RichEmbed()
        .setTitle(RoleTemplate.insomniac.roleNotification.title)
        .setDescription(RoleTemplate.insomniac.roleNotification.description)
        .setThumbnail(RoleTemplate.insomniac.roleNotification.thumbnail)
        .setColor(RoleTemplate.villager.roleNotification.color)
        .setAuthor(guild.name, guild.iconURL)
        .setFooter(getTip())
        .addField(
            RoleTemplate.villager.roleNotification.fields[0].name,
            RoleTemplate.villager.roleNotification.fields[0].value,
            true
        )
        .addField(
            RoleTemplate.villager.roleNotification.fields[1].name,
            RoleTemplate.villager.roleNotification.fields[1].value,
            true
        )
        .addField(
            "During the Day",
            RoleTemplate.villager.roleNotification.accusationExample,
        )
        .addField(
            "During the Night",
            RoleTemplate.insomniac.roleNotification.actions,
        );
}
export function minionRoleEmbed(guild: Discord.Guild, werewolves: Player[]): Discord.RichEmbed {
    return new Discord.RichEmbed()
        .setTitle(RoleTemplate.minion.roleNotification.title)
        .setDescription(RoleTemplate.minion.roleNotification.description)
        .setThumbnail(RoleTemplate.minion.roleNotification.thumbnail)
        .setColor(RoleTemplate.werewolf.roleNotification.color)
        .setAuthor(guild.name, guild.iconURL)
        .setFooter(getTip())
        .addField(
            RoleTemplate.werewolf.roleNotification.fields[0].name,
            RoleTemplate.werewolf.roleNotification.fields[0].value,
            true
        )
        .addField(
            RoleTemplate.werewolf.roleNotification.fields[1].name,
            RoleTemplate.werewolf.roleNotification.fields[1].value,
            true
        )
        .addField(
            "Werewolves",
            werewolves,
            true
        )
        .addField(
            "During the Day",
            RoleTemplate.villager.roleNotification.accusationExample,
        );
}
export function drunkRoleEmbed(guild: Discord.Guild): Discord.RichEmbed {
    return new Discord.RichEmbed()
        .setTitle(RoleTemplate.drunk.roleNotification.title)
        .setDescription(RoleTemplate.drunk.roleNotification.description)
        .setThumbnail(RoleTemplate.drunk.roleNotification.thumbnail)
        .setColor(RoleTemplate.villager.roleNotification.color)
        .setAuthor(guild.name, guild.iconURL)
        .setFooter(getTip())
        .addField(
            RoleTemplate.villager.roleNotification.fields[0].name,
            RoleTemplate.villager.roleNotification.fields[0].value,
            true
        )
        .addField(
            RoleTemplate.villager.roleNotification.fields[1].name,
            RoleTemplate.villager.roleNotification.fields[1].value,
            true
        )
        .addField(
            "During the Day",
            RoleTemplate.villager.roleNotification.accusationExample,
        );
}
export function masonRoleEmbed(guild: Discord.Guild, masons: Player[]): Discord.RichEmbed {
    return new Discord.RichEmbed()
        .setTitle(RoleTemplate.mason.roleNotification.title)
        .setDescription(RoleTemplate.mason.roleNotification.description)
        .setThumbnail(RoleTemplate.mason.roleNotification.thumbnail)
        .setColor(RoleTemplate.villager.roleNotification.color)
        .setAuthor(guild.name, guild.iconURL)
        .setFooter(getTip())
        .addField(
            RoleTemplate.villager.roleNotification.fields[0].name,
            RoleTemplate.villager.roleNotification.fields[0].value,
            true
        )
        .addField(
            RoleTemplate.villager.roleNotification.fields[1].name,
            RoleTemplate.villager.roleNotification.fields[1].value,
            true
        )
        .addField(
            "Masons",
            masons,
            true
        )
        .addField(
            "During the Day",
            RoleTemplate.villager.roleNotification.accusationExample,
        );
}
// export function loneWolfRoleEmbed(guild: Discord.Guild, werewolves: Player[]): Discord.RichEmbed {
//     return new Discord.RichEmbed()
//         .setTitle(RoleTemplate.loneWolf.roleNotification.title)
//         .setDescription(RoleTemplate.loneWolf.roleNotification.description)
//         .setThumbnail(RoleTemplate.loneWolf.roleNotification.thumbnail)
//         .setColor(RoleTemplate.werewolf.roleNotification.color)
//         .setAuthor(guild.name, guild.iconURL)
//         .setFooter(getTip())
//         .addField(
//             RoleTemplate.loneWolf.roleNotification.fields[0].name,
//             RoleTemplate.loneWolf.roleNotification.fields[0].value,
//             true
//         )
//         .addField(
//             RoleTemplate.loneWolf.roleNotification.fields[1].name,
//             RoleTemplate.loneWolf.roleNotification.fields[1].value,
//             true
//         )
//         .addField(
//             "Werewolves",
//             werewolves,
//             true
//         )
//         .addField(
//             "During the Day",
//             RoleTemplate.villager.roleNotification.accusationExample,
//         )
//         .addField(
//             "During the Night",
//             RoleTemplate.werewolf.roleNotification.actions,
//         );
// }
// export function apprenticeSeerRoleEmbed(guild: Discord.Guild): Discord.RichEmbed {
//     return new Discord.RichEmbed()
//         .setTitle(RoleTemplate.apprenticeSeer.roleNotification.title)
//         .setDescription(RoleTemplate.apprenticeSeer.roleNotification.description)
//         .setThumbnail(RoleTemplate.apprenticeSeer.roleNotification.thumbnail)
//         .setColor(RoleTemplate.villager.roleNotification.color)
//         .setAuthor(guild.name, guild.iconURL)
//         .setFooter(getTip())
//         .addField(
//             RoleTemplate.villager.roleNotification.fields[0].name,
//             RoleTemplate.villager.roleNotification.fields[0].value,
//             true
//         )
//         .addField(
//             RoleTemplate.villager.roleNotification.fields[1].name,
//             RoleTemplate.villager.roleNotification.fields[1].value,
//             true
//         )
//         .addField(
//             "During the Day",
//             RoleTemplate.villager.roleNotification.accusationExample,
//         );
// }
// export function doppelgangerRoleEmbed(guild: Discord.Guild): Discord.RichEmbed {
//     return new Discord.RichEmbed()
//         .setTitle(RoleTemplate.doppelganger.roleNotification.title)
//         .setDescription(RoleTemplate.doppelganger.roleNotification.description)
//         .setThumbnail(RoleTemplate.doppelganger.roleNotification.thumbnail)
//         .setColor(RoleTemplate.villager.roleNotification.color)
//         .setAuthor(guild.name, guild.iconURL)
//         .setFooter(getTip())
//         .addField(
//             RoleTemplate.villager.roleNotification.fields[0].name,
//             RoleTemplate.villager.roleNotification.fields[0].value,
//             true
//         )
//         .addField(
//             RoleTemplate.villager.roleNotification.fields[1].name,
//             RoleTemplate.villager.roleNotification.fields[1].value,
//             true
//         )
//         .addField(
//             "During the Day",
//             RoleTemplate.villager.roleNotification.accusationExample,
//         )
//         .addField(
//             "During the First Night",
//             RoleTemplate.doppelganger.roleNotification.actions,
//         );
// }
export function witchRoleEmbed(guild: Discord.Guild): Discord.RichEmbed {
    return new Discord.RichEmbed()
        .setTitle(RoleTemplate.witch.roleNotification.title)
        .setDescription(RoleTemplate.witch.roleNotification.description)
        .setThumbnail(RoleTemplate.witch.roleNotification.thumbnail)
        .setColor(RoleTemplate.villager.roleNotification.color)
        .setAuthor(guild.name, guild.iconURL)
        .setFooter(getTip())
        .addField(
            RoleTemplate.villager.roleNotification.fields[0].name,
            RoleTemplate.villager.roleNotification.fields[0].value,
            true
        )
        .addField(
            RoleTemplate.villager.roleNotification.fields[1].name,
            RoleTemplate.villager.roleNotification.fields[1].value,
            true
        )
        .addField(
            "During the Day",
            RoleTemplate.villager.roleNotification.accusationExample,
        )
        .addField(
            "During the Night",
            RoleTemplate.witch.roleNotification.actions,
        );
}

/* Action Embeds */
export function werewolfActionEmbed(guild: Discord.Guild, villagers: Player[]): Discord.RichEmbed {
    return new Discord.RichEmbed()
        .setTitle("Time to Feast - Werewolf Night Action")
        .setDescription("Please select a player to eliminate with `!kill <name>`. The player with the most werewolves targeting them will be eliminated. In the event of a tie, no player will be eliminated. You will be notified what your fellow werewolves choose.")
        .setThumbnail(RoleTemplate.werewolf.roleNotification.thumbnail)
        .setColor(RoleTemplate.werewolf.roleNotification.color)
        .setAuthor(guild.name, guild.iconURL)
        .setFooter(getTip())
        .addField(
            "Available Targets",
            villagers.length > 0 ? villagers : "*No Available Targets*"
        );

}
export function seerActionEmbed(guild: Discord.Guild, alivePlayers: Player[], self: Player): Discord.RichEmbed {
    const targets = alivePlayers.filter((player) => {
        if (player.id === self.id) return false;
    });

    return new Discord.RichEmbed()
        .setTitle("Look Into The Crystal Ball - Seer Night Action")
        .setDescription("Please select a player to inspect with `!inspect <name>`. If you survive the night, you will be shown if they are a werewolf or villager in the morning.")
        .setThumbnail(RoleTemplate.seer.roleNotification.thumbnail)
        .setColor(RoleTemplate.villager.roleNotification.color)
        .setAuthor(guild.name, guild.iconURL)
        .setFooter(getTip())
        .addField(
            "Available To Inspect",
            targets.length > 0 ? targets : "*None Available To Inspect*",
            true
        );

}
export function sorceressActionEmbed(guild: Discord.Guild, alivePlayers: Player[], self: Player): Discord.RichEmbed {
    const targets = alivePlayers.filter((player) => {
        if (player.id === self.id) return false;
    });

    return new Discord.RichEmbed()
        .setTitle("Look Into The Crystal Ball? - Sorceress Night Action")
        .setDescription("Please select a player to inspect with `!inspect <name>`. If you survive the night, you will be shown if they are the seer in the morning.")
        .setThumbnail(RoleTemplate.sorceress.roleNotification.thumbnail)
        .setColor(RoleTemplate.werewolf.roleNotification.color)
        .setAuthor(guild.name, guild.iconURL)
        .setFooter(getTip())
        .addField(
            "Available To Inspect",
            targets.length > 0 ? targets : "*None Available To Inspect*",
            true
        );

}
export function bodyguardActionEmbed(guild: Discord.Guild, alivePlayers: Player[]): Discord.RichEmbed {
    return new Discord.RichEmbed()
        .setTitle("Protect With Your Life - Bodyguard Night Action")
        .setDescription("Please select a player to protect with `!protect <name>`. Any player you protect will be safe from werewolf elimination. You can even protect yourself if you want.")
        .setThumbnail(RoleTemplate.bodyguard.roleNotification.thumbnail)
        .setColor(RoleTemplate.villager.roleNotification.color)
        .setAuthor(guild.name, guild.iconURL)
        .setFooter(getTip())
        .addField(
            "Available To Protect",
            alivePlayers.length > 0 ? alivePlayers : "*None Available To Protect*",
            true
        );

}
export function insomniacActionEmbed(guild: Discord.Guild, alivePlayers: Player[], self: Player): Discord.RichEmbed {
    const targets = alivePlayers.filter((player) => {
        if (player.id === self.id) return false;
    });

    return new Discord.RichEmbed()
        .setTitle("Can't Sleep - Insomniac Night Action")
        .setDescription("Please select a player to inspect with `!inspect <name>`. If you survive the night, you will be notified if the person you targeted used an action last night.")
        .setThumbnail(RoleTemplate.insomniac.roleNotification.thumbnail)
        .setColor(RoleTemplate.villager.roleNotification.color)
        .setAuthor(guild.name, guild.iconURL)
        .setFooter(getTip())
        .addField(
            "Available To Inspect",
            targets.length > 0 ? targets : "*None Available To Inspect*",
            true
        );

}
export function hunterActionEmbed(guild: Discord.Guild, alivePlayers: Player[], self: Player): Discord.RichEmbed {
    const targets = alivePlayers.filter((player) => player.id !== self.id);

    return new Discord.RichEmbed()
        .setTitle("You're Going Down With Me - Hunter Action Reminder")
        .setDescription("Target a player with `!target <name>` to eliminate that player if you get eliminated. If your target is eliminated or you have no target tomorrow, you'll receive this notification again.")
        .setThumbnail(RoleTemplate.hunter.roleNotification.thumbnail)
        .setColor(RoleTemplate.villager.roleNotification.color)
        .setAuthor(guild.name, guild.iconURL)
        .setFooter(getTip())
        .addField(
            "Available To Target",
            targets.length > 0 ? targets : "*None Available To Target*",
            true
        );
}
export function witchActionEmbed(guild: Discord.Guild, alivePlayers: Player[], self: Player, role: Witch): Discord.RichEmbed {
    const targets = alivePlayers.filter((player) => {
        if (player.id === self.id) return false;
    });

    const embed = new Discord.RichEmbed()
        .setTitle("A Weird Concoction - Witch Night Action")
        .setDescription("You can, once per game, save any player from elimination with `!save` or kill any one player with `!kill <name>`. You can use both potions in the same night if you want.")
        .setThumbnail(RoleTemplate.seer.roleNotification.thumbnail)
        .setColor(RoleTemplate.villager.roleNotification.color)
        .setAuthor(guild.name, guild.iconURL)
        .setFooter(getTip());

    if (!role.usedDeath) {
        embed.addField(
            "Available To Kill",
            targets.length > 0 ? targets : "*None Available To Kill*",
            true
        );
    }
    if (!role.usedSave) {
        embed.addField(
            "Available To Save",
            "You can save everyone.",
            true
        );
    }

    return embed;
}

/* Win Embeds */
export function werewolfVictoryEmbed(allPlayers: Player[]): Discord.RichEmbed {
    const winners = allPlayers
        .filter((player) => player.role.team === Team.Werewolves)
        .map((player) => `${player} \`${player.role.name}\``);
    const losers = allPlayers
        .filter((player) => player.role.team !== Team.Werewolves)
        .map((player) => `${player} \`${player.role.name}\``);

    return new Discord.RichEmbed()
        .setTitle("Werewolves Win")
        .setDescription(
            "The villagers have been whittled down to the point where the werewolves can take complete control of the village. All of your screens fall on deaf ears as you all meet a gruesome fate."
        )
        .setThumbnail(RoleTemplate.werewolf.roleNotification.thumbnail)
        .setColor(Color.WerewolfRed)
        .setFooter(getTip())
        .addField(
            "Winning Team",
            winners.length > 0 ? winners : "***None***",
            true
        )
        .addField(
            "Losing Teams",
            losers.length > 0 ? losers : "***None***",
            true
        );
}
export function villagerVictoryEmbed(allPlayers: Player[]): Discord.RichEmbed {
    const winners = allPlayers
        .filter((player) => player.role.team === Team.Villagers)
        .map((player) => `${player} \`${player.role.name}\``);
    const losers = allPlayers
        .filter((player) => player.role.team !== Team.Villagers)
        .map((player) => `${player} \`${player.role.name}\``);

    return new Discord.RichEmbed()
        .setTitle("Villagers Win")
        .setDescription(
            "The last of the werewolves were completely eliminated along with those who allied with them. The first calm night in what feels like forever, has finally come."
        )
        .setThumbnail(RoleTemplate.villager.roleNotification.thumbnail)
        .setColor(Color.VillagerBlue)
        .setFooter(getTip())
        .addField(
            "Winning Team",
            winners.length > 0 ? winners : "***None***",
            true
        )
        .addField(
            "Losing Teams",
            losers.length > 0 ? losers : "***None***",
            true
        );
}
export function tannerVictoryEmbed(allPlayers: Player[]): Discord.RichEmbed {
    const winners = allPlayers
        .filter((player) => player.role.team === Team.Tanner && !player.alive)
        .map((player) => `${player} \`${player.role.name}\``);
    const losers = allPlayers
        .filter((player) => player.role.team !== Team.Tanner || player.alive)
        .map((player) => `${player} \`${player.role.name}\``);

    return new Discord.RichEmbed()
        .setTitle("Tanner Win")
        .setDescription(
            "The madlad did it. The death of the tanner stuns all of you that you can't even focus on chasing out the werewolves."
        )
        .setThumbnail(RoleTemplate.tanner.roleNotification.thumbnail)
        .setColor(Color.TannerBrown)
        .setFooter(getTip())
        .addField(
            "Winning Team",
            winners.length > 0 ? winners : "***None***",
            true
        )
        .addField(
            "Losing Teams",
            losers.length > 0 ? losers : "***None***",
            true
        );
}
