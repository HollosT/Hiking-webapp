document.getElementById('card1').addEventListener('click', function () {
  document.getElementById('article').classList.toggle('hide')
});

document.getElementById('card2').addEventListener('click', function () {
  document.getElementById('article2').classList.toggle('hide')
});

document.getElementById('card3').addEventListener('click', function () {
  document.getElementById('article3').classList.toggle('hide')
});

document.getElementById('card4').addEventListener('click', function () {
  document.getElementById('article4').classList.toggle('hide')
});

document.getElementById('card5').addEventListener('click', function () {
  document.getElementById('article5').classList.toggle('hide')
});


document.getElementById('card6').addEventListener('click', function () {
  document.getElementById('article6').classList.toggle('hide')
});

//* More pictures are added to the card
// document.getElementById('bjergMoreBtn').addEventListener('click', function () {
//   document.getElementById('bjergMoreGallery').classList.toggle('hide')
// })

document.getElementById('egholmMoreBtn').addEventListener('click', function () {
  document.getElementById('egholmMoreGallery').classList.toggle('hide')
})

document.getElementById('nordMoreBtn').addEventListener('click', function () {
  document.getElementById('nordMoreGallery').classList.toggle('hide')
})

document.getElementById('sydMoreBtn').addEventListener('click', function () {
  document.getElementById('sydMoreGallery').classList.toggle('hide')
})

document.getElementById('mulbjergeMoreBtn').addEventListener('click', function () {
  document.getElementById('mulbjergeMoreGallery').classList.toggle('hide')
})

document.getElementById('poulstrupMoreBtn').addEventListener('click', function () {
  document.getElementById('poulstrupMoreGallery').classList.toggle('hide')
})



//* Filter
//* Less than 6km
document.getElementById('btn5').addEventListener('click', function () {
  let changedContent = 'Show all';
  document.getElementById('card1').classList.toggle('hide')
  document.getElementById('card2').classList.toggle('hide')
  document.getElementById('card5').classList.toggle('hide')
  document.getElementById('card6').classList.toggle('hide')
  document.getElementById('OSyd').classList.toggle('fa-location-dot')
  document.getElementById('Bjerg').classList.toggle('fa-location-dot')


  //* We wanted to change the text of the btn when it is clicked, we did not succeed
  //if(document. getElementById('btn5'). clicked == true) {
  //console.log('Hello')
  //*document.getElementById('btn5').textContent = 'Show all';
  //}else {
  //changedContent = "Less then 5km"
  //document.getElementById('btn5').textContent = changedContent;
  //}
})


//* CLose to the Centre
document.getElementById('btnCentre').addEventListener('click', function () {
  document.getElementById('card1').classList.toggle('hide')
  document.getElementById('card4').classList.toggle('hide')
  document.getElementById('Mulb').classList.toggle('fa-location-dot')
  document.getElementById('Bjerg').classList.toggle('fa-location-dot')
  document.getElementById('Pols').classList.toggle('fa-location-dot')
  document.getElementById('Egholm').classList.toggle('fa-location-dot')
})

//*Bike routes
document.getElementById('btnBike').addEventListener('click', function () {
  document.getElementById('card2').classList.toggle('hide')
  document.getElementById('card3').classList.toggle('hide')
  document.getElementById('card5').classList.toggle('hide')
  document.getElementById('card6').classList.toggle('hide')
  document.getElementById('ONord').classList.toggle('fa-location-dot')
  document.getElementById('Egholm').classList.toggle('fa-location-dot')
  document.getElementById('Pols').classList.toggle('fa-location-dot')
  document.getElementById('Mulb').classList.toggle('fa-location-dot')

})



//* Function 
function togglePopupOne() {
  document.getElementById('popup-1').classList.toggle("active")
}

function togglePopupTwo() {
  document.getElementById('popup-2').classList.toggle("active")
}

function togglePopupThree() {
  document.getElementById('popup-3').classList.toggle("active")
}

function togglePopupFour() {
  document.getElementById('popup-4').classList.toggle("active")
}

function togglePopupFive() {
  document.getElementById('popup-5').classList.toggle("active")
}

function togglePopupSix() {
  document.getElementById('popup-6').classList.toggle("active")
}

function togglePopupSeven() {
  document.getElementById('popup-7').classList.toggle("active")
}

function togglePopupEight() {
  document.getElementById('popup-8').classList.toggle("active")
}

function togglePopupNine() {
  document.getElementById('popup-9').classList.toggle("active")
}

function togglePopupTen() {
  document.getElementById('popup-10').classList.toggle("active")
}

function togglePopupEleven() {
  document.getElementById('popup-11').classList.toggle("active")
}

function togglePopupTwelve() {
  document.getElementById('popup-12').classList.toggle("active")
}

function togglePopupThirteen() {
  document.getElementById('popup-13').classList.toggle("active")
}

function togglePopupFourteen() {
  document.getElementById('popup-14').classList.toggle("active")
}

function togglePopupFifteen() {
  document.getElementById('popup-15').classList.toggle("active")
}


function togglePopupSixteen() {
  document.getElementById('popup-16').classList.toggle("active")
}

function togglePopupSeventeen() {
  document.getElementById('popup-17').classList.toggle("active")
}

function togglePopupEighteen() {
  document.getElementById('popup-18').classList.toggle("active")
}