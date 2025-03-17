const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Boundary {
    constructor({ postion }) {
        this.width = 40
        this.height = 40
        this.postion = postion
    }
}
draw() {
    c.fillRect(this.postion.x, this.postion.y, this.width, this.height)
}

class Player{
    this.position = position
    this.velocity = velocity
    this.radius = 10
}

draw(){
    c.beginPath()
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false)
    Math.PI * 2,)
}

const map = [
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', '-', '-', '-', '-', '-', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
]
const boundaries = []
    new Boundary({ postion: { x: 0, y: 0 } }),
    new Boundary({ postion: { x: 41, y: 0 } }),
    new Boundary({ postion: { x: 41, y: 0 } }),


