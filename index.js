let containerEl = document.getElementById("container");
const url = "https://jsonplaceholder.typicode.com/posts";

function createAndAppendSearchResult(result) {
    let { title, body } = result;

    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");

    let headingEl = document.createElement("h1");
    headingEl.textContent = title;
    resultItemEl.appendChild(headingEl);

    let descriptionEl = document.createElement("p");
    descriptionEl.textContent = body;
    resultItemEl.appendChild(descriptionEl);

    let hrEl = document.createElement("hr");
    resultItemEl.appendChild(hrEl);

    containerEl.appendChild(resultItemEl);
}

function displayResults(searchResults) {
    for (let result of searchResults) {
      createAndAppendSearchResult(result);
    }
  }

const fetchPosts = async() => {
    const response = await fetch(url);
    const jsonData = await response.json();
    displayResults(jsonData);
}


function getPosts(){
    fetchPosts();
}