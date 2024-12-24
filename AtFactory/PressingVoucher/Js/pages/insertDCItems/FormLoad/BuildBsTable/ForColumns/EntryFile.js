import { StartFunc as ColumnRewash } from "./ColumnRewash/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnRewash = LocalColumns.find(element => element.field === "Rewash");


    if (LocalColumnRewash === undefined === false) {
        ColumnRewash({ inFindColumn: LocalColumnRewash });
    };


};

export { StartFunc };