// let string ="";
// let buttons = document.querySelectorAll('.button');

// Array . from(buttons).forEach((button)=>{
//     button.addEventListener('click', (e)=>{
//         if (e.target.innerHTML== '='){
//             string= eval(string);
//             document.querySelector('input').value = string;
//         }
//         else if (e.target.innerHTML== 'C'){
//             string= "";
//             document.querySelector('input').value = string;
//         }
//         else{
//             console.log(e.target);
//         string = string + e.target.innerHTML;
//         document.querySelector('input').value = string;
//         }
        
//     });
// });

// let backButton = document.querySelector('.button.x');
// if (backButton) {
//     backButton.addEventListener('click', () => {
//         string = string.slice(0, -1); // Remove the last character
//         document.querySelector('input').value = string;
//     });
// }


document.addEventListener('DOMContentLoaded', () => {
    let inputField = document.querySelector('.input');
    let buttons = document.querySelectorAll('.button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const buttonText = button.innerHTML;

            if (buttonText === '=') {
                inputField.value = eval(inputField.value);
            } else if (buttonText === 'C') {
                inputField.value = "";
            } else if (buttonText === 'x') {
                inputField.value = inputField.value.slice(0, -1); // Backspace
            } else {
                inputField.value += buttonText;
            }
        });
    });
});
