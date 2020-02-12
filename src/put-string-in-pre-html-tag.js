const putStringInPreHtmlTag = (stringContent) => {
    document.getElementById("out").innerHTML = stringContent;
};

module.exports = {
    putStringInPreHtmlTag,
};