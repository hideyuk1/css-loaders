/**
 * @param {String} url - address for the HTML to fetch
 * @return {String} the resulting HTML string fragment
 */
async function fetchHtmlAsText(url) {
  return await (await fetch(url)).text();
}

async function loadHtml(path) {
  const contentDiv = document.getElementById("app");
  contentDiv.innerHTML += await fetchHtmlAsText(path);
}

(async () => {
  await loadHtml("loaders/three-dots/three-dots.html");
})();
