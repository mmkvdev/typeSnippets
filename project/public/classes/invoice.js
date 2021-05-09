// classes
export class Invoice {
    /* readonly client: string;
    private details: string;
    amount: number; */
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes E${this.amount} for ${this.details}`;
    }
}
//# sourceMappingURL=invoice.js.map