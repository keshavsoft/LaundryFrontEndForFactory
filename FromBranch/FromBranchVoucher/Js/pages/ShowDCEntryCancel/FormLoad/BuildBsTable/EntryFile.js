import optionsJson from './options.json' with {type: 'json'};

import { StartFunc as onClickRow } from "./onClickRow/EntryFile.js";
import { StartFunc as queryParams } from "./queryParams/EntryFile.js";
import { StartFunc as ForColumns } from "./ForColumns/entryFile.js";


const StartFunc = () => {
    var $table = $('#table');

    optionsJson.onClickRow = onClickRow;
    optionsJson.queryParams = queryParams;
    ForColumns({ inColumns: optionsJson.columns });


    $table.bootstrapTable(optionsJson);
};

export { StartFunc };