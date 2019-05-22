var colorpicker1 = document.getElementById("color-picker-1");
var colorpicker2 = document.getElementById("color-picker-2");
var main = document.getElementsByClassName("main")[0];
var text = document.getElementById("res-text");
var color1 = document.getElementById("color-input-1");
var color2 = document.getElementById("color-input-2");
var btn = document.getElementsByClassName("button");




function gradientChange() {

    main.style.background = "linear-gradient(to right, " + colorpicker1.value + "," + colorpicker2.value + ")";
    text.textContent = main.style.background;


}

function gradientChange1() {

    if(color1.value.length > 0 || color2.value.length > 0){
    main.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    text.textContent = main.style.background;
    }

}

colorpicker1.addEventListener("input", gradientChange);
colorpicker2.addEventListener("input", gradientChange);
btn[0].addEventListener("click", gradientChange1);
btn[1].addEventListener("click", gradientChange1);












