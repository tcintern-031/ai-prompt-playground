console.log("AI playground")
const promptInput = document.getElementById("promptInput");
const submitButton = document.getElementById("submitButton");
const errorMessage = document.getElementById("errorMessage");
const promptOutput = document.getElementById("promptOutput")


submitButton.addEventListener("click", ()=>{


    const inputValue = promptInput.value
    console.log(inputValue)
    const isValid = isInputValid(inputValue);
    if (isValid === false){
        errorMessage.textContent = "something went wrong"
      
    }
    else{
        promptOutput.textContent= inputValue;
         errorMessage.textContent= ""
        promptInput.value = ""

    }
    

    console.log("button submitted")
})

function isInputValid(prompt){
    if(prompt === ""){
        return false
    }else{
        return true
    }
}