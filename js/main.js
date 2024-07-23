const hero__wrapper = document.querySelector(".hero__wrapper")
const hero__img = document.querySelector(".hero__img")
const about = document.querySelector(".about")
const our = document.querySelector(".our")
const Delivery = document.querySelector(".Delivery")
const navbar__wrapper = document.querySelector(".navbar__wrapper")

// const posts__wrapper = document.querySelector(".hero__wrapper");
// const API__POSTS = "https://dummyjson.com/products";

// async function fetchPosts(api) {
//     try {
//         let response = await fetch(`${api}`);
//         let data = await response.json();
//         createCard(data.products); // data.products ni o'tkazish
//     } catch (error) {
//         console.error("Error fetching posts:", error);
//     }
// }

// function createCard(products) {
//     products.forEach((product) => {
//         let card = document.createElement("div");
//         card.classList.add("card", "card-compact", "bg-base-100", "w-96", "shadow-xl");
//         card.innerHTML = `
//             <figure>
//               <img src="${product.thumbnail}" alt="${product.title}">
//             </figure>
//             <div class="card-body">
//                 <h2 class="card-title">${product.title}</h2>
//                 <p>${product.description}</p>
//                 <p>${product.price}</p>
//                 <div class="card-actions justify-end">
//                     <button class="btn btn-outline btn-success">Buy Now</button>
//                 </div>
//             </div>`;
//         posts__wrapper.appendChild(card);
//     });
// }

// fetchPosts(API__POSTS);


const posts__wrapper = document.querySelector(".hero__wrapper");
const API__POSTS = "https://dummyjson.com/products";

async function fetchPosts(api) {
    try {
        let response = await fetch(`${api}`);
        let data = await response.json();
        createCard(data.products);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

function createCard(products) {
    products.forEach((product) => {
        let card = document.createElement("div");
        card.classList.add("hero__card");
        card.innerHTML = `
            <div class="hero__img">
                <img src="${product.thumbnail}" alt="${product.title}">
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

fetchPosts(API__POSTS);
