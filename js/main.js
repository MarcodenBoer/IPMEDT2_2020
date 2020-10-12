const change_img = document.getElementById('js--change_img');
const fadeFigure = document.getElementById('js--fadeFigure');
const fadeFigure__image = document.getElementById('js--fadeFigure__image');


change_img.onclick = () =>{
  fadeFigure.style.filter = "blur(5px)";
  console.log("peepo");
  setTimeout(function () {
    fadeFigure__image.setAttribute("src", "/img/Moby-logo.png");
    fadeFigure.style.filter = "blur(0)";
  },1000)
}
