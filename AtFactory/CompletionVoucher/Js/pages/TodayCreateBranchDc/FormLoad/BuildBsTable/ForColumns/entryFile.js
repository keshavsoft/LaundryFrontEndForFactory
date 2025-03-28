import { StartFunc as ColumnOperate } from "./ColumnOperate/entryFile.js";
import { StartFunc as RefDc } from "./RefDc/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "operate");

    ColumnOperate({ inFindColumn: LocalColumnOperateFine });

    let LocalColumnRefDC= LocalColumns.find(element => element.field === "RefDC");

    RefDc({ inFindColumn: LocalColumnRefDC });
};

export { StartFunc };