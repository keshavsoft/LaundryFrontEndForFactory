import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();

    let jVarLocalbranchName = localStorage.getItem("FactoryName")
    let jVarLocalFetchUrl = `/Custom/Cleaning/Factory/V1/Process/Washing/Scan/QrCode/${jVarLocalbranchName}`;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };