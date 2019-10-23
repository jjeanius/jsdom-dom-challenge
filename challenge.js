//  As a user, I should see the timer increment every second once the page has loaded.
let num = 0
let counter = document.getElementById("counter")
let myVar

function myTimer() {
    num = counter.innerHTML++;
}

document.addEventListener('DOMContentLoaded', function() {
    myVar = setInterval(myTimer, 1000);
});

//As a user, I can manually increment and decrement the counter using the plus and minus buttons.
document.getElementById("plus").addEventListener("click", plusFunction);
function plusFunction() {
   plus = counter.innerHTML++
};

document.getElementById('minus').addEventListener("click", minusFunction);
function minusFunction() {
    minus = counter.innerHTML--
};

//As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
document.getElementById('likes').addEventListener("click", likesFunction);
function likesFunction() {
    likes.innerHTML++
};

//  heart button
document.getElementById('heart').addEventListener('click', heartFunction);
function heartFunction(){
    heart = counter.innerHTML++
};

/* As a user, I can pause the counter, which should
pause the counter
disable all buttons except the pause button
the pause button should then show the text "resume."
When 'resume' is clicked, it should restart the counter and re-enable the buttons.  */


document.getElementById('pause').addEventListener('click', pauseFunction);
function pauseFunction() {
    if(pause.innerHTML===" pause ") {
    clearInterval(myVar);
    pause.innerHTML=" resume ";
    }else{
        myVar = setInterval(myTimer, 1000);
        pause.innerHTML = " pause ";
    }
};

//   As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."
const commentForm = document.getElementById("comment-form");
const formInput = document.getElementById("comment-input");
const list = document.getElementById('comment_list');
    commentForm.addEventListener('submit', function(e){
    e.preventDefault();
        const li = document.createElement("li");
        li.innerText = formInput.value;
        console.log(formInput.value);
        console.log("formSubmit", e);
        list.append(li);
});

 /*form.getElementByTagName("comments").addEventListener('submit', function(e) {


    let value = document.getElementById("list");
    form.append("value");
        // console.log(value); */
//})
