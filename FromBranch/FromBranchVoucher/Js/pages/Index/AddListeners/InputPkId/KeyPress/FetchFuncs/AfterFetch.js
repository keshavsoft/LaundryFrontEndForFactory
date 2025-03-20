let StartFunc = (inData) => {
    if (inData?.SendDc === true) {
        jFLocalToURL({ inRowPk: inData?.pk });
    } else {
        jFLocalfalsFunc();
    };
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

let jFLocalfalsFunc = () => {
    Swal.fire({
        title: 'Not send DC !',
        text: 'I will close in 3 seconds.',
        timer: 3000
    })

};

export { StartFunc };