// let input = document.getElementById(`inputbox`);
// let buttons = document.querySelectorAll(`button`);

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach (button => 
// {
//     button.addEventListener (`click` , (e) =>{
//         if(e.target.innerHTML == `e`){
//             string = eval(string);
//             input.value = string;
//         }

//         else if (e.target.innerHTML == `AC`)
//         {
//             string = "";
//             input.value = string;
//         }
 
//         else if(e.target.innerHTML == `DEL`)
//         {
//             string = string.substring(0, string.length-1);
//             input.value = string;
//         }

//         else
//         {
//             string += e.target.innerHTML;
//             input.value = string;
//         }
   
//     })
// })



let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = ""; // this will store what the user types
let arr = Array.from(buttons); // convert button list to array for looping

arr.forEach(button => {
  button.addEventListener("click", (e) => {
    let btnText = e.target.innerText; // get the text of the clicked button

    if (btnText === "=") {
      try {
        // evaluate the expression
        string = eval(string);
        input.value = string;
      } catch {
        // handle invalid input (like 5++6)
        input.value = "Error";
        string = "";
      }
    } 
    else if (btnText === "AC") {
      string = "";
      input.value = "0";
    } 
    else if (btnText === "DEL") {
      string = string.slice(0, -1);
      input.value = string || "0";
    } 
    else {
      // add button text to string
      string += btnText;
      input.value = string;
    }
  });
});
