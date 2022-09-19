// let parkingVehicle=(event)=>{
// event.preventDefault();
// let vehicletype =document.getElementById('type').value;
// let regno=document.getElementById('reg_no').value;

class Vehicle {
  constructor(t, r) {
    this.type = t;
    this.regNumber = r;
  }
}
class Bike extends Vehicle {
  constructor(regNumber) {
    super("Bike", regNumber);
  }
}

class Car extends Vehicle {
  constructor(regNumber) {
    super("Car", regNumber);
  }
}
class Truck extends Vehicle {
  constructor(regNumber) {
    super("Truck", regNumber);
  }
}

class parkingLot {
  constructor(number, type) {
    this.number = number;
    this.type = type;
    this.isBooked = false;
  }
}

class parkingSlots {
  constructor(floorNumber, maxSlots) {
    this.floorNumber = floorNumber;
    this.parkingSpots = [];
    for (let i = 0; i < maxSlots; i++) {
      if (i == 0) {
        this.parkingSpots.push(new parkingLot(i, "Bike"));
      }
      if (i == 1) {
        this.parkingSpots.push(new parkingLot(i, "Car"));
      }
      if (i == 2) {
        this.parkingSpots.push(new parkingLot(i, "Truck"));
      }
    }
  }
}

class parkingFloor {
  constructor(numberofFloor) {
    this.floors = [];
    // this.numberofFloor=this.numberofFloor;
    return numberofFloor;
    for (let i = 0; i < numberofFloor; i++) {
      this.floors.push(new parkingSlots(i, numberofFloor));
    }
  }

  findSlot(uservehicletype) {
    // console.log(this.numberofFloor);
    for (let i = 0; i < 3; i++) {
      console.log(this.floors[i].parkingSpots);
      //   for (let slot of this.floors[i].parkingSpots) {
      //     if (slot.type === uservehicletype && !slot.isBooked) {
      //       return { floornumber: i, foundedSlot: slot };
    }
  }
}
// return false;
//   }
// }

// let v1 = new Vehicle(type, regno);

// // console.log(v1);

let p = new parkingFloor(3);
// console.log(p);

let f = p.findSlot("Bike");
console.log(f);

// }
