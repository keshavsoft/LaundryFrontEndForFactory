import UrlJson from './url.json' with {type: 'json'};

let StartFunc = ({ inrowData }) => {
    window.location.href = `./${UrlJson.RedirectToUrl}?RefDC=${inrowData.pk}`;
};

export { StartFunc };