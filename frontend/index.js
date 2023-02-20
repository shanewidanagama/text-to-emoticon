function convertInput() {
  let inputText = document.getElementById("inputText");
  let emoticon = String.fromCodePoint(inputText.value);
  document.write(emoticon);
}
