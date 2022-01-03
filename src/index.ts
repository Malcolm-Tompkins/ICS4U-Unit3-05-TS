/*
* This program is a vehicle class.
*
* @author  Malcolm Tompkins
* @version 1.0
* @since   2021-12-25
*/

class Vehicle {
  // this is a  class.
  private _speed: number
  private _maxSpeed: number
  private _doorNum: number
  private _colour: string
  private _licensePlate: string

  constructor (inicialColour: string, inicialPlate: string,
    inicialDoor: number, topspeed: number) {
    this._colour = inicialColour
    this._licensePlate = inicialPlate
    this._doorNum = inicialDoor
    this._maxSpeed = topspeed
    this._speed = 0
  }

  public get speed () {
    return this._speed
  }

  public get maxSpeed () {
    return this._maxSpeed
  }

  public get doorNum () {
    return this._doorNum
  }

  public get colour () {
    return this._colour
  }

  public get licensePlate () {
    return this._licensePlate
  }

  public set colour (param: string) {
    this._colour = param
  }

  public set licensePlate (param: string) {
    this._licensePlate = param
  }

  public status () {
    console.log('Speed: ' + this._speed + '\nMaxSpeed: ' + this._maxSpeed +
                    '\nNumber of doors: ' + this._doorNum +
                    '\nLicense Plate: ' + this._licensePlate + '\nColour: ' +
                    this._colour)
  }

  public accelerate () {
    this._speed += 1
  }

  public break () {
    this._speed -= 1
    console.log('Vehicle has slowed 1 unit')
  }
}
const vehicle1 = new Vehicle('Blue', '23456754', 4, 20)

const vehicle2 = new Vehicle('Orange', '45678906', 4, 30)

console.log('Created two vehicles\nStatus\'s:\n')
vehicle1.status()
vehicle2.status()

console.log('\nBoth vehicles accelerate...')
vehicle1.accelerate()
vehicle1.break()

vehicle2.accelerate()
vehicle2.break()
console.log('New speed for both vehicles: ' + vehicle1.speed)

console.log('\nDone.')
