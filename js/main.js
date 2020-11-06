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
const child = document.getElementById('js--child');
const info__box = document.getElementById('js--info__box');
const endPageDocuButton = document.getElementById('js--endPageDocuButton');
const endpageBackButton = document.getElementById('js--endpageBackButton');
const endPageInteviewButton = document.getElementById('js--endPageInteviewButton');
const endPageResetButton = document.getElementById('js--endPageResetButton');
const breath = document.getElementById('js--breath');

image__discription.innerHTML = "";
const dotColor__active = "#eee";
const dotColor__notActive = "#3c3c3c";

let tCount = 0;

const list = ["./img/cityBg.jpg", "./img/streetView.jpg", "./img/suburbsBg.jpg"];
const description_list = ["Het centrum van Kobani. Hier is het meest gevochten tussen ISIS en het Koerdische verzet", "Deze straat een stukje buiten het centrum is laatst nog door ISIS gebombardeerd", "Een buitenwijk zo ver van het centrum en toch zo hard getroffen door ISIS"];
const locatie = ["het centrum", "de straat", "de buitenwijk"];
const locatiePage = [woodsPage, fisch, towerPage];
let i = 0;
let x = 0;

wind.loop = true;
wind.play();

const walkingSoundPlay = () =>{
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

const setButtonsActive = () =>{
  setTimeout(() =>{
    change_img__forwards.removeAttribute('disabled');
    change_img__backwards.removeAttribute('disabled');
    change_img__forwards.style.opacity = 1;
  }, 9000);
}

setButtonsActive();

change_img__forwards.onclick = () =>{
  walkingSoundPlay();
  fadeFigure.style.filter = "blur(5rem)";
  image__discription.innerHTML = "";
  change_img__forwards.setAttribute('disabled', 'true');
  change_img__backwards.setAttribute('disabled', 'true');
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
    },3000);
    setTimeout(() =>{
      change_img__forwards.removeAttribute('disabled');
      change_img__backwards.removeAttribute('disabled');
      console.log('button work');
      }, 10000);
  }

change_img__backwards.onclick = () =>{
  walkingSoundPlay();
  fadeFigure.style.filter = "blur(5rem)";
  image__discription.innerHTML = "";
  change_img__forwards.setAttribute('disabled', 'true');
  change_img__backwards.setAttribute('disabled', 'true');
  console.log('button no work');
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
    },3000);
  setTimeout(() =>{
    change_img__forwards.removeAttribute('disabled');
    change_img__backwards.removeAttribute('disabled');
    console.log('button work');
  }, 9000);
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
    breath.play();
    setTimeout(() =>{
    fireGun();
    if (target[n].classList.contains('targetShot') == false) {
      tCount++;
      targetCounter.innerHTML = "Targets: " + tCount + "/7";
    };
    switch (target[n]) {
      case target[0]:
          info__box.innerHTML = "<h1>De Koerden</h1><p>Wie zijn de koerden nou eigenlijk? De koerden zijn een bevolkingsgroep die vooral in het midden-oosten. Een eigen land, dus ze wonen in landen zoals Turkije, Iran, Irak en Syrië. Het grootste gedeelte van de koerden is Moslim, zo'n 90%! daarnaast zijn de overige 10% verdeelt onder Christenen en Joden. De Syrische Koerden liggen zwaar onder vuur door IS omdat ze vooral in het noorden van Syrië wonen, de plek waar IS Syrië is binnen gevallen. Ondanks de onderdrukking blijven ze wel terug vechten want de koerden zijn een trots en volhardend volk</p><button type='button' name='button' id='js--closeInfoButton'>close</button>"
          document.getElementById('js--closeInfoButton').onclick = () =>{
            closeInfo();
          }
        break;
      case target[1]:
          info__box.innerHTML = "<h1>Terreurgroep ISIS</h1><p>Wie kent ISIS ondertussen nog niet? Hier in het westen zijn ze vaak genoeg op het nieuws geweest maar wie zijn het nou eigenlijk en wat willen ze? Het ISIS zoals wij het kennen bestaat sinds 2013 en in hun woorden willen ze: zich verzetten tegen de Amerikanen in Irak en het oprichten van hun eigen heilige staat. Dit doen ze alleen wel met veel geweld en terroristische aanslagen. Zo geven ze iedereen in hun overgenomen gebied de keuzen om naar hun geloof te bekeren of om dood te worden gemaakt</p><button type='button' name='button' id='js--closeInfoButton'>close</button>"
          document.getElementById('js--closeInfoButton').onclick = () =>{
            closeInfo();
          }
        break;
      case target[2]:
          info__box.innerHTML = "<h1>Kobani</h1><p>De woonplaats van Haron zelf, Kobani of 'Ayn al-'Arab . Een stad in het noord-oosten van Syrië op de grens met Turkijë. De stad was van september 2014 tot maart 2015 het toneel van gevechten tussen Koerdische strijdkrachten en terreurgroep IS, tijdens de Syrische Burgeroorlog. Dit leidde tot een grote stroom vluchtelingen aan de grens met Turkije. Door het vele vechten in en rondom de stad is het sinds 2012 onder controle van de Koerdische Volksbeschermingseenheden(YPG)</p><img id = 'js--kobaniOnMap' src = '/img/kobaniMaps.jpg' height = '80%' width = '80%'></img><button type='button' name='button' id='js--closeInfoButton'>close</button>"
          document.getElementById('js--kobaniOnMap').style.padding = '1rem';
            document.getElementById('js--closeInfoButton').onclick = () =>{
            closeInfo();
          }
        break;
      case target[3]:
          info__box.innerHTML = "<h1>Bom aanslagen</h1><p id = 'js--warning'><b>! Kijk uit, schokende beelden !</b></p> <video id = 'js--video' width = '90%' height = '70%' controls><source src = '/vid/bomAanslag.mp4' type='video/mp4'></video><p>In dit video fragment worden meerdere bom aanslagen door IS laten zien. Dit is een van de manieren waarop IS oorlog voerd. zelfs als ze moeten terugtrekken weten ze nog wel tereur te zaaien in de gebieden die veilig horen te zijn</p><button type='button' name='button' id='js--closeInfoButton'>close</button>"
          document.getElementById('js--warning').style.textAlign = 'center';
          document.getElementById('js--video').style.padding = '1rem';
          document.getElementById('js--closeInfoButton').onclick = () =>{
            closeInfo();
          }
        break;
      case target[4]:
          info__box.innerHTML = "<h1>Sniper vaardigheden</h1><p>Welke skills heb je nou precies nodig om een effectieve scherpschutter te zijn?<br>Geduld: Als sniper moet je ontzettend lang op de zelfde plek kunnen blijven wachten, wachtend op je doelwit. dit kan soms wel uren tot dagen duren!</p><img width = '40%' height = '60%'  src = '/img/snipersNest.jpg'></img><p>Soms ook in kleine ruimtes zoals deze.<br><br>Een vaste hand: Je bent een scherpschutter dus je doelwitten zijn meestal op verre afstanden te vinden. Hiervoor moet je je geweer goed stil kunnen houden want op zulke afstanden kan elke bewegen leiden tot het missen van je target.<br><br> Wiskunde: Jaja, zelfs als scherpschutter heb je een goede hoop wiskunde nodig. Zo moet je de afstand naar je doelwit kunnen inschatten om het vallen van je kogel tegen te gaan. en moet je de snelheid van je doelwit ook meerekenen anders schiet je voor of achter je target</p><button type='button' name='button' id='js--closeInfoButton'>close</button>"
          document.getElementById('js--closeInfoButton').onclick = () =>{
            closeInfo();
          }
        break;
      case target[5]:
          info__box.innerHTML = "<h1>Sniper apparatuur</h1><p>In Kobani heb je als sniper niet zo veel tot je beschiking als bijvoorbeeld het amerikaanse leger. Hier moet je het doen met een simpele sniper, een veldfles en spullen die je zelf kan vinden.<br><br> Wil je jezelf een comfortabele plek geven om in te wachten? dan zoek je wat dekens en kussens op in verlaten huizen. Wil je weten waar een vijandelijke sniper zit? kijk goed of je de glans van zijn vizier kan zien.</p><button type='button' name='button' id='js--closeInfoButton'>close</button>"
          document.getElementById('js--closeInfoButton').onclick = () =>{
            closeInfo();
          }
        break;
      case target[6]:
          info__box.innerHTML = "<h1>De Syrische Burgeroorlog</h1><p>Naast ISIS zitten de koerden ook nog eens in een oorlog die al sinds 2011 bezig is. Deze oorlog is tegen het leger van Syrische president al-Assad. Het begon met protesten tegen deze president die uiteindelijk uitliepen tot het geweldadig neer slaan hiervan.<br><br>Tijdens deze oorlog heeft de gewapende tak van Koerdische partij PYD (de YPG) de kans gepakt om een eigen autonoom gebied op te stellen in noord-oost Syrië, Rojava of West-Koerdistan. dat betekend dat deze partij daar de macht heeft en niet de Syrische overheid.<br><br>Vanaf 2015 werd ISIS een partij in deze oorlog met de wens hun eigen heilige staat op te richten, een kalifaat </p><button type='button' name='button' id='js--closeInfoButton'>close</button>"
          document.getElementById('js--closeInfoButton').onclick = () =>{
            closeInfo();
          }
        break;
      default:
      info__box.innerHTML = "peepee poopoo"
    }
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

child.onclick = () =>{
  breath.play();
  setTimeout(() =>{
    fireGun();
    info__box.innerHTML = "<h1>Kinder Soldaten</h1><video id = 'js--videoSniper' width = '90%' height = '70%' controls><source src = '/vid/sniper.mp4' type='video/mp4'></video><p>Een vreselijke gedachten maar helaas wel de realiteit. IS (en andere terreurgroepen) gebruiken zelfs de onschuld van kinderen en vrouwen om hun doelen te bereiken</p><button type='button' name='button' id='js--closeInfoButton'>close</button>"
    document.getElementById('js--closeInfoButton').onclick = () =>{
      closeInfo();
    };
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
    }
  },750);
}

const closeInfo = () =>{
  for (let i = 0; i < info.length; i++) {
    info[i].style.opacity = '0';
    setTimeout(() =>{
      if (tCount == 7) {
        info[i].style.display = 'none';
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

endPageDocuButton.onclick = () =>{
  location.href = "https://www.youtube.com/watch?v=0H-NNvNbW58&has_verified=1&ab_channel=JourneymanPictures"
}

endPageInteviewButton.onclick = () =>{
  location.href = "https://www.human.nl/lees/2019/interview-reber-dosky.html"
}

endpageBackButton.onclick = () =>{
  endPage.style.display = 'none';
  navPage.style.display = 'grid';
  restoreUi();
  targetCounter.style.display = 'block';
}

endPageResetButton.onclick = () =>{
  location.href = "https://sniperkobani.firebaseapp.com/"
}

document.addEventListener('mousemove', onMouseMove);

typeText(Array.from(description_list[x]));
