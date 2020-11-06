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
let box = document.querySelector(".box");

themeButton.onclick = function() {
    page.classList.toggle("light-theme");
    page.classList.toggle("dark-theme");
    // box.classList.toggle("box-dark");
}

  
let textInput = document.getElementById("enterTarget");
let addToDo = document.getElementById("acceptButton");
let deleteButton = document.getElementById("deleteButton");
let ullList = document.querySelector(".ul");

let all = document.querySelector(".all");
let active = document.querySelector(".active");
let completed = document.querySelector(".completed");


function filter() {
  let newLiElement;

  addToDo.onclick = function() {
    var addTarget = document.getElementById("target").value;
    if (addTarget) {
      textInput.textContent = "Добавлено";
      function changeText() {
        textInput.textContent="Введите задачу";
      }
      setTimeout(changeText, 1000); 
      newLiElement = document.createElement("li");
      newLiElement.className = "to-do";
      newLiElement.innerHTML = addTarget;
      document.querySelector(".ul").appendChild(newLiElement);   
      var defaultInput = document.getElementById("target").value = "";
      liElements.push(newLiElement);
      newLiElement.onclick = function() {
        this.classList.toggle("green-text");
  
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
      button.addEventListener('click',function(){
        this.parentNode.remove();
      });
    } 
    console.log(liElements);
  }
  active.onclick = function() {
    hideBlackTodos(liElements);
  }
  completed.onclick = function() {
    hideGreenTodos(liElements);
  }
  all.onclick = function() {
    showAllTodos(liElements);
  }
}

  var liElements = [];


filter();

function hideGreenTodos(liElements) {
  for (var i = 0; i < liElements.length; i++) {
    if (!liElements[i].classList.contains("green-text")) {
      liElements[i].hidden = true;
    } else {
      liElements[i].hidden = false;
    }
  }
}

function hideBlackTodos(liElements) {
  for (var i = 0; i < liElements.length; i++) {
    if (liElements[i].classList.contains("green-text")) {
      liElements[i].hidden = true;
    } else {
      liElements[i].hidden = false;
    }
  }
}

function showAllTodos(liElements) {
  for (var i = 0; i < liElements.length; i++) {
    if (liElements[i].hidden = true) {
      liElements[i].hidden = false;
    }
  }
}


// function hideBlackTodos(liElements) {
//   for(var i = 0; i < liElements.length; i++) {
//     if(liElements[i].classlist.contains("green-text")) {
//       liElements[i].hidden = false;
//     }
//   }
// }




 
 