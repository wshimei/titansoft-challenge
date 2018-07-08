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
        protected zipcode: number,
        protected phone: number,
        public saveInfo: boolean
    ) { }
}
