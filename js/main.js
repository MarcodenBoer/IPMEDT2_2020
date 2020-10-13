const change_img__forwards = document.getElementById('js--change_img--forwards');
const change_img__backwards = document.getElementById('js--change_img--backwards');
const fadeFigure = document.getElementById('js--fadeFigure');
const fadeFigure__image = document.getElementById('js--fadeFigure__image');

const list = ["/img/Felipe.png", "/img/Moby-logo.png"];
i = 0;


change_img__forwards.onclick = () =>{
  fadeFigure.style.filter = "blur(5rem)";
  console.log("peepo");
  setTimeout(function () {
      fadeFigure__image.setAttribute("src", list[i + 1]);
      fadeFigure.style.filter = "blur(0)";
      i++;
    },3000);
  }

change_img__backwards.onclick = () =>{
  fadeFigure.style.filter = "blur(5rem)";
  setTimeout(function () {
      fadeFigure__image.setAttribute("src", list[i - 1]);
      fadeFigure.style.filter = "blur(0)";
      i--;
    },3000);
  }
