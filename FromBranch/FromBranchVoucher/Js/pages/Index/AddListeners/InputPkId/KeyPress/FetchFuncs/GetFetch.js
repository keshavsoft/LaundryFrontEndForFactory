import { StartFunc as StartFuncRowpk } from "./InputRowData.js";

let StartFunc = async () => {
    let jVarLocalRowPk = StartFuncRowpk();

    let jVarLocalFetchUrl = `/binV4/BranToFactDC/Show/${jVarLocalRowPk}`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

