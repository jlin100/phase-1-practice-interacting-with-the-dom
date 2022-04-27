// add and subtract 
let add = document.getElementById('plus');
let substract = document.getElementById('minus');

let int = document.getElementById('counter');
let interger = 0;

add.addEventListener("click", function() {
    interger += 1;
    int.innerHTML = interger;
})

substract.addEventListener("click", function() {
    interger -= 1;
    int.innerHTML = interger;
})
// timer count
let myInterval = setInterval(updateCount, 1000);
function updateCount() {
    int.innerHTML = interger;
    interger ++;
}
// pause button
const p = document.getElementById('pause');
p.addEventListener("click", function() {
    if(p.innerText === 'resume') {
        p.innerText = "pause"
        myInterval = setInterval(updateCount, 1000);
    } else {
        p.innerText = 'resume'
        clearInterval(myInterval)
    }
    add.disabled = !add.disabled
    substract.disabled = !substract.disabled
    like.disabled = !like.disabled
    comment.disabled = !comment.disabled
})
// submit text
let comment = document.getElementById('submit');
let commentForm = document.querySelector("#comment-form")
commentForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const list = document.getElementById("list")
    let li = document.createElement("li")
    li.innerText = e.target[0].value
    list.appendChild(li)
    commentForm.reset()
})
// heart button
let like = document.getElementById('heart')
let likesObj = {}
like.addEventListener("click", function() {
    let intValue = document.getElementById('counter').textContent
    if(likesObj[intValue]) {
        likesObj[intValue] += 1
    } else {
        likesObj[intValue] = 1
    }
    let li = document.createElement("li")
    li.innerText = `${intValue} has been liked ${likesObj[intValue]} times`
    let likesUL = document.querySelector(".likes")
    likesUL.appendChild(li)
})