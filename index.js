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

const loadersRootPath = "loaders";

const loaders = [
  "three-dots",
  "moving-square-line",
  "nested-circles",
  "circular-bars"
];

const loadersPaths = loaders.map(
  loaderName => `${loadersRootPath}/${loaderName}/${loaderName}.html`
);

(async () => {
  for (const path of loadersPaths) {
    await loadHtml(path);
  }
})();
