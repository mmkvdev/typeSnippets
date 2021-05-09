export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} has the details of ${this.details} with ${this.amount}`;
    }
}
//# sourceMappingURL=Payment.js.map