var count = 1;
var text = "";
var favourites = [];
var interval_id = setInterval(change_img, 3000);
function change_img() {
  count++;
  if (count > 4) {
    count = 1;
  }
  let source = "image" + count + ".jpg";
  console.log(source);
  document.getElementById("banner").setAttribute("src", source);
}
function play() {
  hide_pause();
  interval_id = setInterval(change_img, 3000);
}
function pause() {
  show_pause();
  clearInterval(interval_id);
}
function add_to_favourite(item) {
  if (!favourites.includes(item)) {
    favourites.push(item);
  }
}

function show() {
  console.log("clicked");
  text = "";
  favourites.forEach(display);
  document.getElementById("favourites").innerHTML = text;
}

function display(item) {
  text += item + "<br>";
  console.log(text);
}

function show_pause() {
  document.getElementById("pause").innerHTML = "Paused";
}

function hide_pause() {
  document.getElementById("pause").innerHTML = "";
}
