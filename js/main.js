const change_img__forwards = document.getElementById('js--change_img--forwards');
const change_img__backwards = document.getElementById('js--change_img--backwards');
const fadeFigure = document.getElementById('js--fadeFigure');
const fadeFigure__image = document.getElementById('js--fadeFigure__image');
const overlay = document.getElementById('js--overlay');
const image__discription_box = document.getElementById('js--image__discription_box');
const image__discription = document.getElementById('js--image__discription');
const bubbles = document.getElementsByClassName('nav__bubbles__dot');
const image__discription__button = document.getElementById("js--image__discription__button");
const backButton = document.getElementsByClassName('backButton');
const woodsPage = document.getElementById('js--woodsPage');
const fisch = document.getElementById('js--fisch');
const towerPage = document.getElementById('js--towerPage');
const navPage = document.getElementById('js--navPage');
const scope = document.getElementsByClassName('scope');
const targetCounter = document.getElementById('js--targetCounter');
const target = document.getElementsByClassName('target');
const info = document.getElementsByClassName('info');
const closeInfoButton = document.getElementsByClassName('closeInfoButton');
const infoBackground = document.getElementsByClassName('info__background');
const gunFire = document.getElementById('js--gunFire');
const walkingSound = document.getElementById('js--walkingSound');
const wind = document.getElementById('js--wind');
const endPage = document.getElementById('js--endPage');
const campfireSound = document.getElementById('js--campfireSound');

image__discription.innerHTML = "";
const dotColor__active = "#eee";
const dotColor__notActive = "#3c3c3c";

let tCount = 5;

const list = ["./img/Forest.jpg", "./img/Moby-logo.png", "./img/Tower.jpg"];
const description_list = ["Via dit bos pad zal ik bij het vluchtelingen kamp kunnen komen", "this be a fish >:(", "Vanaf deze toren heb ik een perfect uitzicht over het dorp"]
const locatie = ["het bospad", "de fisch", "de wachttoren"];
const locatiePage = [woodsPage, fisch, towerPage];
let i = 0;
let x = 0;

const walkingSoundPlay = () =>{
  // TODO: zet wind play op start knop van kevin
  wind.loop = true;
  wind.play();
  walkingSound.play();
  setTimeout(() => {walkingSound.pause(); walkingSound.currentTime = 0;}, 6000);
}

const removeUi = () =>{
  overlay.style.opacity = 0;
  change_img__forwards.style.opacity = 0;
  change_img__backwards.style.opacity = 0;
  image__discription_box.style.opacity = 0;
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].style.opacity = 0;
  }
  fadeFigure__image.style.transform = 'scale(1.4)';
}

const restoreUi = () =>{
  overlay.style.opacity = 1;
  change_img__forwards.style.opacity = 1;
  change_img__backwards.style.opacity = 1;
  image__discription_box.style.opacity = 1;
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].style.opacity = 1;
  }
  fadeFigure__image.style.transform = 'scale(1)';
}

change_img__forwards.onclick = () =>{
  walkingSoundPlay();
  fadeFigure.style.filter = "blur(5rem)";
  image__discription.innerHTML = "";
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
      image__discription__button.innerHTML = "";
      image__discription__button.innerHTML = "Naar " + locatie[i];
    }else {
      bubbles[i].style.backgroundColor = dotColor__active;
      bubbles[i + 1].style.backgroundColor = dotColor__notActive;
      i++;
      x++;
      fadeFigure__image.setAttribute("src", list[i]);
      typeText(Array.from(description_list[x]));
      image__discription__button.innerHTML = "";
      image__discription__button.innerHTML = "Naar " + locatie[i];
    }
      fadeFigure.style.filter = "blur(0)";
      change_img__forwards.disabled = false;
      change_img__backwards.disabled = false;
    },3000);
  }

change_img__backwards.onclick = () =>{
  walkingSoundPlay();
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
      image__discription__button.innerHTML = "";
      image__discription__button.innerHTML = "Naar " + locatie[i];
    }else {
      bubbles[i].style.backgroundColor = dotColor__active;
      bubbles[i - 1].style.backgroundColor = dotColor__notActive;
      i--;
      x--;
      fadeFigure__image.setAttribute("src", list[i]);
      typeText(Array.from(description_list[x]));
      image__discription__button.innerHTML = "";
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

image__discription__button.onclick = () =>{
  walkingSoundPlay();
  removeUi();
  setTimeout(() =>{
    navPage.style.display = "none";
    locatiePage[x].style.display = "block";
    document.body.style.cursor = "none";
  },3000);
  setTimeout(() =>{
    for (let i = 0; i < scope.length; i++) {
      scope[i].style.opacity = 1;
    }
  }, 3500);
}

for (let n = 0; n < backButton.length; n++) {
  backButton[n].onclick = () =>{
    fireGun();
    setTimeout(() =>{locatiePage[x].style.display = "none";
    navPage.style.display = "grid";
    document.body.style.cursor = "default";}, 750)
    setTimeout(() =>{restoreUi();}, 1000);
  }
}

const onMouseMove = (e) =>{
  for (var i = 0; i < scope.length; i++) {
    scope[i].style.left ='calc(' + e.pageX + 'px - 5rem)';
    scope[i].style.top = 'calc(' + e.pageY + 'px - 5rem)';
  }
}

const fireGun = () =>{
  gunFire.currentTime = 5;
  gunFire.play();
  setTimeout(() => {gunFire.pause(); gunFire.currentTime = 0;}, 1500);
}

for (let n = 0; n < target.length; n++) {
  target[n].onclick = () =>{
    fireGun();
    setTimeout(() =>{
    if (target[n].classList.contains('targetShot') == false) {
      tCount++;
      targetCounter.innerHTML = "Targets: " + tCount + "/6";
    };
    target[n].classList.add('targetShot');
    for (let i = 0; i < info.length; i++) {
      info[i].style.display = "flex";
      setTimeout(() =>{
        info[i].style.opacity = '1';
      }, 500);
    }
    for (let i = 0; i < scope.length; i++) {
      scope[i].style.display ='none';
    }
    for (let i = 0; i < info.length; i++) {
      info[i].style.cursor = 'default';
      info[i].style['pointer-events'] = "auto";
    }}, 750);
  }
}

const closeInfo = () =>{
  for (let i = 0; i < info.length; i++) {
    info[i].style.opacity = '0';
    setTimeout(() =>{
      if (tCount == 6) {
        locatiePage[x].style.display = 'none';
        endPage.style.display = 'flex';
        targetCounter.style.display = 'none';
        wind.pause();
        wind.currentTime = 0;
        campfireSound.loop = true;
        campfireSound.volume = .7;
        campfireSound.play();
        endPage.style.cursor = 'default'
      }else {
        info[i].style.display = 'none';
        for (let i = 0; i < scope.length; i++) {
          scope[i].style.display ='block';
        }
      }
    }, 500);
  }
}

for (let i = 0; i < closeInfoButton.length; i++) {
  closeInfoButton[i].onclick = () =>{
    closeInfo();
  }
}

for (let i = 0; i < infoBackground.length; i++) {
  infoBackground[i].onclick = () =>{
    closeInfo();
  }
}

document.addEventListener('mousemove', onMouseMove);

typeText(Array.from(description_list[x]));
