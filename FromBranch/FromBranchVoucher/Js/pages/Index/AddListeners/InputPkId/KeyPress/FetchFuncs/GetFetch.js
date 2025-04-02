import { StartFunc as StartFuncRowpk } from "./InputRowData.js";

let StartFunc = async () => {
    let jVarLocalRowPk = StartFuncRowpk();

    let jVarLocalFetchUrl = `/Custom/Cleaning/Factory/V2/Inward/Scan/Voucher/RowData/${jVarLocalRowPk}`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

