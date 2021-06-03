let buttonLeft = document.getElementById("button1");
let buttonRight = document.getElementById("button2");
let slider = document.querySelectorAll(".slider__content");
let sum = 0;
window.addEventListener("click", (e) => {
    let but = e.target;
    if(but.id == "button1") {
        if(sum != 0) {
            sum += 600;
        }
        slider.forEach(element => {
                element.style.transform= "translateX(" + sum + "px)";
                
        });
    } else if(but.id == "button2") {
        if(sum != -1200) {
            sum-=600;
        }
        slider.forEach(element => {
            element.style.transform= "translateX(" + sum + "px)";
        });
    }
    console.log(sum);
})