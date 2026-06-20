const buttons = document.querySelectorAll(".btn");
const input = document.querySelector(".input");

let expression = "";

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        let value = button.innerText;

        if(value === "C"){
            expression = "";
            input.innerText = "";
        }

        else if(value === "="){

            try{
                expression = eval(expression).toString();
                input.innerText = expression;
            }
            catch{
                input.innerText = "Error";
                expression = "";
            }

        }

        else{
            expression += value;
            input.innerText = expression;
        }

    });

});