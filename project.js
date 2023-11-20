class Vehicle {
    constructor(name, manufacturer, id) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.id = id;
    }
  }
  
  class Car extends Vehicle {
    constructor(name, manufacturer, id, carType) {
      super(name, manufacturer, id);
      this.carType = carType;
    }
  }
  
  class Airplane extends Vehicle {
    constructor(name, manufacturer, id, airplaneType) {
      super(name, manufacturer, id);
      this.airplaneType = airplaneType;
    }
  }
  
  class Employee {
    constructor(name, id, dateOfBirth) {
      this.name = name;
      this.id = id;
      this.dateOfBirth = dateOfBirth;
    }
  }
  
  class Driver extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
      super(name, id, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  class Pilot extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
      super(name, id, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationId) {
      this.reservationDate = reservationDate;
      this.employeeId = employeeId;
      this.vehicleId = vehicleId;
      this.reservationId = reservationId;
    }
  }
  
  const car1 = new Car("Car1", "Manufacturer1", "V001", "Gas");
  const car2 = new Car("Car2", "Manufacturer2", "V002", "Electric");
  const car3 = new Car("Car3", "Manufacturer3", "V003", "Gas");
  
  const airplane1 = new Airplane("Airplane1", "Manufacturer4", "V004", "Type1");
  const airplane2 = new Airplane("Airplane2", "Manufacturer5", "V005", "Type2");
  
  const driver1 = new Driver("Driver1", "E001", "DOB1", "D001");
  const pilot1 = new Pilot("Pilot1", "E002", "DOB2", "P001");
  
  const reservation1 = new Reservation("Date1", "E001", "V001", "R001");
  
  const reservations = [reservation1];
  
  function checkCompatibility(employeeId, vehicleId) {
    const employee = findEmployeeById(employeeId);
    const vehicle = findVehicleById(vehicleId);
  
    if (employee instanceof Pilot && vehicle instanceof Car) {
      console.log("Mismatch: Pilot cannot drive a car.");
    } else if (employee instanceof Pilot && vehicle instanceof Airplane) {
      const newReservation = new Reservation("NewDate", employeeId, vehicleId, "NewReservationId");
      reservations.push(newReservation);
      console.log("Reservation created successfully.");
    } else {
      console.log("No compatibility issues.");
    }
  }
  
  function findEmployeeById(employeeId) {
    return driver1.id === employeeId ? driver1 : pilot1;
  }
  
  function findVehicleById(vehicleId) {
    return car1.id === vehicleId ? car1 : airplane1;
  }
  
  checkCompatibility("E002", "V001");
  
  console.log(reservations.map(reservation => JSON.stringify(reservation)))