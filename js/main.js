// const zalupa = num => {
//     for( var i = 1; i <= num; i++) {
//         if (i % 3===0 && i % 5 === 0) {
//             console.log("FizzBuzz")
//         } else if (i % 3===0) {
//             console.log('fizz')
//         } else if (i % 5===0) {
//             console.log("buzz")
//         } else {
//             console.log(i)
//         }
//     }
// }


// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
//   }


//   for(i = 1; i <=7; i++) {
//       let count = "";
//       if(i.length <7) count += "#";

//       console.log(count.length)
//   }


let page = document.querySelector(".page");
let themeButton = document.querySelector(".themeButton");

themeButton.onclick = function() {
    page.classList.toggle("light-theme");
      page.classList.toggle("dark-theme");
  }

  
  

let textInput = document.getElementById("enterTarget");
let acceptButton = document.getElementById("acceptButton");
let deleteButton = document.getElementById("deleteButton");
var qwe = document.querySelector(".ul");
// let ull;


function filter(){
  let newLiElement;

  acceptButton.onclick = function() {
    var addTarget = document.getElementById("target").value;
    if (addTarget) {
      textInput.textContent = "Добавлено";
      function changeText() {
        textInput.textContent="Введите задачу";
      }
      setTimeout(changeText, 1000); 
      newLiElement = document.createElement("li");
      newLiElement.innerHTML = addTarget;
      document.querySelector(".ul").appendChild(newLiElement);   
      var defaultInput = document.getElementById("target").value = "";
      newLiElement.onclick = function() {
        newLiElement.classList.toggle("green-text")
  
        // ull.style.setProperty("color", "green");
        // ull.style.textDecoration = "line-through";
        //    ull.onclick = function() {
        //     ull.style.setProperty("color", "black");
        //     ull.style.textDecoration = "none";
        //   }
      }
      let button = document.createElement("button");
      button.innerHTML = "delete";
      newLiElement.appendChild(button);
        // document.getElementById("dynamicButton").style.setProperty("background-color", "black");
        // dynamicButton.style.setProperty("color", "white");
      button.addEventListener('click',function(){
        this.parentNode.remove();
      });
    }
  }
}
filter();

 
 

const all = document.getElementById("all");
const active = document.getElementById("active");
const completed = document.getElementById("completed");
    
    

