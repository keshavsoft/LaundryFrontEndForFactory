import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";
import { StartFunc as ColumnSerial } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnScan } from "./ColumnScan/entryFile.js";
import { StartFunc as ColumnReturn } from "./ColumnReturn/entryFile.js";

let StartFunc = ({ inColumns }) => {
  let LocalColumns = inColumns;
  let LocalColumnRate = LocalColumns.find(
    (element) => element.field === "Rate"
  );

  let LocalColumnSerial = LocalColumns.find(
    (element) => element.field === "KS-Serial"
  );

  let LocalColumnScan = LocalColumns.find(
    (element) => element.field === "Status"
  );

  let LocalColumnReturn = LocalColumns.find(
    (element) => element.field === "Return"
  );

  if ((LocalColumnRate === undefined) === false) {
    ColumnRate({ inFindColumn: LocalColumnRate });
  }

  if ((LocalColumnSerial === undefined) === false) {
    ColumnSerial({ inFindColumn: LocalColumnSerial });
  }

  if ((LocalColumnScan === undefined) === false) {
    ColumnScan({ inFindColumn: LocalColumnScan });
  }

  if ((LocalColumnReturn === undefined) === false) {
    ColumnReturn({ inFindColumn: LocalColumnReturn });
  }
};

export { StartFunc };
