class password {
    constructor() {
        this.upc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.lwc = "abcdefghijklmnopqrstuvwxyz";
        this.num = "1234567890";
        this.sym = "$_@&?!#/><\[]";
    }
    funnyPassword() {
        let arr = [
            `password`,
            `incorrect`,
            `12345678`,
            `iforgot`,
            `secret`,
            `MyPreciousssPasssword`,
            `MyName`,
            `nothing`,
            `user`,
            `maiNahiBatunga`,
            `Sorry`,
            `1$perhour`,
            `admin`,
            `passwordIs123`
        ]
        let pass = arr[Math.floor(Math.random() * arr.length)]
        return pass
    }

    weakPassword() {
        let arr = [this.upc, this.lwc]
        let pass = ""
        for (let i = 0; i < 8; i++) {
            let pass1 = Math.floor(Math.random() * arr.length)
            let pass2 = Math.floor(Math.random() * arr[pass1].length)
            pass = pass + arr[pass1][pass2]
        }
        return pass
    }

    strongPassword() {
        let arr = [this.upc, this.lwc, this.sym]
        let pass = ""
        for (let i = 0; i < 14; i++) {
            let pass1 = Math.floor(Math.random() * arr.length)
            let pass2 = Math.floor(Math.random() * arr[pass1].length)
            pass = pass + arr[pass1][pass2]
        }
        return pass
    }
    superStrongPassword() {
        let arr = [this.upc, this.lwc, this.num, this.sym]
        let pass = ""
        for (let i = 0; i < 20; i++) {
            let pass1 = Math.floor(Math.random() * arr.length)
            let pass2 = Math.floor(Math.random() * arr[pass1].length)
            pass = pass + arr[pass1][pass2]
        }
        return pass
    }
}
let disp = document.getElementById("disp");
let radio = document.getElementsByClassName("radio");
let btn = document.getElementById("btn");
let copy = document.getElementById("copy");

let generatedPassword = new password()

btn.addEventListener("click", () => {
    let pswd;
    if (radio[0].checked) {
        pswd = generatedPassword.funnyPassword()
    }
    else if (radio[1].checked) {
        pswd = generatedPassword.weakPassword()
    }
    else if (radio[2].checked) {
        pswd = generatedPassword.strongPassword()
    }
    else if (radio[3].checked) {
        pswd = generatedPassword.superStrongPassword()
    }
    disp.value = pswd
})
