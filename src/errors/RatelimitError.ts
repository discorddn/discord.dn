export class RatelimitError extends Error {
    timeLeft: number;
    constructor(timeLeft: number) {
        super("You are being ratelimited");
        this.name = this.constructor.name;
        this.timeLeft = timeLeft;
    };
};