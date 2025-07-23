// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(password) {
    if (password.length < 6) {
        return "Weak";
    } else if (password.length >=6 && password.length <=10) {
        return "Medium";
    } else if (password.length > 10) {
        return "Strong";
    } else {
        return "N/A";
    }

}

userPassword = "ssswnalWadqQ"
console.log(checkPasswordStrength(userPassword));

userPassword = "TechUp"
console.log(checkPasswordStrength(userPassword));

userPassword = "abcde"
console.log(checkPasswordStrength(userPassword)); 
