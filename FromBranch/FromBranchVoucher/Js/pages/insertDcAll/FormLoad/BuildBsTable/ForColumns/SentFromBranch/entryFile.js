let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = ItemsFormatter2;
    inFindColumn.footerFormatter = priceFormatter;

};

function ItemsFormatter2(value, row, index) {
    return [
        `<a class="like btn btn-info" href="./ShowDCBranchItems.html?VoucherRef=${row.pk}" title="Show">`,
        '<i class="bi bi-arrow-down-circle-fill"></i>',
        '<span class= "badge bg-secondary">',
        row.Sent,
        '</span >',
        '</a>',


    ].join('')
};

function priceFormatter(data) {
    var field = this.field
    return '' + data.map(function (row) {
        return +row.Sent
    }).reduce(function (sum, i) {
        return sum + i
    }, 0)
}

export { StartFunc };