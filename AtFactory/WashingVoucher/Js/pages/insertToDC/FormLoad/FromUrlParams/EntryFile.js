let StartFunc = () => {
    jfDateFunc();
    let jVarLocalBranchId = 'FactoryNameId';
    let jVarlocalBranch = document.getElementById(jVarLocalBranchId);
    let jVarLocalBranchName = localStorage.getItem("FactoryName");

    if (jVarlocalBranch === null === false) {
        jVarlocalBranch.innerHTML = jVarLocalBranchName;
    };
};

function jfDateFunc() {
    const fromDateInput = document.getElementById("FromDateInputId");
    const toDateInput = document.getElementById("ToDateInputId");

    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    fromDateInput.value = formatDate(today);
    toDateInput.value = formatDate(today);
};
export { StartFunc }