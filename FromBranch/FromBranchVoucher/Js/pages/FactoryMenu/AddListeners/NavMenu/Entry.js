import { StartFunc as StartFuncRowpk } from "./InputRowData.js";

const StartFunc = () => {
    let jVarLocalRowPk = StartFuncRowpk();
    jFLocalToURL({ inRowPk: jVarLocalRowPk });
};
let jFLocalToURL = ({ inRowPk }) => {

    let LocalinRowPk = inRowPk;
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL("./insertQrCode.html", url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    new_url.searchParams.append('VoucherRef', LocalinRowPk);

    window.location.href = new_url.href;

};

export { StartFunc };