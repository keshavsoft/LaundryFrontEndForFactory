const StartFunc = async() => {
    let jVarLocalBranchNames = await GetFetch();
    jVarLocalBranchNames.forEach(element => {
        jFLocalAddToItems({ inBranchName: element });
    });
};

const jFLocalAddToItems = ({ inBranchName }) => {
    // Corrected jQuery syntax for option creation and appending to select element
    var option = $('<option></option>').val(inBranchName).text(inBranchName);
    $('#Branch').append(option);
};

const GetFetch = async () => {
    let LocalUrl = "/Custom/Cleaning/Factory/V2/Common/BranchName";
    let response = await fetch(LocalUrl);
    let Data = await response.json();
    return Data;
};

export { StartFunc };