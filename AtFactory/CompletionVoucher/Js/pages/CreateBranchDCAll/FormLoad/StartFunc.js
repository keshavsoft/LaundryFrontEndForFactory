import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";
import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/RefreshBSTableId/EntryFile.js";

const StartFunc = () => {
    StartFuncFromUrlParams();
    StartFuncBuildBsTable();
    StartFuncAddListeners();
};

export { StartFunc };
