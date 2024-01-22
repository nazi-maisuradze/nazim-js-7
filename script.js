//1 
const navclass = document.querySelector(".navclass");
const burgerclass = document.querySelector(".burgerclass");

navclass.addEventListener("click", function()  {
    navclass.classList.toggle("active");
    burgerclass.classList.toggle("active");
  });




//2 
const inputElement = document.getElementById("input-id");
const btnElement = document.getElementById("btn-id");
const ulElement = document.getElementById("ul-id");

btnElement.addEventListener("click", function(){
    let userinputvalue = inputElement.value;
    if (userinputvalue === " "){
        return;
    }
    let liElement = document.createElement("li");
    liElement.textContent = userinputvalue;

    let deletebtn = document.createElement("i");
    deletebtn.classList.add("fa-solid", "fa-eraser");
    deletebtn.addEventListener("click", function() {
        liElement.remove();
    })
    liElement.appendChild(deletebtn);

    ulElement.appendChild(liElement);

    inputElement.value= " ";
})