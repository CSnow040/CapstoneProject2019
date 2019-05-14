// starts the page with running the cart function
window.onload = cart;
// cart is meant to be the area where you can keep track of what you select to buy
function cart() {
    var addButtons = document.getElementsByClassName("add");

    for (var i = 0; i < addButtons.length; i++) {
        addButtons[i].onclick = add;
    }
}
// the add function will work to add an item to the shop
function add(e) {
    var shopItem = e.target.nextElementSibling;
    // grabs the id of shopItem and stores it in itemID
    var itemID = shopItem.getAttribute("id");
    // clones the shopItem and gets the description through this way
    var description = shopItem.cloneNode(true);
    var cartBox = document.getElementById("checkout");
    var duplicateOrder = false;
    for (var n = cartBox.firstChild; n = n.nextElementSibling; n !== null) {
        if (n.id === itemID) {
            duplicateOrder = true;
            n.firstElementChild.textContent++;
            break;
        }
    }
    //check if the duplicateOrder is false
    if (duplicateOrder === false) {
        var orderCount = document.createElement("span");
        orderCount.textContent = "1";
        description.insertBefore(orderCount, description.firstChild);
        cartBox.appendChild(description);
    }
}