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
    
    data.forEach(element => {
        const cards = document.createElement("div");
        const card = document.createElement("div");
        const cardHeader = document.createElement("div");
        const img = document.createElement("img");
        const cardContent= document.createElement("div");
        const h3 = document.createElement("h3");
        const h6  = document.createElement("h6");
        const p = document.createElement("p");
        const classes=["col-md-4","col-sm-12"]
        for (const i of classes) {
            cards.classList.add(i);
        }
        if(element.img_link){
            document.body.appendChild(cards)
        cards.appendChild(card);
        card.classList.add("card")
        card.appendChild(cardHeader);
        cardHeader.classList.add("card-header")
        cardHeader.appendChild(img);
        img.src=element.img_link
        card.appendChild(cardContent);
        cardContent.appendChild(h3);
        h3.textContent=element.title
        cardContent.appendChild(h6);
        cardContent.appendChild(p);
        p.textContent=element.description
        row.appendChild(cards);
        }
        
    });
    
}
