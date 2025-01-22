import Customer from "../model/Customer";

let customers : Customer[] = [];

export function addCustomer(customer: Customer) {
    customers.push(customer);
}

export function getCustomers() {
    return customers;
}

export function deleteCustomer(id: number) {
    customers = customers.filter(customer => customer.id !== id);
}

export function updateCustomer(id: number, c: Customer) {
    customers.map((customer: Customer) => {
        if(customer.id === id) {
            customer.name = c.name;
            customer.email = c.email;
        }
    })
}