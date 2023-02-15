// main.js

console.log(`yo`);

let divArray = document.body.getElementsByTagName("div");
for(el of divArray)
{
    console.log(el.innerHTML);
}

console.log(divArray[3].innerHTML);
divArray[4].innerHTML = "New text";