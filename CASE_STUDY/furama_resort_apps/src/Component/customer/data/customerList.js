export const customer = [
    {
        id: 1,
        name: 'Wayne Rooney',
        gender: '1',
        dateOfBirth: '18/05/2000',
        idCard: '197434278',
        phone: '0905101198',
        email: 'wayne10@gmail.com',
        address: 'Manchester, England',
        customerType: {
            id: 1,
            name: 'Diamond'
        }
    }
]

export const customerType = [
    {
        id: 1,
        name: 'Diamond'
    },
    {
        id: 2,
        name: 'Gold'
    },
    {
        id: 3,
        name: 'Plantinium'
    },
    {
        id: 4,
        name: 'Silver'
    },
    {
        id: 5,
        name: 'Member'
    }
]

export default {
    customer, customerType
}