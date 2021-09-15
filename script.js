// Fetching API DATA

async function getdata() {
    const data = await fetch("https://animechan.vercel.app/api/quotes");
    const finaldata = await data.json();
    console.log(finaldata);
    finaldata.forEach((showdata) => {
        display(showdata);
    });
}
  
function display({ anime, character, quote }) {
    console.log(character);
    const content_container = document.createElement("div");
    content_container.setAttribute("class","content_container");

    // Creating Anime-Name element
    const anime_name = document.createElement("h1");
    anime_name.setAttribute("class","anime_name");
    anime_name.innerText=anime;
    content_container.appendChild(anime_name);  

    
    // Creating Character Element
    const character1 = document.createElement("h1");
    character1.innerText=character
    content_container.appendChild(character1);
    // Creating Quote Element
    const quote1 = document.createElement("p");
    quote1.setAttribute("class","quote1");
    quote1.innerText=quote;
    content_container.appendChild(quote1);

    document.body.append(content_container)
}

getdata();
  