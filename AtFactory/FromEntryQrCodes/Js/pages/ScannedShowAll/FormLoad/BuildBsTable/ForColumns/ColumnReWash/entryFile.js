let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
};

let jVarLocalFormatterFunc = (value, row, index) => {
    console.log("value : ", value);
    if (value === true) {
        return '<span class="badge" style="background-color: #435ebe;">Washing</span>';
    } else {
        return '<span class="badge bg-success">Washed</span>';
    };
};

export { StartFunc };