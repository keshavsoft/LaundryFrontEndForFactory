let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
};

let jVarLocalFormatterFunc = (value, row, index) => {
    return [
        `<a class="like" href="#" title="DcGenarate">`,
        `<button type="button" class="btn" style="background-color: #0450a8; color:white;"><i class="bi bi-boxes"></i></button>`,
        '</a>  '
    ].join('');
};

export { StartFunc };