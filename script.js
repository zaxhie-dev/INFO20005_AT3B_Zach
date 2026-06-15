let products = {
    moby: {
      title: "Moby-Dick",
      author: "Herman Melville",
      price: "$45.00",
      image: "images/moby.jpg",
      description: "A classic novel about Captain Ahab's obsessive hunt for the white whale."
    },
  
    oldman: {
      title: "The Old Man and the Sea",
      author: "Ernest Hemingway",
      price: "$32.00",
      image: "images/oldman.jpg",
      description: "A short novel about an ageing fisherman and his struggle with a giant marlin."
    },
  
    wuthering: {
      title: "Wuthering Heights",
      author: "Emily Brontë",
      price: "$38.00",
      image: "images/wuthering.jpg",
      description: "A gothic novel exploring love, revenge and conflict across generations."
    }
  };
  
  let url = new URLSearchParams(window.location.search);
  let book = url.get("book");
  
  if (book) {
    let selectedProduct = products[book];
  
    document.getElementById("productTitle").textContent = selectedProduct.title;
    document.getElementById("productAuthor").textContent = selectedProduct.author;
    document.getElementById("productImage").src = selectedProduct.image;
    document.getElementById("productDescription").textContent = selectedProduct.description;
  
    document.getElementById("productPrice").innerHTML = selectedProduct.price + " <span>+ Free Shipping</span>";
  }