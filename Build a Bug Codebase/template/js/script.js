/*
var mouth_type = [
    "mouth1",
    "mouth2",
    "mouth3",
    "mouth4",
    "mouth5"
]
mouth_count = 0;

function change_up_mouth() {
    mouth_count++;
    var mouth = document.querySelector('#mouth');
    mouth.className = mouth_type[mouth_count];

    if (mouth_count > 4) {
        mouth_count = 0;
    }
}
function change_down_mouth() {
    mouth_count--;
    var mouth = document.querySelector('#mouth');
    mouth.className = mouth_type[mouth_count];

    if (mouth_count < 0) {
        mouth_count = 4;
    }
}
*/

//First we're going to establish the array and counter variable for hue rotations up here so you know why it's included everywhere.
var colour_set = [
    "colour1",
    "colour2",
    "colour3",
    "colour4",
    "colour5",
    "colour6"
]
var colour_count = 0;
//Body colour and pattern colour ar kept seperate so that we can chnage them seperately
var pattern_colour_set = [
    "pattern_colour1",
    "pattern_colour2",
    "pattern_colour3",
    "pattern_colour4",
    "pattern_colour5",
    "pattern_colour6"
]
var pattern_colour_count = 0;

//Next we initialize a click sound effect for when buttons are pressed

var click = document.querySelector('#click');
var click_sound = 'template/audio/click.mp3';
click.src = click_sound;


//In our CSS, we have a bunch of classes with different backround images.
//The names of these classes are listed in this array.
var mouth_type = [
    "mouth1",
    "mouth2",
    "mouth3",
    "mouth4",
    "mouth5"
]
//This is where we initialize a counter variable that we will use and update with all functions related to changing a mouth.
var mouth_count = 0;

function change_mouth(which_button) {
    //First we want the sound effect to play
    click.play();
    //This is why we tied a variable to the function.
    //depending on whether a 0 or 1 is registered, this code will increment the counter variable upwards or downwards.
    //This simplifies things by keeping both operations in one function
    if(which_button == 1){
        mouth_count++;  
    }
    if(which_button == 0){
        mouth_count--;  
    }
    //This causes our counter variable to wrap if it goes past the highest number or lowest number.
    if (mouth_count > 4) {
        mouth_count = 0;
    }
    if (mouth_count < 0) {
        mouth_count = 4;
    }
    //And now for the piece de resistance! The code that makes the function actually work.
    //When the button is pressed, it grabs our wonderful counter variable and spits it into the array.
    //It then uses the array to update the div with an id of #mouth, scrubbing the last class and adding a new one.
    var mouth = document.querySelector('#mouth');
    mouth.className = mouth_type[mouth_count]+' '+colour_set[colour_count];

    //And as added bonus these will update the current status of the associated body part menu.
    //These two lines grab the mouth menu and update its internal value to match the counter variable.
    var mouth_menu_status = document.querySelector('#mouth_menu');
    mouth_menu_status.value = mouth_count;

}


//MENU FOR MOUTHS
//And here is where we use our menus at the bottom of the screen to directly select an item.
var mouth_menu = document.querySelector('#mouth_menu');
function menu_change_mouth(){
    //we grab the value of the selected item when the menu changes.
    var value = mouth_menu.value;
    //Then we update the counter variable to match value so that our buttons will now update from the new position instead of the old one.
    mouth_count = value;

    var mouth = document.querySelector('#mouth');
    //Then we spit that value into the array, and update the classes of the #mouth div.
    mouth.className = mouth_type[mouth_count]+' '+colour_set[colour_count];

}

//EYES ----------------------------------------------------------------------
//---------------------------------------------------------------------------
//this is the same code as the section above.
var eyes_type = [
    "eyes1",
    "eyes2",
    "eyes3",
    "eyes4",
    "eyes5"
]
var eyes_count = 0;

function change_eyes(which_button) {
    click.play();

    if(which_button == 1){
        eyes_count++;  
    }
    if(which_button == 0){
        eyes_count--;  
    }

    if (eyes_count > 4) {
        eyes_count = 0;
    }
    if (eyes_count < 0) {
        eyes_count = 4;
    }

    var eyes = document.querySelector('#eyes');
    eyes.className = eyes_type[eyes_count]+' '+colour_set[colour_count];

    var eyes_menu_status = document.querySelector('#eyes_menu');
    eyes_menu_status.value = eyes_count;
}

//MENU FOR EYES
var eyes_menu = document.querySelector('#eyes_menu');
function menu_change_eyes(){

    var value = eyes_menu.value;
    eyes_count = value;

    var eyes = document.querySelector('#eyes');
    eyes.className = eyes_type[eyes_count]+' '+colour_set[colour_count];
}


//SHELL ----------------------------------------------------------------------
//----------------------------------------------------------------------------
/*This is the same code as the two sections above*/
var shell_type = [
    "shell1",
    "shell2",
    "shell3",
    "shell4",
    "shell5"
]
var shell_count = 0;

function change_shell(which_button) {
    click.play();

    if(which_button == 1){
        shell_count++;  
    }
    if(which_button == 0){
        shell_count--;  
    }

    if (shell_count > 4) {
        shell_count = 0;
    }
    if (shell_count < 0) {
        shell_count = 4;
    }

    var shell = document.querySelector('#shell');
    shell.className = shell_type[shell_count]+' '+colour_set[colour_count];

    var shell_menu_status = document.querySelector('#shell_menu');
    shell_menu_status.value = shell_count;
}

//MENU FOR SHELLS
var shell_menu = document.querySelector('#shell_menu');
function menu_change_shell(){

    var value = shell_menu.value;
    shell_count = value;

    var shell = document.querySelector('#shell');
    shell.className = shell_type[shell_count]+' '+colour_set[colour_count];
}


//PATTERN --------------------------------------------------------------------
//----------------------------------------------------------------------------
/*This is the same code as the three sections above*/
var pattern_type = [
    "pattern1",
    "pattern2",
    "pattern3",
    "pattern4",
    "pattern5",
    "patternNone"
]
var pattern_count = 0;

function change_pattern(which_button) {
    click.play();

    if(which_button == 1){
        pattern_count++;  
    }
    if(which_button == 0){
        pattern_count--;  
    }

    if (pattern_count > 5) {
        pattern_count = 0;
    }
    if (pattern_count < 0) {
        pattern_count = 5;
    }

    var pattern = document.querySelector('#pattern');
    pattern.className = pattern_type[pattern_count]+' '+colour_set[colour_count];

    var pattern_menu_status = document.querySelector('#pattern_menu');
    pattern_menu_status.value = pattern_count;
}

//MENU FOR PATTERNS
var pattern_menu = document.querySelector('#pattern_menu');
function menu_change_pattern(){

    var value = pattern_menu.value;
    pattern_count = value

    var pattern = document.querySelector('#pattern');
    pattern.className = pattern_type[pattern_count]+' '+colour_set[colour_count];
}


//LEGS --------------------------------------------------------------------------
//-------------------------------------------------------------------------------
/*This is the same code as the four sections above*/
var legs_type = [
    "legs1",
    "legs2",
    "legs3",
    "legs4",
    "legs5"
]
var legs_count = 0;

function change_legs(which_button) {
    click.play();

    if(which_button == 1){
        legs_count++;  
    }
    if(which_button == 0){
        legs_count--;  
    }

    if (legs_count > 4) {
        legs_count = 0;
    }
    if (legs_count < 0) {
        legs_count = 4;
    }

    var legs = document.querySelector('#legs');
    legs.className = legs_type[legs_count]+' '+colour_set[colour_count];

    var legs_menu_status = document.querySelector('#legs_menu');
    legs_menu_status.value = legs_count;
}

//MENU FOR LEGS
var legs_menu = document.querySelector('#legs_menu');
function menu_change_legs(){

    var value = legs_menu.value;
    legs_count = value;

    var legs = document.querySelector('#legs');
    legs.className = legs_type[legs_count]+' '+colour_set[colour_count];
}


//COLOURS --------------------------------------------------------------------
//----------------------------------------------------------------------------
//Now it's time to finally change up those colours!
function change_colour(which_button) {
    click.play();

    if(which_button == 1){
        colour_count++;  
    }
    if(which_button == 0){
        colour_count--;  
    }

    if (colour_count > 5) {
        colour_count = 0;
    }
    if (colour_count < 0) {
        colour_count = 5;
    }

    var mouth = document.querySelector('#mouth');
    mouth.className = mouth_type[mouth_count]+' '+colour_set[colour_count];
    var eyes = document.querySelector('#eyes');
    eyes.className = eyes_type[eyes_count]+' '+colour_set[colour_count];
    var shell = document.querySelector('#shell');
    shell.className = shell_type[shell_count]+' '+colour_set[colour_count];
    var legs = document.querySelector('#legs');
    legs.className = legs_type[legs_count]+' '+colour_set[colour_count];


    var colour_menu_status = document.querySelector('#colour_menu');
    colour_menu_status.value = colour_count;
}

//MENU FOR COLOURS
var colour_menu = document.querySelector('#colour_menu');
function menu_change_colour(){

    var value = colour_menu.value;
    colour_count = value;

    var mouth = document.querySelector('#mouth');
    mouth.className = mouth_type[mouth_count]+' '+colour_set[colour_count];

    var eyes = document.querySelector('#eyes');
    eyes.className = eyes_type[eyes_count]+' '+colour_set[colour_count];

    var shell = document.querySelector('#shell');
    shell.className = shell_type[shell_count]+' '+colour_set[colour_count];

    var legs = document.querySelector('#legs');
    legs.className = legs_type[legs_count]+' '+colour_set[colour_count];
}


//PATTERN COLOURS -------------------------------------------------------------
//-----------------------------------------------------------------------------
function change_pattern_colour(which_button) {
    click.play();

    if(which_button == 1){
        pattern_colour_count++;  
    }
    if(which_button == 0){
        pattern_colour_count--;  
    }

    if (pattern_colour_count > 4) {
        pattern_colour_count = 0;
    }
    if (pattern_colour_count < 0) {
        pattern_colour_count = 4;
    }

    var pattern = document.querySelector('#pattern');
    pattern.className = pattern_type[pattern_count]+' '+pattern_colour_set[pattern_colour_count];

    var pattern_colour_menu_status = document.querySelector('#pattern_colour_menu');
    pattern_colour_menu_status.value = pattern_colour_count;
}

//MENU FOR PATTERN COLOURS
var pattern_colour_menu = document.querySelector('#pattern_colour_menu');
function menu_change_pattern_colour(){

    var value = pattern_colour_menu.value;

    pattern_colour_count = value;
    var pattern = document.querySelector('#pattern');
    pattern.className = pattern_type[pattern_count]+' '+pattern_colour_set[pattern_colour_count];
}


//RANDOMIZING ------------------------------------------------------------------------
//------------------------------------------------------------------------------------
function ULTRA_RANDOM(){
    click.play();

    var random_mouth = Math.floor(Math.random() * mouth_type.length);
    var random_eyes = Math.floor(Math.random() * eyes_type.length);
    var random_shell = Math.floor(Math.random() * shell_type.length);
    var random_pattern = Math.floor(Math.random() * pattern_type.length);
    var random_legs = Math.floor(Math.random() * legs_type.length);
    var random_colour = Math.floor(Math.random() * colour_set.length);
    var random_pattern_colour = Math.floor(Math.random() * pattern_colour_set.length);

    colour_count = random_colour;
    pattern_colour_count = random_pattern_colour;


    mouth_count = random_mouth;
    var mouth = document.querySelector('#mouth');
    mouth.className = mouth_type[mouth_count]+' '+colour_set[colour_count];
    var mouth_menu_status = document.querySelector('#mouth_menu');
    mouth_menu_status.value = mouth_count;

    eyes_count = random_eyes;
    var eyes = document.querySelector('#eyes');
    eyes.className = eyes_type[eyes_count]+' '+colour_set[colour_count];
    var eyes_menu_status = document.querySelector('#eyes_menu');
    eyes_menu_status.value = eyes_count;

    shell_count = random_shell;
    var shell = document.querySelector('#shell');
    shell.className = shell_type[shell_count]+' '+colour_set[colour_count];
    var shell_menu_status = document.querySelector('#shell_menu');
    shell_menu_status.value = shell_count;
    
    pattern_count = random_pattern;
    var pattern = document.querySelector('#pattern');
    pattern.className = pattern_type[pattern_count]+' '+colour_set[colour_count];
    var pattern_menu_status = document.querySelector('#pattern_menu');
    pattern_menu_status.value = pattern_count;

    legs_count = random_legs;
    var legs = document.querySelector('#legs');
    legs.className = legs_type[legs_count]+' '+colour_set[colour_count];
    var legs_menu_status = document.querySelector('#legs_menu');
    legs_menu_status.value = legs_count;


    var colour_menu_status = document.querySelector('#colour_menu');
    colour_menu_status.value = colour_count;
    var pattern_colour_menu_status = document.querySelector('#pattern_colour_menu');
    pattern_colour_menu_status.value = pattern_colour_count;
}