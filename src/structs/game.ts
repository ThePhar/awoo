import * as Discord from "discord.js";
import * as Embeds  from "../templates/embed-templates";

import GameState   from "../interfaces/game-state";
import PlayerState from "../interfaces/player-state";
import Phase       from "./phase";
import Player      from "./player";

export default class Game {
    private readonly _notificationChannel: Discord.TextChannel;

    private readonly _players         = new Map<string, Player>();
    private readonly _active: boolean = false;
    private          _phase:  Phase   = Phase.Waiting;
    private          _day             = 0;

    constructor(channel: Discord.TextChannel, state?: GameState) {
        this._notificationChannel = channel;

        // Predetermined values.
        if (state) {
            this._active = state.active;
            this._phase = state.phase;
            this._day = state.day;
        }
    }

    /* Game Functions */
    /**
     * Changes the state to start the day phase.
     */
    startDayPhase(): void {
        this._phase = Phase.Day;

        this.send(Embeds.dayEmbed(this));
    }
    /**
     * Changes the state to start the night phase.
     */
    startNightPhase(): void {
        this._day += 1;
        this._phase = Phase.Night;

        this.send(Embeds.nightEmbed(this));
    }

    /* Players Functions */
    /**
     * Create a player and add it to the game's players map. If a player already exists, does nothing and returns.
     * @param member The guild member object from Discord.
     * @param state An optional player state to initialize this player with.
     * @return The newly instantiated player object if not already exists. Otherwise, undefined.
     */
    addPlayer(member: Discord.GuildMember, state?: PlayerState): Player | undefined {
        if (this._players.get(member.id)) {
            return;
        }

        const player = new Player(member, this, state);

        this._players.set(player.id, player);
        return player;
    }
    /**
     * Get the player from the game's players map if exists. If no player exists, returns undefined.
     * @param id The id of the player to find. Should match the id of the Discord user.
     * @return The existing player object if already exists. Otherwise, undefined.
     */
    getPlayer(id: string): Player | undefined {
        return this._players.get(id);
    }
    /**
     * Remove and return the player from the game's players map if exists. If no player exists, returns undefined.
     * @param id The id of the player to find. Should match the id of the Discord user.
     * @return The removed player object if already exists. Otherwise, undefined.
     */
    removePlayer(id: string): Player | undefined {
        const player = this._players.get(id);

        if (player) {
            this._players.delete(id);
            return player;
        }
    }

    get send():         Function {
        return this._notificationChannel.send;
    }
    get id():           string {
        return this._notificationChannel.guild.id;
    }
    get totalPlayers(): number {
        return this._players.size;
    }
    get players():      Players {
        const all:   Player[] = [];
        const alive: Player[] = [];
        const dead:  Player[] = [];

        this._players.forEach((player) => {
            all.push(player);

            if (player.alive) {
                alive.push(player);
            } else {
                dead.push(player);
            }
        });

        return {
            all,
            dead,
            alive
        };
    }
    get active():       boolean {
        return this._active;
    }
    get phase():        Phase {
        return this._phase;
    }
    get day():          number {
        return this._day;
    }
}

type Players = {
    all: Player[];
    alive: Player[];
    dead: Player[];
}
