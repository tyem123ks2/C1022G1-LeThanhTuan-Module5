export const facility = [
    {
        id: 1,
        name: 'Xe đạp',
        area: 1000,
        cost: 100000,
        maxPeople: 4,
        standardRoom: 'Vip',
        descriptionOtherCovenience: 'ổn',
        poolArea: 5,
        numberOfFloors: 5,
        facilityFree: "đèn mờ",
        rentType: {
            id: 1,
            name: '?'
        },
        facilityType: {
            id: 1,
            name: 'Diamond'
        },
        status: false
    }
]
export const facilityType = [
    {
        id: 1,
        name: 'Diamond'
    },
    {
        id: 2,
        name: 'Platinium'
    },
    {
        id: 3,
        name: 'Gold'
    },
    {
        id: 4,
        name: 'Silver'
    }
];

export const rentType = [
    {
        id: 1,
        name: '?'
    },
    {
        id: 1,
        name: '??'
    }

]
export default {
    facility, facilityType, rentType
}