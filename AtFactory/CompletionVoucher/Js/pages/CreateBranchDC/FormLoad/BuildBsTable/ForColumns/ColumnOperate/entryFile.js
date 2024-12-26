let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
};

let jVarLocalFormatterFunc = (value, row, index) => {
    return [
        `<a class="like" href="#" title="DcGenarate">`,
        `<button type="button" class="btn btn-dark"><i class="bi bi-boxes"></i></button>`,
        '</a>  '
    ].join('');
};

export { StartFunc };