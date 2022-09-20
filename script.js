const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl = document.getElementById("password-el")
let passwordTwoEl = document.getElementById("password-two-el")

function generatePassword() {
    let newPassword = []
    let randomChar
    
    for(let i = 0; i < characters.length - 1; i++) {
        randomChar = characters[Math.floor(Math.random() * characters.length)]
        
        // Constraints: cannot exceed length of 12 and cannot repeat the previous item in the stack
        while(newPassword.length < 12 && randomChar !== newPassword[newPassword.length - 1]) {
            newPassword.push(randomChar)
        }
    }
    return newPassword.join("")
}

function genClick() {
    passwordEl.textContent = generatePassword()
    passwordTwoEl.textContent = generatePassword()
}

function copyPassword() {
    const textToCopy = document.getElementById("password-el")
    
    navigator.clipboard.writeText(textToCopy.innerText)
        .then(() => {
            console.log('Copied to clipboard')
        })
}

function copyPasswordTwo() {
     const textToCopy = document.getElementById("password-two-el")
    
     navigator.clipboard.writeText(textToCopy.innerText)
        .then(() => {
            console.log('Copied to clipboard')
        })
}