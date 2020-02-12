const convertDataObjectToJson = (dataObject) => {
  const indentationSpaces = 2;
  const replacer = null;
  const jsonString = JSON.stringify(dataObject, replacer, indentationSpaces);

  return jsonString;
}

const putStringInPreHtmlTag = (stringContent) => {
  document.getElementById("out").innerHTML = stringContent;
};

const renderData = (data) => {
  const jsonString = convertDataObjectToJson(data);
  putStringInPreHtmlTag(jsonString);
};

module.exports = {
  prepareData: () => ({}),
  renderData: renderData,
};