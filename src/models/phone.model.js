export class PhoneDataBase {
    id;
    number;
    contact_id;

    constructor(phone) {
        this.id = phone.id;
        this.number = phone.number;
        this.contact_id = phone.contactId;
    }

    getNonNullFields() {
        return {
            ...(this.id !== undefined && { id: this.id }),
            ...(this.number !== undefined && { number: this.number }),
            ...(this.contact_id !== undefined && { contact_id: this.contact_id }),
        };
    }
}

export class PhoneApi {
    id;
    number;
    contactId;

    constructor(phone) {
        this.id = phone.id;
        this.number = phone.number;
        this.contactId = phone.contact_id;
    }

    getNonNullFields() {
        return {
            ...(this.id !== undefined && { id: this.id }),
            ...(this.number !== undefined && { number: this.number }),
            ...(this.contactId !== undefined && { contactId: this.contactId }),
        };
    }
}

export default { PhoneDataBase, PhoneApi };
