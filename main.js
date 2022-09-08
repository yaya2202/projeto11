var corredor, corredor_img;
var chao, chao_img;


function preload(){
    corredor_img = loadAnimation("Runner-1.png", "Runner-2.png");
    chao_img = loadImage("path.png");
}

function setup(){
    createCanvas(305,500);
    chao = createSprite(150,100);
    chao.addImage(chao_img);
    chao.velocityY = 4;
    corredor = createSprite(200,250,100,50);
    corredor.addAnimation("corredor", corredor_img);
    corredor.scale = 0.1;
}

function draw(){
    background("lightgray");
    if(chao.y > 500){
        chao.y = chao.width/2;
    }
    if(keyDown("up")){
        corredor.y = corredor.y +5;
    }
    corredor.x = World.mouseX;

    drawSprites(); 
}