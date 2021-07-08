import { Roles } from "./roles";

// prettier-ignore
export const RoleDescriptions: RoleDescriptionDefinitions = {
    [Roles.AlphaWolf]:    "The Alpha Wolf is a Werewolf that is allowed to eliminate an additional target each night.",
    [Roles.Apprentice]:   "The Apprentice is a Villager that becomes the Seer when the original Seer is eliminated.",
    [Roles.Beholder]:     "The Beholder is a Villager that learns the identity of the Seer on the first night.",
    [Roles.BetaWolf]:     "The Beta Wolf is a Werewolf that is required to say 'wolf' each day or be eliminated when the night phase begins.",
    [Roles.BlackWolf]:    "The Black Wolf is a Werewolf that is allowed to choose another player each night to silence the following day.",
    [Roles.Bomber]:       "The Bomber is a Villager that eliminates a random number of players when eliminated.",
    [Roles.Bodyguard]:    "The Bodyguard is a Villager that may choose to protect a player from elimination every night.",
    [Roles.CultLeader]:   "The Cult Leader is a Villager that chooses a player each night to join their cult. The Cult Leader wins when all living players are in the cult.",
    [Roles.Cupid]:        "The Cupid is a Villager that chooses two players on the first night to fall in love with each other. If one of those players is eliminated, the other is immediately eliminated as well.",
    [Roles.Cursed]:       "The Cursed is a Villager until targeted for elimination by the Werewolves, at which point they become a Werewolf.",
    [Roles.Doppelganger]: "The Doppelgänger is a Villager that chooses a player on the first night. When that player is eliminated, the Doppelgänger assumes that role.",
    [Roles.Drunk]:        "The Drunk is a Villager that does not know their true role until the third night.",
    [Roles.FruitBrute]:   "The Fruit Brute is a Werewolf that cannot eliminate a player at night, if all other Werewolves are eliminated.",
    [Roles.Ghost]:        "The Ghost is a Villager that can still communicate and vote after being eliminated.",
    [Roles.Idiot]:        "The Village Idiot is a Villager that must vote to eliminate a player each day or be eliminated at night.",
    [Roles.Insomniac]:    "The Insomniac is a Villager that may choose a player each night to inspect. The next day, they learn if that player took an action during the night.",
    [Roles.Hunter]:       "The Hunter is a Villager that may choose another player as a target. If the Hunter is eliminated, their target gets eliminated immediately afterwards.",
    [Roles.Huntress]:     "The Huntress is a Villager that may, once per game, choose another player to eliminate at night.",
    [Roles.LoneWolf]:     "The Lone Wolf is a Werewolf that only wins if they are the last player alive or reach parity with one other player.",
    [Roles.Lycan]:        "The Lycan is a Villager that appears to be a Werewolf to the Seer.",
    [Roles.Mason]:        "The Masons are a collection of Villagers that know the identity of their fellow Masons.",
    [Roles.Mayor]:        "The Mayor is a Villager that has their day votes counted twice.",
    [Roles.Minion]:       "The Minion is a Villager, but knows the identity of the Werewolves and will only win if the Werewolves win.",
    [Roles.Nostradamus]:  "Nostradamus is a Villager that chooses a team the first night that they think will win. Nostradamus only wins if their predicted team wins and they are not eliminated.",
    [Roles.OldHag]:       "The Old Hag is a Villager that chooses a player each night to leave the village until the following day. This player cannot vote, speak, or take actions, but is immune to being targeted by other players.",
    [Roles.Pacifist]:     "The Pacifist is a Villager that must vote to not eliminate any players each day or be eliminated at night.",
    [Roles.Priest]:       "The Priest is a Villager that may choose a player, one per game, to become immune to Werewolf eliminations.",
    [Roles.Prince]:       "The Prince is a Villager that cannot be lynched during the day. If they are voted to be lynched, their role is revealed and they remain in the game.",
    [Roles.Seer]:         "The Seer is a Villager that may check if a player is a Werewolf or Villager each night.",
    [Roles.Sorceress]:    "The Sorceress is a Villager that may check if a player is a Werewolf, Villager, or the Seer. They only win if the Werewolves win.",
    [Roles.Spellcaster]:  "The Spellcaster is a Villager that may choose a player to prevent from speaking or voting the next day.",
    [Roles.Tanner]:       "The Tanner is a Villager that only wins if they are eliminated.",
    [Roles.ToughGuy]:     "The Tough Guy is a Villager that does not get eliminated by Werewolves until the following night after being initially targeted.",
    [Roles.Troublemaker]: "The Troublemaker is a Villager that can, once per game, choose a day to force two players to be eliminated by lynching.",
    [Roles.Villager]:     "The Villagers has no special abilities and must find the Werewolves and eliminate them.",
    [Roles.Werewolf]:     "The Werewolves choose a player each night to eliminate. They win when they outnumber the remaining Villagers.",
    [Roles.WildChild]:    "The Wild Child is a Villager that chooses a player on the first night to be their role model. If their role model is eliminated, the Wild Child becomes a Werewolf",
    [Roles.Witch]:        "The Witch is a Villager that may, once per game per ability, choose to eliminate a player and/or save any player targeted by the Werewolves that night.",
    [Roles.WolfCub]:      "The Wolf Cub is a Werewolf that when eliminated, allows the remaining Werewolves to target two players for elimination the following night.",
    [Roles.Wolfman]:      "The Wolfman is a Werewolf that appears to the Seer as a Villager.",
    [Roles.Vampire]:      "The Vampires choose a player each night to hex. When that player has their second lynch vote the following day, they are immediately eliminated. They only win if the Werewolves are eliminated and they outnumber the Villagers. Werewolves must eliminate the Vampires as well.",
}

export interface RoleDescriptionDefinitions {
    [role: string]: string;
}
