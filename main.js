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

  
  

let enter = document.getElementById("enterTarget");
let acceptButton = document.getElementById("acceptButton");
let deleteButton = document.getElementById("deleteButton");
var qwe = document.querySelector(".ul");
function zamik() {
  return acceptButton.onclick;
}
 var hui = zamik;


acceptButton.onclick = function() {
        // var ull = document.createElement("li");
    var addTarget = document.getElementById("target").value;
      if (addTarget) {
        enter.textContent = "Добавлено";
        function changeText() {
        enter.textContent="Введите задачу";
      }

        setTimeout(changeText, 1000); 
          var ull = document.createElement("li");
          ull.innerHTML = addTarget;
          document.querySelector(".ul").appendChild(ull);   
          var defaultInput = document.getElementById("target").value = ""; 
    }

        let button = document.createElement("button");
        // button.setAttribute("id", "dynamicButton");
        button.innerHTML = "delete";
        ull.appendChild(button);
        // document.getElementById("dynamicButton").style.setProperty("background-color", "black");
        // dynamicButton.style.setProperty("color", "white");
        button.addEventListener('click',function(){
           this.parentNode.remove();
       });
    }


let completed = document.querySelector(ull);
  completed.onclick = function() {
    completed.style.setProperty("color", "green");
  }
  
  zamik();

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    let pososi = document.getElementById("sosi");
      pososi.onclick = function() {
        pososi.style.setProperty("color", "white");
      }

      
    

