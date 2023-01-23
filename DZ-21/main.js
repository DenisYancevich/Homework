document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", function (event) {
    event.preventDefault();
    window.open(checkAndCorrectURL(document.getElementById("urlInput").value));
  });

function checkAndCorrectURL(url) {
  if (!url.includes("https://") && !url.includes("http://")) {
    return `https://${url}`;
  } else {
    return url;
  }
}
