const name = document.getElementsByClassName("uinput");
const SignupForm = document.getElementById("uform");

const firstName = document.querySelector(".fname");
const lastName = document.querySelector(".lname");
const email = document.querySelector(".mail");
const password = document.querySelector(".pswd");
const error_message = document.querySelectorAll(".err");

for (let i = 0; i < name.length; i++) {
    name[i].addEventListener('focus', () => {
        if (!name[i].classList.contains("error")) {
            name[i].style.border = "2px solid hsl(248, 32%, 49%)";
        }
    })
    name[i].addEventListener('blur', () => {
        name[i].style.border = "";
    })
    name[i].addEventListener('input', () => {
        name[i].classList.remove("error");
        error_message[i].style.display = "none";
        name[i].style.border = "2px solid hsl(248, 32%, 49%)";
    }) 
}

SignupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (firstName.value == "") {
        firstName.classList.add("error");
        display(error_message[0], "First Name cannot be empty");
    }

    if (lastName.value == "") {
        lastName.classList.add("error");
        display(error_message[1], "Last Name cannot be empty");
    }

    if (email.value == "") {
        email.classList.add("error");
        display(error_message[2], "Looks like this is not an email");
    } else if (regex.test(email.value) == false) {
        email.classList.add("error");
        display(error_message[2], "Looks like this is not an email");
    }

    if (password.value == "") {
        password.classList.add("error");
        display(error_message[3], "Password cannot be empty");
    } 
})

function display (error, message) {
    error.innerText = message;
    error.style.display = "block";
}

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
