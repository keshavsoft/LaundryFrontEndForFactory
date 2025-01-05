import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";
import { StartFunc as ColumnSerial } from "./ColumnSerial/entryFile.js";

let StartFunc = ({ inColumns }) => {
  let LocalColumns = inColumns;
  let LocalColumnRate = LocalColumns.find(
    (element) => element.field === "Rate"
  );

  let LocalColumnSerial = LocalColumns.find(
    (element) => element.field === "KS-Serial"
  );

  if ((LocalColumnRate === undefined) === false) {
    ColumnRate({ inFindColumn: LocalColumnRate });
  }

  if ((LocalColumnSerial === undefined) === false) {
    ColumnSerial({ inFindColumn: LocalColumnSerial });
  }
};

export { StartFunc };
