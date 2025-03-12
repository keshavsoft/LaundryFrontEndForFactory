import { StartFunc as fromLocalStorage } from "./fromLocalStorage.js";

const StartFunc = () => {
  fromLocalStorage();
 
 
  if ("AllMastersData" in localStorage) {
    let jVarLocalHeaderToDataListId =
      document.getElementById("HeaderToDataListId");
    jVarLocalHeaderToDataListId.click();
  }
};



export { StartFunc };
