const change_img__forwards = document.getElementById('js--change_img--forwards');
const change_img__backwards = document.getElementById('js--change_img--backwards');
const fadeFigure = document.getElementById('js--fadeFigure');
const fadeFigure__image = document.getElementById('js--fadeFigure__image');
const image__discription = document.getElementById('js--image__discription');

image__discription.innerHTML = "";

const list = ["/img/Felipe.png", "/img/Moby-logo.png"];
const description_list = ["this be felipe :D", "this be a fish >:("]
let i = 0;
let x = 0;


change_img__forwards.onclick = () =>{
  fadeFigure.style.filter = "blur(5rem)";
  image__discription.innerHTML = "";
  console.log("peepo");
  setTimeout(function () {
    if (i == list.length - 1) {
      i = 0;
      x = 0;
      fadeFigure__image.setAttribute("src", list[i]);
      console.log(i);
      console.log(x);
      typeText(Array.from(description_list[x]));
    }else {
      i++;
      x++;
      fadeFigure__image.setAttribute("src", list[i]);
      typeText(Array.from(description_list[x]));
    }
      fadeFigure.style.filter = "blur(0)";
    },3000);
  }

change_img__backwards.onclick = () =>{
  fadeFigure.style.filter = "blur(5rem)";
  image__discription.innerHTML = "";
  setTimeout(function () {
    if (i == 0) {
      i = list.length - 1;
      x = description_list.length - 1;
      fadeFigure__image.setAttribute("src", list[i]);
      console.log(i);
      console.log(x);
      typeText(Array.from(description_list[x]));
    }else {
      i--;
      x--;
      fadeFigure__image.setAttribute("src", list[i]);
      typeText(Array.from(description_list[x]));
    }
      fadeFigure.style.filter = "blur(0)";
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
