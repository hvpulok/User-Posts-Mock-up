export class Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

export class User{
    id: number;
    username: string;
    email: string;
    phone: string;
    address = new Address();

    constructor (
        id: number, username: string, email: string, phone?: string, street?: string,
        suite?: string, city?: string, zipcode?: string
    ){
        this.id = id;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.address.street = street;
        this.address.suite = suite;
        this.address.city = city;
        this.address.zipcode = zipcode;
    }
}