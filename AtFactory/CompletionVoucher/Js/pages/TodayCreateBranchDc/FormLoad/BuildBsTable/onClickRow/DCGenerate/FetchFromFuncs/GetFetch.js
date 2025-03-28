import ConfigJson from "../../../../../Config.json" with { type: "json" };

let StartFunc = async ({inrowData}) => {
    let LocalID = inrowData.pk;
    let LocalFactoryName = localStorage.getItem("FactoryName");
    let jVarLocalFetchUrl = `${ConfigJson.GetUrl}/${LocalID}/${LocalFactoryName}`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

