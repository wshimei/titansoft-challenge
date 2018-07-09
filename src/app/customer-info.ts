export class CustomerInfo {
    constructor (
        protected id: number,
        protected email: string,
        public subscribe: boolean,
        protected firstName: string,
        protected lastName: string,
        protected company: string,
        protected address: string,
        protected apartment: string,
        protected city: string,
        protected country: string,
        protected state: string,
        protected zipcode: string,
        protected phone: string,
        public saveInfo: boolean
    ) { }
}

export interface CustomerInterface {
    id: number;
    email: string;
    subscribe: boolean;
    firstName: string;
    lastName: string;
    company: string;
    address: string;
    apartment: string;
    city: string;
    country: string;
    state: string;
    zipcode: string;
    phone: string;
    saveInfo: boolean;
}
