import { StartFunc as StartFuncCheckCookie } from "./CheckCookie.js";
import { StartFunc as StartFuncSetFocus } from "./SetFocus.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";
import { StartFunc as ShowOnDom } from "./ShowOnDom/EntryFile.js";

const StartFunc = ({ inSuccessFunc }) => {
    let localCheckCookie = StartFuncCheckCookie();

    if (localCheckCookie === true) {
        ShowOnDom();
        return true;
    } else {
        StartFuncSetFocus();
    };
    StartFuncAddListeners({ inSuccessFunc });
};
document.getElementById("togglePassword").addEventListener("click", function () {
    let passwordInput = document.getElementById("PasswordId");
    let icon = this.querySelector("i");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");
    }
});
export { StartFunc };