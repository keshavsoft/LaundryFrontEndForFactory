import { StartFunc as StartFuncFetchFuncs } from "./GetFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async ({ inrowData }) => {

    let jVarLocalDataNeeded = await StartFuncFetchFuncs({ inrowData });

    if (jVarLocalDataNeeded.status === 200) {
        StartFuncAfterFetch({ inrowData });
    } else {
        Swal.fire({
            title: "Already generated",
            icon: "warning"
        });
    };
};

export { StartFunc };