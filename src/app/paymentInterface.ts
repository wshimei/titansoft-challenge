export interface PaymentInterface {
    cardHolderName: string;
    billingAddress: Array<BillingAddress>;
}

export interface BillingAddress {
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
}
