console.log('\'Allo \'Allo!');

function dropDown(){

  var menuButton = document.querySelector('.menu-button');
  var menu = document.querySelector('.header-menu');

  menuButton.addEventListener('click', function(){
    console.log('click');
    menu.classList.toggle('open');

  })

}

dropDown();
