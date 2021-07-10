import { Phase } from "../constants/phase";
import { ActionInterface } from "./action";
import { SettingsInterface } from "./settings";
import { PlayerInterface } from "./player";
import { TeamInterface } from "./team";

/**
 * This is a serializable interface for games. All derived games must include this information.
 */
export interface GameInterface {
    /** Is this game currently in progress? */
    readonly active: boolean;

    /** A container of ids to announcement messages. */
    readonly announcements: {
        readonly start: string;
        readonly eliminations: ReadonlyArray<string>;
        readonly phases: ReadonlyArray<string>;
        readonly victory: string;
    };

    /** The current day number. */
    readonly day: number;

    /** A history of actions taken on this game interface. Can be used to time-travel through events. */
    readonly history: ReadonlyArray<ActionInterface>;

    /** The identifier for this game. */
    readonly id: string;

    /** The date and time for the next phase to start. */
    readonly nextPhase: Date;

    /** The current phase. */
    readonly phase: Phase;

    /** A list of players currently active in this game. */
    readonly players: ReadonlyArray<PlayerInterface>;

    /** An interface of settings for this game. */
    readonly settings: SettingsInterface;

    /** A list of currently active teams in this game. */
    readonly teams: ReadonlyArray<TeamInterface>;
}
