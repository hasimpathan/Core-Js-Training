document.getElementById("fetchBtn").addEventListener("click", () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      data.forEach((element) => {
        const titleChar = element.title;
        const title = titleChar.charAt(0).toUpperCase() + titleChar.slice(1);
        const paragraph = element.body;

        html += ` <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">${title}</h5>
                          <p class="card-text">${paragraph}</p>
                        </div>
                    </div>    <hr>`;
        document.getElementById("cards").innerHTML = html;
      });
    })
    .catch((error) => console.error(error));
});
