import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnStatus } from "./ColumnStatus/entryFile.js";
import { StartFunc as ColumnReturn } from "./ColumnReturn/entryFile.js";
import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial")
    let LocalColumnStatus = LocalColumns.find(element => element.field === "Status");
    let LocalColumnReturn = LocalColumns.find(element => element.field === "EntryReturnStarus");
    let LocalColumnRate = LocalColumns.find(element => element.field === "Rate");

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };
    if (LocalColumnStatus === undefined === false) {
        ColumnStatus({ inFindColumn: LocalColumnStatus });
    };
    if (LocalColumnReturn === undefined === false) {
        ColumnReturn({ inFindColumn: LocalColumnReturn });
    };
    if (LocalColumnRate === undefined === false) {
        ColumnRate({ inFindColumn: LocalColumnRate });
    };
};
export { StartFunc };