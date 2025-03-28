import { StartFunc as StartFuncBuildBSTables } from "./BuildBsTable/EntryFile.js";
import { StartFunc as AddListeners } from "../AddListeners/RefreshBSTableId/EntryFile.js";
import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";

const StartFunc = () => {
    StartFuncFromUrlParams();
    StartFuncBuildBSTables();
    AddListeners();
};

export { StartFunc };
