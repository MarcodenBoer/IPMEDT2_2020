window.onload = (event) => {
  let i = 0;
  let e = 0;
  let completed = false;
  const txt = 'Lorem ipsum dummy text blabla. Lorem ipsum dummy text blabla.Lorem ipsum dummy text blabla.Lorem ipsum dummy text blabla.Lorem ipsum dummy text blabla.';
  const comment = 'test hallo ik werk';
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
      document.getElementById("js--typeThis").innerHTML += txt.charAt(i);
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
