function reversStr(str) {
  let len = str.length;
  let revStr = "";
  for (let i = len; i >= 0; i--) {
    revStr += str.charAt(i);
  }
  console.log(revStr);
}
