const Car = require("./models/carModel");

const Cars = [
    {
        make: "Toyota",
        model: "Camry",
        year: 2022,
        licensePlate: "ABC123",
        vin: "1HGCM82633A004352",
        color: "Silver",
        type: "Sedan",
        capacity: { passengers: 5, luggage: 3 },
        transmission: "Automatic",
        dailyRate: 50,
        isAvailable: true
    },
    {
        make: "Honda",
        model: "CR-V",
        year: 2021,
        licensePlate: "XYZ789",
        vin: "2HKRW2H87HH659832",
        color: "Blue",
        type: "SUV",
        capacity: { passengers: 5, luggage: 4 },
        transmission: "Automatic",
        dailyRate: 65,
        isAvailable: true
    },
    {
        make: "Ford",
        model: "F-150",
        year: 2023,
        licensePlate: "DEF456",
        vin: "1FTEW1E53JFC29922",
        color: "Red",
        type: "Truck",
        capacity: { passengers: 5, luggage: 5 },
        transmission: "Automatic",
        dailyRate: 80,
        isAvailable: true
    },
    {
        make: "Chrysler",
        model: "Pacifica",
        year: 2022,
        licensePlate: "GHI789",
        vin: "2C4RC1BG7JR123456",
        color: "White",
        type: "Van",
        capacity: { passengers: 7, luggage: 4 },
        transmission: "Automatic",
        dailyRate: 75,
        isAvailable: true
    },
    {
        make: "BMW",
        model: "7 Series",
        year: 2023,
        licensePlate: "LMN101",
        vin: "WBA7E2C55JB246789",
        color: "Black",
        type: "Luxury",
        capacity: { passengers: 5, luggage: 3 },
        transmission: "Automatic",
        dailyRate: 120,
        isAvailable: true
    },
    {
        make: "Nissan",
        model: "Versa",
        year: 2021,
        licensePlate: "OPQ202",
        vin: "3N1CN7AP3JL123456",
        color: "Gray",
        type: "Economy",
        capacity: { passengers: 5, luggage: 2 },
        transmission: "Manual",
        dailyRate: 40,
        isAvailable: true
    },
    {
        make: "Chevrolet",
        model: "Malibu",
        year: 2022,
        licensePlate: "RST303",
        vin: "1G1ZD5ST1JF987654",
        color: "Silver",
        type: "Sedan",
        capacity: { passengers: 5, luggage: 3 },
        transmission: "Automatic",
        dailyRate: 55,
        isAvailable: true
    },
    {
        make: "Jeep",
        model: "Grand Cherokee",
        year: 2023,
        licensePlate: "UVW404",
        vin: "1C4RJFAG5JC135790",
        color: "Green",
        type: "SUV",
        capacity: { passengers: 5, luggage: 4 },
        transmission: "Automatic",
        dailyRate: 85,
        isAvailable: true
    },
    {
        make: "Dodge",
        model: "Ram 1500",
        year: 2022,
        licensePlate: "XYZ505",
        vin: "1C6RR7LT1JS246801",
        color: "Black",
        type: "Truck",
        capacity: { passengers: 5, luggage: 5 },
        transmission: "Automatic",
        dailyRate: 90,
        isAvailable: true
    },
    {
        make: "Kia",
        model: "Carnival",
        year: 2023,
        licensePlate: "ABC606",
        vin: "KNDMB5C15M6123456",
        color: "Blue",
        type: "Van",
        capacity: { passengers: 8, luggage: 4 },
        transmission: "Automatic",
        dailyRate: 80,
        isAvailable: true
    },
    {
        make: "Mercedes-Benz",
        model: "S-Class",
        year: 2023,
        licensePlate: "DEF707",
        vin: "WDDUG8FB5JA987654",
        color: "Silver",
        type: "Luxury",
        capacity: { passengers: 5, luggage: 3 },
        transmission: "Automatic",
        dailyRate: 150,
        isAvailable: true
    },
    {
        make: "Hyundai",
        model: "Accent",
        year: 2021,
        licensePlate: "GHI808",
        vin: "KMHCT4AE1JU123456",
        color: "Red",
        type: "Economy",
        capacity: { passengers: 5, luggage: 2 },
        transmission: "Manual",
        dailyRate: 35,
        isAvailable: true
    },
    {
        make: "Volkswagen",
        model: "Passat",
        year: 2022,
        licensePlate: "JKL909",
        vin: "1VWAA7A39JC987654",
        color: "White",
        type: "Sedan",
        capacity: { passengers: 5, luggage: 3 },
        transmission: "Automatic",
        dailyRate: 60,
        isAvailable: true
    },
    {
        make: "Subaru",
        model: "Outback",
        year: 2023,
        licensePlate: "MNO111",
        vin: "4S4BSANC1J3123456",
        color: "Green",
        type: "SUV",
        capacity: { passengers: 5, luggage: 4 },
        transmission: "Automatic",
        dailyRate: 70,
        isAvailable: true
    },
    {
        make: "GMC",
        model: "Sierra",
        year: 2022,
        licensePlate: "PQR222",
        vin: "3GTU2NEJ1JG987654",
        color: "Black",
        type: "Truck",
        capacity: { passengers: 5, luggage: 5 },
        transmission: "Automatic",
        dailyRate: 95,
        isAvailable: true
    },
    {
        make: "Honda",
        model: "Odyssey",
        year: 2023,
        licensePlate: "STU333",
        vin: "5FNRL6H71JB123456",
        color: "Silver",
        type: "Van",
        capacity: { passengers: 8, luggage: 4 },
        transmission: "Automatic",
        dailyRate: 85,
        isAvailable: true
    },
    {
        make: "Lexus",
        model: "LS",
        year: 2023,
        licensePlate: "VWX444",
        vin: "JTHCL5EF5J5987654",
        color: "Black",
        type: "Luxury",
        capacity: { passengers: 5, luggage: 3 },
        transmission: "Automatic",
        dailyRate: 140,
        isAvailable: true
    },
    {
        make: "Mitsubishi",
        model: "Mirage",
        year: 2021,
        licensePlate: "YZA555",
        vin: "ML32A3HJ1JH123456",
        color: "Blue",
        type: "Economy",
        capacity: { passengers: 4, luggage: 2 },
        transmission: "Manual",
        dailyRate: 30,
        isAvailable: true
    },
    {
        make: "Mazda",
        model: "6",
        year: 2022,
        licensePlate: "BCD666",
        vin: "JM1GL1UM1J1987654",
        color: "Red",
        type: "Sedan",
        capacity: { passengers: 5, luggage: 3 },
        transmission: "Automatic",
        dailyRate: 55,
        isAvailable: true
    },
    {
        make: "Volvo",
        model: "XC90",
        year: 2023,
        licensePlate: "EFG777",
        vin: "YV4A22PK1J1123456",
        color: "White",
        type: "SUV",
        capacity: { passengers: 7, luggage: 4 },
        transmission: "Automatic",
        dailyRate: 100,
        isAvailable: true
    }
];
async function insertCars() {
    try {


        // Clear existing Cars (optional - remove if you don't want to clear the collection)
        await Car.deleteMany({});
        console.log('Cleared existing Cars');

        // Insert the new Cars
        const result = await Car.insertMany(Cars);
        console.log(`${result.length} Cars inserted successfully`);
    } catch (error) {
        console.error('Error inserting Cars:', error);
    }
}
module.exports = { insertCars };
