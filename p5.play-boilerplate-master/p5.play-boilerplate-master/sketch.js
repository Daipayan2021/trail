var lobby2,lobby1,bullet1,billet2,male,female,charac,ff,fl,fr,fb,firebutton,gun1,gun2,mb
,mf,ml,mr,startbutton;
function preload(){
  lobby2=loadImage("imges/lobby.jpg")
  background=loadImage("imges/bg.jpg")
  billet1=loadImage("imges/bullet-1.png")
  bullet2=loadImage("imges/bullet-2.png")
  male=loadImage("imges/male.png")
  female=loadImage("imges/female.png")
  charac=loadImage("imges/charecter.png")
  ff=loadImage("imges/female-front.png")
  fl=loadImage("imges/female-left.png")
  fr=loadImage("imges/female-right.png")
  fb=loadImage("imges/female=back.png")
  firebutton=loadImage("imges/fire=button.png")
  gun1=loadImage("imges/gun-1.png")
  gun2=loadImage("imges/gun-2.png")
  mb=loadImage("imges/male-back.png")
  mf=loadImage("imges/male-front.png")
  ml=loadImage("imges/male-left.png")
  mr=loadImage("imges/male-right.png")
  startbutton=loadImage("imges/start button.jpg")
}
function setup() {
  createCanvas(800,400);
  lobby1=createSprite(400,200,800,400)
lobby1.addImage("1",lobby2)

}

function draw() {
 background(255,255,255);  
 drawSprites();
}