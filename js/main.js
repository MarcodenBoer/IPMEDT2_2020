const change_img = document.getElementById('js--change_img');
const fadeFigure = document.getElementById('js--fadeFigure');
const fadeFigure__image = document.getElementById('js--fadeFigure__image');

const list = ["/img/Felipe.png", "/img/Moby-logo.png"];
i = 0;


change_img.onclick = () =>{
  fadeFigure.style.filter = "blur(5rem)";
  console.log("peepo");
  if (i === 0) {
    setTimeout(function () {
      fadeFigure__image.setAttribute("src", list[i + 1]);
      fadeFigure.style.filter = "blur(0)";
      i = 1;
    },3000);
  }else if (i === 1) {
    setTimeout(function () {
      last = fadeFigure__image.getAttribute("src");
      console.log(last);
      fadeFigure__image.setAttribute("src", list[i - 1]);
      fadeFigure.style.filter = "blur(0)";
      i = 0;
    },3000);
  }
}
