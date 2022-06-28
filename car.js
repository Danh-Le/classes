// 1 - Batmobile
// class Car {
//  constructor(brand, speed) {
//     this.brand = brand
//     this.speed = speed
//  }
//     Accelerate(avance) {
//     this.speed += avance
//     return this.speed
//     }
//     Brake(ralenti) {
//     this.speed -= ralenti
//     }
//     Describe() {
//         return `${this.brand} running at ${this.speed} km/h`
//     }

// }
// var ford = new Car("Ford", 0)
// console.log(ford)
// ford.Accelerate(50)
// console.log(ford)
// ford.Brake(25)
// console.log(ford)
// console.log(ford.Describe())

// var audi = new Car("audi", 0)
// console.log(audi)
// audi.Accelerate(150)
// console.log(audi)
// audi.Brake(20)
// console.log(audi)
// console.log(audi.Describe())

// // 2 - TV
// class TV {
//  constructor(brand, channel, volume) {
//     this.brand = brand
//     this.channel = 1
//     this.volume = 50
//  }
//     Up(monter) {
//     if (this.volume + monter > 100) {
//         this.volume = 100
//     } else {
//         this.volume += monter
//     }
// }
//     down(baisser) {
//     if (this.volume - baisser < 0) {
//         this.volume = 0
//     } else {
//         this.volume -= baisser
//     }
//     }
//     channelChangePlus(plus) {
//     if (this.channel + plus > 50) {
//         this.channel = this.channel
//     } else {
//         this.channel += plus
//     }
//     }
//     channelChangeMoins (moins) {
//     if (this.channel - moins < 0) {
//         this.channel = this.channel
//     } else {
//         this.channel -= moins
//     }
//     }
//     resetProg (reset) {

//     }
//     Describe() {
//         return `My new TV is a ${this.brand} programmed on channel ${this.channel} on sound volume ${this.volume} !`
// }
// }
// let television = new TV
// console.log(television)
// television.down(60)
// console.log(television.volume)
// console.log(television.Describe())

// 03 - Video games
class Car {
    constructor(player, color, vehicule) {
    this.speed = 0
    this.color = color
    this.vehicule = vehicule
    }
    Accelerate(avance) {
    this.speed += avance
    }
    Brake(ralenti) {
    this.speed -= ralenti
    }
    Wheel(roue) {
    this.vehicule = roue
}
}

class Player {
    constructor(pseudo, experience, type) {
    this.pseudo = pseudo
    this.experience = 0
    this.type = type
    }
    experiencePlus(levelUp) {
    this.experience += levelUp
    }
    dead(mort) {
    if (this.experience <= 0) {

    }
    }

}
class Circuit {
    constructor(level, environment) {
    this.level = 0
    this.environment = environment
    }
}