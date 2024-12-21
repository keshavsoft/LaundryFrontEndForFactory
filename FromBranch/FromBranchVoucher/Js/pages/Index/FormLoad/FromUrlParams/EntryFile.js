let StartFunc = () => {
  LocalFuncForBranchNameId();
  
};

let LocalFuncForBranchNameId = () => {
  let jVarLocalfactoryName = localStorage.getItem("FactoryName");

  let jVarLocalBranchNameId = document.getElementById('FactoryNameId');


  if (jVarLocalBranchNameId === null === false) {
    jVarLocalBranchNameId.innerHTML = jVarLocalfactoryName
  };
};

export { StartFunc }