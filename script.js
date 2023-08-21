const url = "https://news-api-vaqm.onrender.com/news"
window.addEventListener("load",fetchnews())

async function fetchnews(){
    try {
        const response= await fetch(`${url}`)
        const data = await response.json()
        console.log(data);
        bindData(data);
    } catch (error) {
        console.log(error);
    }
}
function bindData(data){
    const row = document.getElementById("Row");
    const cardsContainer= document.getElementById("cards-container");
    row.innerHTML='';
    // console.log(cardsContainer);
    // console.log(row);
   
    const cards = document.getElementById("cards");
    // console.log(cards);
    
    data.forEach(element => {
        const cardClone = cards.cloneNode(true); 
        // console.log(cardClone);
        filldata(cardClone,element)
        row.appendChild(cardClone);
    });
}

function filldata(cardClone, element){
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    // const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");
    newsImg.src = element.img_link;
    newsTitle.innerHTML = element.title;
    newsDesc.innerHTML = element.description;
    // newsSource.innerHTML = element.link
    
}