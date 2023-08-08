const gameBoard =document.getElementById('gameBoard');
const context = gameBoard.getContext('2d');
const scoreText = document.getElementById('scoreVal');

const WIDTH =gameBoard.width;
const HEIGHT = gameBoard.height;
const unit=25; // food height and width
let foodX;
let foodY;
let snake=[{x:unit*3,y:0},{x:unit*2,y:0},{x:unit,y:0},{x:0,y:0}]
let xVelocity= unit;
let yVelocity = 0;
let score = 0;
let active = true;
let started = false;
window.addEventListener('keydown',keyPress);
startGame();


function startGame(){
   context.fillStyle ='#212121';
   context.fillRect(0,0,WIDTH,HEIGHT);
   createFood();
   displayFood();
   drawSnake();
   
  //nextTick();

}


function keyPress(event ){
if( !started){
   started = true;
   nextTick();}

  const LEFT = 37;
  const UP= 38;
  const RIGHT = 39;
  const DOWN = 40;
  switch( true){
    case(event.keyCode==LEFT && xVelocity !=unit):
    xVelocity =-unit;
    yVelocity=0;
    break;
    case(event.keyCode==RIGHT && xVelocity !=-unit):
    xVelocity=unit;
    yVelocity=0;
    break;
    case (event.keyCode==UP && yVelocity != unit):
        xVelocity=0;
        yVelocity=-unit;
        break;
    case( event.keyCode==DOWN &&yVelocity != -unit):
      xVelocity = 0;
      yVelocity=unit;    
  }
}
function clearBoard(){
    context.fillStyle = 'black';
  context.fillRect(0,0,WIDTH,HEIGHT);
}
function createFood(){
    foodX =  Math.floor(Math.random()*WIDTH/unit)*unit;
    foodY = Math.floor(Math.random()*HEIGHT/unit)*unit;
}
function displayFood(){
  context.fillStyle = 'red';
  context.fillRect(foodX,foodY,unit,unit);
}
function drawSnake(){
  context.fillStyle="aqua";
  context.strokeStyle="212121";
  snake.forEach((snakePart) => {
    context.fillRect(snakePart.x,snakePart.y,unit,unit);
    context.strokeRect(snakePart.x,snakePart.y,unit,unit);

  })

}
function moveSnake(){
   const head = {x:snake[0].x+xVelocity,y:snake[0].y+yVelocity};
  snake.unshift(head);
  if( snake[0].x == foodX && snake[0].y==foodY)
     {
        score+=1;
        scoreText.textContent=score;
        createFood();
     }
   else  
     snake.pop();
  
}
function nextTick(){
    if( active){
    setTimeout(()=>{
       clearBoard();
       displayFood();
       moveSnake();
       drawSnake();
       checkGameOver();
       nextTick();
    }, 300);
   }
   else{
    clearBoard();
    context.font="bold 50px serif";
    context.fillStyle="white";
    context.textAlign="center";
    context.fillText("Game Over!",WIDTH/2,HEIGHT/2);
   }
}
function checkGameOver(){
    switch(true){
        case(snake[0].x<0):
        case(snake[0].x>=WIDTH):
        case(snake[0].y<0): 
        case(snake[0].y>=HEIGHT):

          active = false;
          break;
         
        
    }
}