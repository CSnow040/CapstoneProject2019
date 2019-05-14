var removeButton = document.getElementsByClassName("remove")
console.log(removeButton);

for (var i = 0; i < removeButton.length; i++) {
    var button = removeButton[i];
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target
    })
}