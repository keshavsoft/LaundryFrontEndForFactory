import { StartFunc as StartFuncFuncToRun } from "./FetchFromFuncs/Entry.js";

let StartFunc = () => {
    // let jVarLocalCustomerNameInputId = "ShowButtonId";
    // let jVarLocalHtmlId = document.getElementById(jVarLocalCustomerNameInputId);

    // jVarLocalHtmlId.addEventListener("click", StartFuncFuncToRun);

    
    const arrClass = document.querySelectorAll(".ShowButtonId");

    for (let i of arrClass) {
        i.addEventListener("click", StartFuncFuncToRun);
    };
};

export { StartFunc }