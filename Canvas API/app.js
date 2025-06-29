//Functionality of the Canvas API: 

//Select our canvas: 
const canvas = document.querySelector("#myCanvas"); 

//Either 2D or 3D Drawing: 
const context = canvas.getContext("2d"); 

//How we can style: 
// context.fillStyle= "rgba(255, 0, 0, 0.47)"
// //Our 2 rectangles: 
// context.fillRect(0, 0, 200, 80)
// context.fillStyle= "rgba(17, 0, 255, 0.47)"
// context.fillRect(100, 40, 100, 100)


//How we can make different shapes using combinations of fillRect and clearRect: 
// context.fillRect(50, 50, 200, 200); 
// context.clearRect(50, 50, 100, 100); 

//Can also so stroke styles
// context.strokeStyle = "purple"; 
// context.lineWidth = 5; 
// context.strokeRect(50, 50, 100, 100); 

//How to draw a basic line: 
// context.beginPath(); 
// context.moveTo(20, 100); 
// context.lineTo(100, 200); 
// context.lineTo(200, 100); 
// context.lineTo(-700, -800); 
// context.lineTo(220, -20); 
// context.fill(); 

//To start a new path just use beginPath to start then we can use arc to draw a circle: 
context.beginPath(); 
context.arc(145, 145, 50, 0, 2 * Math.PI)
context.stroke()
context.fill()

//Using the Path2D object way: Making a reference to a particular path, store our chape on a variable then we can change it 
const bigRectangle = new Path2D(); 
bigRectangle.rect(0, 0, 200, 80); 
context.fill(bigRectangle); 