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
      page.classList.toggle("dark-theme")
  }

  
  

  let enter = document.getElementById("enterTarget");
  let acceptButton = document.getElementById("acceptButton");
  let deleteButton = document.getElementById("deleteButton");
  var qwe = document.querySelector(".ul");

     acceptButton.onclick = function() {
        // var ull = document.createElement("li");
        var addTarget = document.getElementById("target").value;
          if (addTarget) {
            enter.textContent = "Добавлено";
            var ull = document.createElement("li");
            ull.innerHTML = addTarget;
            document.querySelector(".ul").appendChild(ull);
            
         }
    }

     

        // deleteButton.onclick = function() {
        //     var del = document.querySelector(".ul");
        //     var dell = document.("li")
            
        //     document.querySelector(".ul").lastChild(dell);
        // }
        

      
    

