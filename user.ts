export class User {
    id?: number; 
    name: string;
    address: string;
    addharNumber: string;
    phoneNumber: string;
email: any;
username: any;
    constructor(name: string, address: string, addharNumber: string, phoneNumber: string, id?: number) {
        this.name = name;
        this.address = address;
        this.addharNumber = addharNumber;
        this.phoneNumber = phoneNumber;
        if (id) this.id = id;
    }
}
