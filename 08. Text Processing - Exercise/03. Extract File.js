function extractFile(path) {
  let lastPath = path.split("\\").pop();
  let ind = lastPath.lastIndexOf(".");

  let template = lastPath.substring(0, ind);
  let extention = lastPath.substring(ind + 1);
  console.log("File name: " + template);
  console.log("File extension: " + extention);
}
extractFile("C:\\Internal\\training-internal\\Template.pptx");
