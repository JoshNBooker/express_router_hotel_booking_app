use bookings
db.dropDatabase()

db.bookings.insertMany([
    {
        name: {
            first: 'Brian',
            last:'Wilson'
        },
        email : 'BrianWilson@BeachBoys.com',
        checkedIn: false
    },{
        name: {
            first: 'Tyson',
            last:'Fury'
        },
        email : 'FuryBoxing@BBB.com',
        checkedIn: false
    },{
        name: {
            first: 'Henry',
            last:'Rollins'
        },
        email : 'RollinsHenry@Gmail.com',
        checkedIn: false
    }
])