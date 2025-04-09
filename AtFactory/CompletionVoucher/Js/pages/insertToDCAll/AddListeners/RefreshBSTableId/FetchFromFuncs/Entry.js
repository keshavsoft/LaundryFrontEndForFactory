import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    jFLocalShowLoading();
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();
   
    if (jVarLocalDataNeeded.status === 200) {
        StartFuncAfterFetch(await jVarLocalDataNeeded.json());
    };
    jFLocalHideLoading();
};

const jFLocalShowLoading = () => {
    let jVarLocalLoadingButtonId = document.getElementById('LoadingButtonId');
    jVarLocalLoadingButtonId?.classList.remove('d-none');

    let jVarLocalRefreshATagId = document.getElementById('RefreshATagId');
    jVarLocalRefreshATagId?.classList.add('d-none');
};

const jFLocalHideLoading = () => {
    let jVarLocalLoadingButtonId = document.getElementById('LoadingButtonId');
    jVarLocalLoadingButtonId?.classList.add('d-none');
    
    let jVarLocalRefreshATagId = document.getElementById('RefreshATagId');
    jVarLocalRefreshATagId?.classList.remove('d-none');
};

export { StartFunc }