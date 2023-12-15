export class Contact {
    id;
    name;
    age;

    constructor(phone) {
        this.id = phone.id;
        this.name = phone.name;
        this.age = phone.age;
    }

    getNonNullFields() {
        return {
            ...(this.id !== undefined && { id: this.id }),
            ...(this.name !== undefined && { name: this.name }),
            ...(this.age !== undefined && { age: this.age }),
        };
    }
}

export default { Contact };
