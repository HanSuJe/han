const getUrlParam = function (name) {
  var result = new RegExp('[\\?\&\#]' + name + '=([^\?\&\#]*)').exec(window.location.href);
  if (!result) {
    return 0;
  }
  return result[1] || 0;
}

export {
  getUrlParam
}
