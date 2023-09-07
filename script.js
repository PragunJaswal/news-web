let India = document.getElementById('India');
let Science = document.getElementById('Science');
let Education = document.getElementById('Education');
let World = document.getElementById('World');
let logo = document.getElementById('navbarlogo');
const loader = document.querySelector("#loading");
function dispalyLoading(){
    loader.classList.add("display");
    setTimeout(()=>{
        loader.classList.remove("display");
    },50000)
}
function hideLoading(){
    loader.classList.remove("display");
}

const url = 'https://news-api-vaqm.onrender.com/';
window.addEventListener("load", fetchnews('news'))


logo.addEventListener('click', (e) => {
    fetchnews('news')
})
India.addEventListener('click', (e) => {
    fetchnews('news-india');
})
Science.addEventListener('click', (e) => {
    
    fetchnews('news-science');
})
Education.addEventListener('click', (e) => {
    fetchnews('news-education');
})
World.addEventListener('click', (e) => {
    fetchnews('news-world');
})


async function fetchnews(query) {
    dispalyLoading()
    try {
        const response = await fetch(`${url}${query}`)
        const data = await response.json()
        console.log(data);
        bindData(data);
    } catch (error) {
        console.log(error);
    }
    hideLoading();
}
function bindData(data) {
    const row = document.getElementById("Row");
    const cardsContainer = document.getElementById("cards-container");
    row.innerHTML = '';

    data.forEach(element => {
        const cards = document.createElement("div");
        const alink = document.createElement("a");
        alink.href=element.link;
        alink.id='links'
        const card = document.createElement("div");
        const cardHeader = document.createElement("div");
        const img = document.createElement("img");
        const cardContent = document.createElement("div");
        const h3 = document.createElement("h3");
        const h6 = document.createElement("h6");
        const p = document.createElement("p");
        const classes = ["col-md-4", "col-sm-12"]
        for (const i of classes) {
            cards.classList.add(i);
        }
        if (element.img_link) {
            // document.body.appendChild(cards)
            cards.appendChild(alink);
            alink.appendChild(card)
            card.classList.add("card")
            card.appendChild(cardHeader);
            cardHeader.classList.add("card-header")
            cardHeader.appendChild(img);
            img.src = element.img_link
            card.appendChild(cardContent);
            cardContent.appendChild(h3);
            h3.textContent = element.title
            cardContent.appendChild(h6);
            cardContent.appendChild(p);
            p.textContent = element.description
            row.appendChild(cards);
        }

    });

}
