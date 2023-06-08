const customerAccounts = [
    {
        accountNumber: 7645,
        name: 'Trucks Ltd.'
    },
    {
        accountNumber: 8431,
        name: 'Pet Care Ltd.'
    }
];

const accountNumbers = customerAccounts.map((customer) => customer.accountNumber);

console.log(accountNumbers);