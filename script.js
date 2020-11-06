// I figured out my CORS error workaround from https://github.com/shashikunal/newsApiProject
// This code is very similar to theirs, but I adapted it for my project
//The CORS error kept coming no matter what I did, even after the business API
//Couldn't figure out how to not show null values
//API Key: 78b9d599c4f94f8fa3afb1a5458928d6


//search for topic of articles
search = document.getElementById("search");

//created function to make the user's search input usable
//code was taken from Mozilla's documentation
search.addEventListener("keyup", e => {
  var topic = e.target.value;
  getNews(topic);
});

//function that takes in user's search input
//contains all three of the wanted topics
//all three of the headline functions are basically identical
function getNews(topic){
  //tech headlines
  const TechUrl = `https://newsapi.org/v2/top-headlines?pageSize=100&category=technology&language=en&country=us&q=${topic}&apiKey=78b9d599c4f94f8fa3afb1a5458928d6`;
  window
    .fetch(TechUrl)
    .then(data => {
      data
        .json()
        .then(technews => {
          console.log(technews);
          let techData = technews.articles;
          let output = "";
          //iterates through the articles and returns necessary information
          for (let tech of techData) {
            output += `
                
                  <h1 class="h1Title"><a href="${tech.url}" target=_blank>${tech.title}</a></h1>
                  <p>${tech.description}</p>
                  <img src="${tech.urlToImage}" />
                  <p>${tech.publishedAt}</p>
              `;
          }

          document.getElementById("right").innerHTML = output;
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
    //sports headlines
    const SportsUrl = `https://newsapi.org/v2/top-headlines?pageSize=100&category=sports&language=en&country=us&q=${topic}&apiKey=78b9d599c4f94f8fa3afb1a5458928d6`;
    window
    .fetch(SportsUrl)
    .then(data => {
      data
        .json()
        .then(sportsnews => {
          console.log(sportsnews);
          let sportsData = sportsnews.articles;
          let output = "";
          for (let sports of sportsData) {
            output += `
                
                  <h1 class="h1Title"><a href="${sports.url}" target=_blank>${sports.title}</a></h1>
                  <p>${sports.description}</p>
                  <img src="${sports.urlToImage}" />
                  <p>${sports.publishedAt}</p>
              `;
          }

          document.getElementById("center").innerHTML = output;
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));

    //entertainment headlines
    const EntUrl = `https://newsapi.org/v2/top-headlines?pageSize=100&category=entertainment&language=en&country=us&q=${topic}&apiKey=78b9d599c4f94f8fa3afb1a5458928d6`;
    window
      .fetch(EntUrl)
      .then(data => {
        data
          .json()
          .then(ent => {
            let entData = ent.articles;
            let output = "";
            for (let ent of entData) {
                
              output += `
                  
                    <h1 class="h1Title"><a href="${ent.url}" target=_blank>${ent.title}</a></h1>
                    <p>${ent.description}</p>
                    <p>${ent.author}</p>
                    <img src="${ent.urlToImage}" />
                    <p>${ent.publishedAt}</p>
                `;
            }
  
            document.getElementById("left").innerHTML = output;
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
}
