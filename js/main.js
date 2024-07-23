const posts__wrapper = document.querySelector(".hero__wrapper");
const API__POSTS = "https://dummyjson.com/products";

async function fetchPosts(api) {
    try {
        let response = await fetch(api);
        let data = await response.json();
        createCard(data.products);
    } catch (error) {
        console.error(error);
    }
}

function createCard(products) {
    while (posts__wrapper.firstChild) {
        posts__wrapper.firstChild.remove();
    }

    products.forEach((product) => {
        let card = document.createElement("div");
        card.dataset.id = product.id;
        card.classList.add("hero__card");
        card.innerHTML = `
            <div class="hero__img">
                <img class="img" src="${product.thumbnail}" alt="${product.title}">
            </div>
            <div class="hero__text">
                <div class="hero__context">
                    <p>${product.title}</p>
                    <p>${product.price} K</p>
                </div>
                <div class="hero__btn">
                    <div class="hero__button">
                        <button>Hot</button>
                        <button>Cold</button>
                    </div>
                    <div class="hero__icon">
                        <button>
                            <img src="./assets/shopping-cart-add_3916604.svg" alt="Add to cart">
                        </button>
                    </div>
                </div>
            </div>
        `;

        posts__wrapper.appendChild(card);
    });
}

posts__wrapper.addEventListener("click", (e) => {
    if (e.target.className.includes("img")) {
        let card = e.target.closest(".hero__card");
        if (card) {
            let cardId = card.dataset.id;
            window.open(`/pages/product.html?id=${cardId}`, "_self");
        }
    }
});

fetchPosts(API__POSTS);
