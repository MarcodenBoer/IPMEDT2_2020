window.onload = (event) => {
let i = 0;
let txt = 'Lorem ipsum dummy text blabla. Lorem ipsum dummy text blabla.Lorem ipsum dummy text blabla.Lorem ipsum dummy text blabla.Lorem ipsum dummy text blabla.';
const speed = 35;

typeText();

function typeText() {
  if (i < txt.length) {
    document.getElementById("js--typeThis").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeText, speed);
  }
  else{
    setTimeout(document.getElementById("js--cardButton").style.display= 'block', 200);
  }
}
};
