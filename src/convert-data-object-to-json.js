const convertDataObjectToJson = (dataObject) => {
    const indentationSpaces = 2;
    const replacer = null;
    const jsonString = JSON.stringify(dataObject, replacer, indentationSpaces);

    return jsonString;
}

module.exports = {
    convertDataObjectToJson,
};