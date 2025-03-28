import { StartFunc as StartFuncFuncToRun } from "./FetchFromFuncs/Entry.js";

let StartFunc = ({inrowData}) => {
    StartFuncFuncToRun({inrowData});
};

export { StartFunc };