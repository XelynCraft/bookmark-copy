const defaultLinks = [
  [
    "Google",
    "https://www.google.com/",
    ["search", "web"],
    "hsl(210, 100%, 98%)",
  ],
  [
    "YouTube",
    "https://www.youtube.com/",
    ["video", "memes"],
    "hsl(240, 100%, 98%)",
  ],
  [
    "Reddit",
    "https://www.reddit.com/",
    ["news", "social"],
    "hsl(0, 100%, 98%)",
  ],
  ["Twitter", "https://twitter.com/", ["fake", "news"], "hsl(180, 100%, 98%)"],
];

function saveLinkToLocalStorage(link) {
  const links = getLinksFromLocalStorage();
  links.push(link);
  localStorage.setItem("links", JSON.stringify(links));
}

function saveLinksToLocalStorage(links) {
  localStorage.setItem("links", JSON.stringify(links));
}

function getLinksFromLocalStorage() {
  let links = [];
  const storedLinks = localStorage.getItem("links");
  if (storedLinks) {
    // Parse the JSON string back to JS data from localStorage
    links = JSON.parse(storedLinks);
  } else {
    // Use default data instead
    links = defaultLinks;
  }
  return links;
}

function getRandomColor() {
  return `hsl(${Math.random() * 360}, 100%, 98%)`;
}
