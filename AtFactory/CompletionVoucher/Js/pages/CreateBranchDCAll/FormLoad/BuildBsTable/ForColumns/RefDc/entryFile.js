let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
};

let jVarLocalFormatterFunc = (value, row, index) => {
    return [
        `<a class="like" href="./GenDcShow.html?RefDC=${row.pk}" title="DcGenarate">`,
        `<i class="bi bi-box-arrow-in-right"></i>`,
        '</a>  '
    ].join('');
};

export { StartFunc };