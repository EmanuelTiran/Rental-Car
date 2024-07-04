const Customer = require("./models/customerModel");

const customers = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@email.com",
      phoneNumber: "555-1234",
      driverLicense: {
        number: "DL12345678",
        expirationDate: new Date("2025-12-31")
      }
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@email.com",
      phoneNumber: "555-5678",
      driverLicense: {
        number: "DL87654321",
        expirationDate: new Date("2024-10-15")
      }
    },
    {
      firstName: "Michael",
      lastName: "Johnson",
      email: "michael.johnson@email.com",
      phoneNumber: "555-2468",
      driverLicense: {
        number: "DL24681012",
        expirationDate: new Date("2026-05-20")
      }
    },
    {
      firstName: "Emily",
      lastName: "Brown",
      email: "emily.brown@email.com",
      phoneNumber: "555-1357",
      driverLicense: {
        number: "DL13579111",
        expirationDate: new Date("2023-08-01")
      }
    },
    {
      firstName: "David",
      lastName: "Wilson",
      email: "david.wilson@email.com",
      phoneNumber: "555-3690",
      driverLicense: {
        number: "DL36912151",
        expirationDate: new Date("2027-03-12")
      }
    },
    {
      firstName: "Sarah",
      lastName: "Taylor",
      email: "sarah.taylor@email.com",
      phoneNumber: "555-1470",
      driverLicense: {
        number: "DL14710111",
        expirationDate: new Date("2024-11-30")
      }
    },
    {
      firstName: "Robert",
      lastName: "Anderson",
      email: "robert.anderson@email.com",
      phoneNumber: "555-2580",
      driverLicense: {
        number: "DL25802580",
        expirationDate: new Date("2025-09-22")
      }
    },
    {
      firstName: "Jennifer",
      lastName: "Thomas",
      email: "jennifer.thomas@email.com",
      phoneNumber: "555-3691",
      driverLicense: {
        number: "DL36913691",
        expirationDate: new Date("2026-07-14")
      }
    },
    {
      firstName: "William",
      lastName: "Jackson",
      email: "william.jackson@email.com",
      phoneNumber: "555-4802",
      driverLicense: {
        number: "DL48024802",
        expirationDate: new Date("2023-12-05")
      }
    },
    {
      firstName: "Lisa",
      lastName: "White",
      email: "lisa.white@email.com",
      phoneNumber: "555-5913",
      driverLicense: {
        number: "DL59135913",
        expirationDate: new Date("2027-01-18")
      }
    },
    {
      firstName: "James",
      lastName: "Harris",
      email: "james.harris@email.com",
      phoneNumber: "555-7024",
      driverLicense: {
        number: "DL70247024",
        expirationDate: new Date("2024-06-30")
      }
    },
    {
      firstName: "Mary",
      lastName: "Martin",
      email: "mary.martin@email.com",
      phoneNumber: "555-8135",
      driverLicense: {
        number: "DL81358135",
        expirationDate: new Date("2025-04-11")
      }
    },
    {
      firstName: "Richard",
      lastName: "Thompson",
      email: "richard.thompson@email.com",
      phoneNumber: "555-9246",
      driverLicense: {
        number: "DL92469246",
        expirationDate: new Date("2026-02-28")
      }
    },
    {
      firstName: "Patricia",
      lastName: "Garcia",
      email: "patricia.garcia@email.com",
      phoneNumber: "555-0357",
      driverLicense: {
        number: "DL03570357",
        expirationDate: new Date("2023-10-09")
      }
    },
    {
      firstName: "Charles",
      lastName: "Martinez",
      email: "charles.martinez@email.com",
      phoneNumber: "555-1468",
      driverLicense: {
        number: "DL14681468",
        expirationDate: new Date("2027-08-17")
      }
    },
    {
      firstName: "Linda",
      lastName: "Robinson",
      email: "linda.robinson@email.com",
      phoneNumber: "555-2579",
      driverLicense: {
        number: "DL25792579",
        expirationDate: new Date("2024-03-25")
      }
    },
    {
      firstName: "Thomas",
      lastName: "Clark",
      email: "thomas.clark@email.com",
      phoneNumber: "555-3680",
      driverLicense: {
        number: "DL36803680",
        expirationDate: new Date("2025-01-07")
      }
    },
    {
      firstName: "Barbara",
      lastName: "Rodriguez",
      email: "barbara.rodriguez@email.com",
      phoneNumber: "555-4791",
      driverLicense: {
        number: "DL47914791",
        expirationDate: new Date("2026-11-19")
      }
    },
    {
      firstName: "Daniel",
      lastName: "Lewis",
      email: "daniel.lewis@email.com",
      phoneNumber: "555-5802",
      driverLicense: {
        number: "DL58025802",
        expirationDate: new Date("2023-09-03")
      }
    },
    {
      firstName: "Margaret",
      lastName: "Lee",
      email: "margaret.lee@email.com",
      phoneNumber: "555-6913",
      driverLicense: {
        number: "DL69136913",
        expirationDate: new Date("2027-05-29")
      }
    }
  ];
  async function insertCustomers() {
    try {
 
      // Clear existing customers (optional - remove if you don't want to clear the collection)
      await Customer.deleteMany({});
      console.log('Cleared existing customers');
  
      // Insert the new customers
      const result = await Customer.insertMany(customers);
      console.log(`${result.length} customers inserted successfully`);
  
    } catch (error) {
      console.error('Error inserting customers:', error);
    }
  }
  
 
  module.exports = { insertCustomers };
