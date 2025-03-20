import { StartFunc as FetchFuncs } from "./FetchFuncs/Entry.js";

let StartFunc = ({ inEvent }) => {
    if (inEvent.keyCode === 13) {
        FetchFuncs();
    };
};

export { StartFunc };