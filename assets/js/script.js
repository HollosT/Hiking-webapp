document.getElementById('card1').addEventListener('click', function (){
document.getElementById('article').classList.toggle('hide')
});

document.getElementById('card2').addEventListener('click', function (){
  document.getElementById('article2').classList.toggle('hide')
  });

document.getElementById('card3').addEventListener('click', function (){
  document.getElementById('article3').classList.toggle('hide')
  });

  document.getElementById('card4').addEventListener('click', function (){
    document.getElementById('article4').classList.toggle('hide')
    });
  
    document.getElementById('card5').addEventListener('click', function (){
      document.getElementById('article5').classList.toggle('hide')
      });

    
      document.getElementById('card6').addEventListener('click', function (){
        document.getElementById('article6').classList.toggle('hide')
        });
      
//* Filter

filter('all');

function filter(c) {
  let x, i,
  x = document.getElementsByClassName('cardFilterItem');
  if (c == 'all') c = ''; 
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], 'show');
    if (x[i].className.indexOf(c) > -1) addClass(x[i], 'show');
  }
}

function addClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.className.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.className.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}



//* Function 
function togglePopupOne(){
  document.getElementById('popup-1').classList.toggle("active")
}

function togglePopupTwo(){
  document.getElementById('popup-2').classList.toggle("active")
}

function togglePopupThree(){
  document.getElementById('popup-3').classList.toggle("active")
}

function togglePopupFour(){
  document.getElementById('popup-4').classList.toggle("active")
}

function togglePopupFive(){
  document.getElementById('popup-5').classList.toggle("active")
}

function togglePopupSix(){
  document.getElementById('popup-6').classList.toggle("active")
}

function togglePopupSeven(){
  document.getElementById('popup-7').classList.toggle("active")
}

function togglePopupEight(){
  document.getElementById('popup-8').classList.toggle("active")
}

function togglePopupNine(){
  document.getElementById('popup-9').classList.toggle("active")
}

function togglePopupTen(){
  document.getElementById('popup-10').classList.toggle("active")
}

function togglePopupEleven(){
  document.getElementById('popup-11').classList.toggle("active")
}

function togglePopupTwelve(){
  document.getElementById('popup-12').classList.toggle("active")
}

function togglePopupThirteen(){
  document.getElementById('popup-13').classList.toggle("active")
}

function togglePopupFourteen(){
  document.getElementById('popup-14').classList.toggle("active")
}

function togglePopupFifteen(){
  document.getElementById('popup-15').classList.toggle("active")
}


function togglePopupSixteen(){
  document.getElementById('popup-16').classList.toggle("active")
}

function togglePopupSeventeen(){
  document.getElementById('popup-17').classList.toggle("active")
}

function togglePopupEighteen(){
  document.getElementById('popup-18').classList.toggle("active")
}