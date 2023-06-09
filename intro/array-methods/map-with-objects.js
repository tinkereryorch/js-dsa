const customers = [
    {
        customerId: 7645,
        name: 'Trucks Ltd.'
    },
    {
        customerId: 8431,
        name: 'Pet Care Ltd.'
    }
];

const customerIds = customers.map((customer) => customer.customerId);

console.log(customerIds);