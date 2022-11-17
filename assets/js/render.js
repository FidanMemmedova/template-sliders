const products = [
    {
        name:"HIGH-WAISTED PANTSDETAILS",
        price:49.90,
        src:"./assets/images/image6.jpg"
    }
    ,
    {
        name:"SQUARE TOE HEELED ASYMMETRIC LEATHER SANDALSDETAILS",
        price:99.90,
        src:"./assets/images/image5.jpg"
    }
    ,
    {
        name:"SQUARE TOE HEELED ASYMMETRIC LEATHER SANDALSDETAILS",
        price:99.90,
        src:"./assets/images/image3.jpg"
    }
    ,
    {
        name:"ANIMAL PRINT CUT-OUT CROSSBODY BAGDETAILS",
        price:45.90,
        src:"./assets/images/image4.jpg"
    }
];

function renderProducts(products) {
    let arrivals = document.querySelector(".new-arrivals-items");
    products.forEach(data => {
        arrivals.innerHTML += `<div class="new-arrivals-item">
        <img src=${data.src} alt="item-image" />
        <p>${data.name}</p>
        <p>${data.price} CAD</p>
      </div>`;
    });
}

renderProducts(products);


fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(data => element.innerHTML = data[0].name);

let element = document.querySelector(".new-arrivals-header h1");

