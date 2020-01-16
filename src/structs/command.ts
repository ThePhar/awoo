import RecognisedCommands from "./recognised-commands";

export default class Command {
    readonly type: string | RecognisedCommands;
    readonly args: Array<string>;

    static readonly prefix = "!";

    constructor(command: string, args: Array<string>) {
        this.type = command;
        this.args = args;
    }

    static parse(string: string): Command | undefined {
        // Check for the prefix.
        if (string.startsWith(Command.prefix)) {
            const splitString = string.toLowerCase().split(" ");
            let command = splitString.shift() as string;

            command = command.replace(Command.prefix, "");

            return new Command(command, splitString);
        }

        return undefined;
    }
}