import { StartFunc as StartFuncFetchFuncs } from "./GetFetch.js";
import { StartFunc as AfterFetch } from "./AfterFetch.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();

    if (jVarLocalDataNeeded.status === 200) {
        let jVarLocalJsonData = await jVarLocalDataNeeded.json();
        AfterFetch(jVarLocalJsonData)
    } else {
        Swal.fire({
            title: 'No DC',
            text: 'I will close in 3 seconds.',
            timer: 3000
        })
    }
};

export { StartFunc };