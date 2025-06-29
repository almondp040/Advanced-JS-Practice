const canvas = document.querySelector("#ballCanvas"); 
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight; 

const context = canvas.getContext("2d"); 
//Make an array to store the balls
const balls = []; 

class Ball {
    constructor(x, y) {
        this.x = x; 
        this.y = y; 
        this.xVelocity = (Math.random() - 0.5) * 10; 
        this.yVelocity = (Math.random() - 0.5) * 10; 
        this.size = Math.random() * 30 + 10; 
        this.color = Ball.getRandomColor()
    }

    static getRandomColor (){
        let rgbNumGenerator1 = Math.floor(Math.random() * 256); 
        let rgbNumGenerator2 = Math.floor(Math.random() * 256); 
        let rgbNumGenerator3 = Math.floor(Math.random() * 256); 
        return `rgb(${rgbNumGenerator1}, ${rgbNumGenerator2}, ${rgbNumGenerator3})`; //Function Output
    }
    //grab the client x and y: These are our coordinates where the click occured: 
    draw(){
    context.beginPath(); 
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2); 
    context.fillStyle = this.color; 
    context.fill(); 
    }

    update(){
        this.x += this.xVelocity
        this.y += this.yVelocity
    }
}

const loop = () =>{
    //For every object inside of the balls array update and draw
    context.fillStyle =  "rgba(255, 255, 255, 0.74)"; 
    context.fillRect(0,0, canvas.width, canvas.height); 
    for (const ball of balls) {
        ball.update(); 
        ball.draw(); 
    }
    requestAnimationFrame(loop); 
}

loop(); 
//Listen for a click on the canvas
canvas.addEventListener("click", (event)=>{
    console.log("Event Object:", event.clientX, event.clientY); //See what's in our event object

    const ball = new Ball(event.clientX, event.clientY); 
    ball.draw(); 
    console.log(ball)
    balls.push(ball); 
})