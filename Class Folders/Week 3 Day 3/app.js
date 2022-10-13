// assign the div to a variable with jQuery
const $div = $("div")
console.log($div)

// change the text node.innerText = ""
$div.text("This is some new text") // change text
console.log($div.text()) // retrieve existing text

// change the html node.innerHTML = ""
$div.html("<h1>I changed the inner html</h1>")
console.log($div.html())

// change a style property node.style.property = ""
$div.css("color", "red") // changes it
console.log($div.css("color")) // retrieves it

// add a class node.classList.add("class")
$div.addClass("cheese")
$div.removeClass("cheese")

// add an event and use toggleClass
// node.addEventListener("event", () => {})
const $button = $("button")
$button.on("click", () => {
    $div.toggleClass("cheese")
})

// create an img and append to div
// document.createElement("img")
// node.setAttribute("src", "https://")
const $img = $("<img>")
$img.attr("src", "https://i.ytimg.com/vi/MjEaniGTrx0/maxresdefault.jpg")
console.log($img.attr("src"))
$div.append($img)


const $ul = $("ul")
const $liOne = $("<li>").text("1")
$ul.append($liOne)
const $liTwo = $("<li>").text("5")
$ul.append($liTwo)
const $liThree = $("<li>").text("3")
$liTwo.before($liThree)
const $liFour = $("<li>").text("2")
$liThree.before($liFour)
const $liFive = $("<li>").text("4")
$liTwo.before($liFive)