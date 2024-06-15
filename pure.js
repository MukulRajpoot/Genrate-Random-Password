let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let specialsym = "!@#$%&*()_+,.[{}]"
let inputlength = document.querySelector(".enternum");
let upper = document.querySelector("#upper");
let lower = document.querySelector("#lower");
let number = document.querySelector("#number");
let symbol = document.querySelector("#symbol");
let button = document.querySelector(".button");
let resultshow = document.querySelector(".showresult");
let copybtn = document.querySelector("#copy");

let getdata = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]
}

let genratepassword = (password = "") => {
    if (upper.checked && password.length < inputlength.value) {
        password += getdata(uppercase);
    }
    if (lower.checked && password.length < inputlength.value) {
        password += getdata(lowercase);
    }
    if (number.checked && password.length < inputlength.value) {
        password += getdata(numbers);
    }
    if (symbol.checked && password.length < inputlength.value) {
        password += getdata(specialsym);
    }
    if (password.length < inputlength.value) {
        return genratepassword(password);
    }
    resultshow.value = password;

}
button.addEventListener("click", () => {
    genratepassword();
    copybtn.innerText = "copy!";
})
copybtn.addEventListener("click", () => {
    navigator.clipboard.writeText(resultshow.value);
    copybtn.innerText = "copied!"
})
