window.onload = (event) => {
  let i = 0;
  let e = 0;
  let completed = false;
  const txt = "Hi, << Ik heb dringend hulp nodig! Mijn volk word aangevallen door ISIS, en ik zoek mensen die samen met mij mijn volk willen verdedigen tegen ISIS. < De Koerden worden al jaren geteisterd door moord en terreur van ISIS, en ik vecht hier tegen, als scherpschutter. Ik bescherm naast het volk ook mijn stad, Kobani. Dat is een grote stad in Syrië. Het ligt tegen de grens van Turkije. < Ik zoek iemand die elk gedeelte van de stad langs wilt gaan en elke bewapende strijder wilt uitschakelen. Denk jij dat je het in je hebt om mij te helpen in deze strijd? Reageer dan onder deze post en wie weet neem ik je mee op avontuur. << Groet, Haron < مع خالص التقدير ، هارون"
  const comment = 'Hi Haron, \nIk zou graag met jou mee gaan op avontuur. Ik weet zeker dat ik kan helpen in de strijd tegen ISIS. \n Lets go!';
  let speed = 45;
  const likeButton = document.getElementById('js--like');
  const commentButton = document.getElementById('js--comment');
  const textarea = document.getElementById('js--textarea');
  let liked = false;


  likeButton.onclick = () =>{
      if(liked == false){
        liked = true;
        likeButton.classList.add('button--liked');
      }
      else if (liked == true) {
        liked = false;
        likeButton.classList.remove('button--liked');
      }
  };

  commentButton.onclick = () =>{
    if (completed == true) {
      textarea.classList.add('input--show');
      setTimeout(typeTextarea, 1000);
    }
  };


  typeText();

  function redirect(){
    window.location.href = "mainPage.html";
  }

  function typeText(){
    if (i < txt.length) {
      if(txt.charAt(i) == "<"){
        document.getElementById('js--typeThis').innerHTML += '<br>';
      }
      else {
        document.getElementById("js--typeThis").innerHTML += txt.charAt(i);
      }
      i++;
      setTimeout(typeText, speed);
    }
    else{
      commentButton.classList.remove('button--noclick');
      completed = true;
    }
  }

  function typeTextarea(){
    if (e < comment.length) {
      textarea.innerHTML += comment.charAt(e);
      e++;
      setTimeout(typeTextarea, speed);
    }
    else{
      console.log('redirect');
      setTimeout(redirect, 2500);
    }
  }

  document.body.onkeydown = function(e){
    if(e.keyCode == 32){
        speed = 15;
    }
  }

  document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        speed = 45;
    }
  }

};
