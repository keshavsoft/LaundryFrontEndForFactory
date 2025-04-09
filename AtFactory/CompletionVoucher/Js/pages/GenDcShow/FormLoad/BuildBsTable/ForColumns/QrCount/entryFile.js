let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
    inFindColumn.footerFormatter = priceFormatter;

};

function jVarLocalFormatterFunc(value, row, index) {
    //    console.log("row",row);

    return [
        `<a class="like btn" style="background-color: #0450a8; color:white;" href="./DCGenerateAllShowAll.html?BranchName=${row.BranchName}&RefDC=${row.pk}" title="Show">`,
        ' ',
        row.QrCount,
        '</a>',

    ].join('')

};

function priceFormatter(data) {
    var field = this.field
    return '' + data.map(function (row) {
        return +row.QrCount
    }).reduce(function (sum, i) {
        return sum + i
    }, 0)
}

export { StartFunc };