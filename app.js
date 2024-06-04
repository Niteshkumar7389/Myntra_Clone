let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem("bagItems");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  itemsDisplay();
  displayBagIcon();
}

function addBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCount = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bagItemCount.style.visibility = "visible";
    bagItemCount.innerText = bagItems.length;
  } else {
    bagItemCount.style.visibility = "hidden";
  }
}

function itemsDisplay() {
  let itemsContainerElement = document.querySelector(".items-container");
  if (!itemsContainerElement) {
    return;
  }
  let innerHTML = "";
  items.forEach((item) => {
    innerHTML += `
<div class="item-container">
    <img class="item-img" src="${item.img}" alt="item image">
    <div class="rating">
    ${item.rating.stars}⭐ | ${item.rating.noOfReviews}
    </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">Rs.${item.current_price}</span>
        <span class="original-price">Rs.${item.original_price}</span>
        <span class="discount">( ${item.discount_percent} % Off)</span>
    </div>
    <button class="btn-add"onclick="addBag(${item.id})">Add to Bag</button>
</div>`;
  });
  itemsContainerElement.innerHTML = innerHTML;
}
