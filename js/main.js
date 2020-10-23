const change_img__forwards = document.getElementById('js--change_img--forwards');
const change_img__backwards = document.getElementById('js--change_img--backwards');
const fadeFigure = document.getElementById('js--fadeFigure');
const fadeFigure__image = document.getElementById('js--fadeFigure__image');
const image__discription = document.getElementById('js--image__discription');
const bubbles = document.getElementsByClassName('nav__bubbles__dot');
const image__discription__button = document.getElementById("js--image__discription__button");

image__discription.innerHTML = "";
const dotColor__active = "#eee";
const dotColor__notActive = "#3c3c3c";

const list = ["/img/Forest.jpg", "/img/Moby-logo.png", "/img/Tower.jpg"];
const description_list = ["Via dit bos pad zal ik bij het vluchtelingen kamp kunnen komen", "this be a fish >:(", "Vanaf deze toren heb ik een perfect uitzicht over het dorp"]
const locatie = ["het bospad", "de fisch", "de wachttoren"];
let i = 0;
let x = 0;

change_img__forwards.onclick = () =>{
  fadeFigure.style.filter = "blur(5rem)";
  image__discription.innerHTML = "";
  image__discription__button.innerHTML = "";
  change_img__forwards.disabled = true;
  change_img__backwards.disabled = true;
  setTimeout(function () {
    if (i == list.length - 1) {
      bubbles[i].style.backgroundColor = dotColor__active;
      i = 0;
      x = 0;
      bubbles[i].style.backgroundColor = dotColor__notActive;
      fadeFigure__image.setAttribute("src", list[i]);
      typeText(Array.from(description_list[x]));
      image__discription__button.innerHTML = "Naar " + locatie[i];
    }else {
      bubbles[i].style.backgroundColor = dotColor__active;
      bubbles[i + 1].style.backgroundColor = dotColor__notActive;
      i++;
      x++;
      fadeFigure__image.setAttribute("src", list[i]);
      typeText(Array.from(description_list[x]));
      image__discription__button.innerHTML = "Naar " + locatie[i];
    }
      fadeFigure.style.filter = "blur(0)";
      change_img__forwards.disabled = false;
      change_img__backwards.disabled = false;
    },3000);
  }

change_img__backwards.onclick = () =>{
  fadeFigure.style.filter = "blur(5rem)";
  image__discription.innerHTML = "";
  change_img__forwards.disabled = true;
  change_img__backwards.disabled = true;
  setTimeout(function () {
    if (i == 0) {
      bubbles[i].style.backgroundColor = dotColor__active;
      i = list.length - 1;
      x = description_list.length - 1;
      bubbles[i].style.backgroundColor = dotColor__notActive;
      fadeFigure__image.setAttribute("src", list[i]);
      typeText(Array.from(description_list[x]));
      image__discription__button.innerHTML = "Naar " + locatie[i];
    }else {
      bubbles[i].style.backgroundColor = dotColor__active;
      bubbles[i - 1].style.backgroundColor = dotColor__notActive;
      i--;
      x--;
      fadeFigure__image.setAttribute("src", list[i]);
      typeText(Array.from(description_list[x]));
      image__discription__button.innerHTML = "Naar " + locatie[i];
    }
      fadeFigure.style.filter = "blur(0)";
      change_img__forwards.disabled = false;
      change_img__backwards.disabled = false;
    },3000);
  }

  typeText = (textToBeTyped) =>{
  if (textToBeTyped != "") {
    image__discription.innerHTML += textToBeTyped[0];
    textToBeTyped.splice(0,1);
    setTimeout(() =>{
      typeText(textToBeTyped)
    }, 100);
  }
}

typeText(Array.from(description_list[x]));
