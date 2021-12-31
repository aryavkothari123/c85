canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
mars_images_array=["mars.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];
random_number = Math.floor(Math.random()*4);
console.log(random_number);
rover_height = 90;
rover_width = 100;

background_image =mars_images_array[random_number];
rover_image = "rover.png";
rover_x = 10;
rover_y = 10;

function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uploadBackground();
    background_imgtag.src = background_image;
    rover_imgtag = new Image();
    rover_imgtag.onload = uploadRover();
    rover_imgtag.src = rover_image; 
}

function uploadBackground() {
    ctx.drawImage(background_imgtag , 0,0 , canvas.width , canvas.height);
}
function uploadRover() {
    ctx.drawImage(rover_imgtag , rover_x,rover_y , rover_width , rover_height);
}

window.addEventListener("keydown" , my_keydowwn);
function my_keydowwn(e) {
key_pressed = e.keyCode;
console.log(key_pressed);
if (key_pressed == "38")
{
    console.log("up");
    //up();
}

if (key_pressed == "40")
{
    console.log("down");
    //down();
}
if (key_pressed == "37")
{
    console.log("left");
    //left();
}
if (key_pressed == "39")
{
    console.log("right");
    //right();
}
}

function up() {
    if (rover_y>=0) {
        rover_y = rover_y-10;
        console.log("Up arrow pressed x:"+ rover_x +",y:"+ rover_y);
        uploadBackground();
        uploadRover()
    }
}

function down() {
    if (rover_y<=500) {
        rover_y = rover_y+10;
        console.log("Down arrow pressed x:"+ rover_x +",y:"+ rover_y);
        uploadBackground();
        uploadRover()
    }
}

function left() {
    if (rover_x>=0) {
        rover_x = rover_x-10;
        console.log("Left arrow pressed x:"+ rover_x +",y:"+ rover_y);
        uploadBackground();
        uploadRover()
    }
}

function right() {
    if (rover_x>=700) {
        rover_x = rover_x+10;
        console.log("Right arrow pressed x:"+ rover_x +",y:"+ rover_y);
        uploadBackground();
        uploadRover()
    }
}

