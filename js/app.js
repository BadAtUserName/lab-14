'use strict';

function AppState() {
  this.allProducts = [];
}
//instantiates products
AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  //loops though names and creates new product based on constructor based on app state
  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }

}

AppState.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save product data to local storage step 1

  //1. convert data to STRING****
  let stringifedProducts = JSON.stringify(state.allProducts);
//2. store stringified data to local storage****SET items 
  localStorage.setItem('allProducts',stringifedProducts)
}

AppState.prototype.loadItems = function () {

  // TODO: Update this instance method to retrieve data from local storage instead of creating new Products on each page load
  //IF IF IF IF IF there are  things in local storage do that instead of (else)
  //3. GET items from local storage
  if(localStorage.getItem('allProducts')) {
    let allProductsString = localStorage.getItem('allProducts');
    state.toys = JSON.parse(allProductsString);
  } else {
    this.instantiateProducts();
  }
}

// builds actual products
function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}
