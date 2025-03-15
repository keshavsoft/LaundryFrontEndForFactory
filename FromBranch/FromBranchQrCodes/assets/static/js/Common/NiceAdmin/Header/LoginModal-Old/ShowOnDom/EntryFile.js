const StartFunc = () => {
    jFLocalUser();
    jFLocalBranchLogOutId();
    jFLocalUserNameId();
};

let jFLocalUser = () => {
    let jVarLocalUserNameId = 'UserName'
    let jVarLocalHtmlId = document.getElementById(jVarLocalUserNameId);
    let jVarLocalUserName = localStorage.getItem("UserName");

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.innerHTML = jVarLocalUserName;
    };
};

let jFLocalBranchLogOutId = () => {
    let jVarLocalBranchId = 'BranchLogOutId';
    let jVarlocalBranch = document.getElementById(jVarLocalBranchId);
    let jVarLocalFactoryName = localStorage.getItem("FactoryName");

    if (jVarlocalBranch === null === false) {
        jVarlocalBranch.innerHTML = jVarLocalFactoryName;
    };
};

let jFLocalUserNameId = () => {
    let jVarLocalUserNameId = 'UserNameId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalUserNameId);
    let jVarLocalUserName = localStorage.getItem("UserName");

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.innerHTML = jVarLocalUserName;
    };
};
export { StartFunc }