let StartFunc = () => {

    let jVarLocalInputPkId = jFLocalFromDomInputPkId();
    // console.log('jVarLocalInputPkId',jVarLocalInputPkId);
    let jVarLocalEval = "{{KS}}.split(\"~\")[0].search(\"-\") === -1 ? {{KS}}.split(\"~\")[0] : {{KS}}.split(\"~\")[0].split(\"-\")[1]";

    let jVarLocalId = eval(jVarLocalEval.replaceAll("{{KS}}", `"${jVarLocalInputPkId}"`));
    console.log('jVarLocalId:',jVarLocalId);
   
    return jVarLocalId;
};

let jFLocalFromDomInputPkId = () => {
    let jVarLocalHtmlInputPkId = 'ScanDC';
   let jVarHtmlInputPkId = document.getElementById(jVarLocalHtmlInputPkId);
   let jVarHtmlInputPkIdValue = jVarHtmlInputPkId.value.trim();
   return jVarHtmlInputPkIdValue;
};

export { StartFunc }