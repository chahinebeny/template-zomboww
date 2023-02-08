var s=0;
function change_duration()
{
var elements = document.getElementsByClassName("monthly");
var elements2 = document.getElementsByClassName("yearly");
var elements3 = document.getElementsByClassName("cyrcle");
let i;
if(s == 0){
    for(i=0; i< elements.length; i++){
        elements[i].style.display="none";
        elements2[i].style.display="block";
    }
    elements3[0].style.left="25px";
    s=1;
}
else{
    for(i=0; i< elements.length; i++){
        elements[i].style.display="block";
        elements2[i].style.display="none";
    }
    elements3[0].style.left="5px";
    s=0;
}
}
let slideIndex = 1;
slide_steps(slideIndex);

function plusSlides(n) {
    slide_steps(slideIndex += n);
  }

function slide_steps(n)
{
    let i; 
    let step = document.getElementsByClassName("content-side");
    var elements = document.getElementById("steps");
    var elements1 = document.getElementsByClassName("steps");

    for (i = 0; i < step.length; i++) {
        step[i].style.display = "none";       
    }
    if(n<5){
        step[n-1].style.display = "block";
        elements1[n-1].className += " active";
    }
    else{
        elements1[3].className += " active";
        step[4].style.display = "flex";
    }

}

function chose_plan(n)
{
    let i ; 
    let plan = document.getElementsByClassName("plan");
    for (i = 0; i < plan.length; i++) {
        plan[i].className = plan[i].className.replace("selected", "");
      }
      plan[n-1].className += " selected";
}