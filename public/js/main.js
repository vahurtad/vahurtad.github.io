/*
*=================================
* Hugo UILite Portfolio v0.8
*=================================
*
* Free version https://uicard.io/products/hugo-uilite
* Pro version https://uicard.io/products/hugo-uilite-pro
* Demo https://demo.uicard.io/hugo-uilite-portfolio-demo/
*
* Coded By UICardio
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*
*/

let sections = ["yellow", "pink", "violet", "blue", "orange", "green", "aqua"];
let menuBtn = $("#menuBar");

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

$(document).ready(function(){
  var arr = [];

  for(var i = 0; i < 3; i++) {
      var numberIsInArray = false;
      var rand = randomNumber(0, 7);
      
      for(var j = 0; j < arr.length; j++){
          if(sections[rand] === arr[j]) {
              numberIsInArray = true;
              i--;
          }
      }
      if(!numberIsInArray){
        arr.push(sections[rand]);
      }
  }

  $(".random0").addClass(arr[0]);
  $(".random1").addClass(arr[1]);
  $(".random2").addClass(arr[2]);
});


menuBtn.click(function(){

  $('.hamburger-menu').toggleClass('animate');

  if($(".secondaryMenu").hasClass("active")){
    
    $(".secondaryMenu").removeClass("active");
    setTimeout(function(){
      $(".primaryMenu").addClass("active");
    },400);

    
  } else {
    $(".primaryMenu").removeClass("active");
  
    setTimeout(function(){
      $(".secondaryMenu").addClass("active");
    },350);
  }
});

$(document).ready(function(){
  var elements = $(".sidebar > .main-info *");
  var e = $(".sidebartext >");
  for(let i = 0; i < elements.length; i++){
    setTimeout(function(){
      $(elements[i].tagName).addClass("bs");
    }, (400 * i) - 90 * i );
  }

  var e = $(".sidebartext >");
  for(let i = 0; i < e.length; i++){
    setTimeout(function(){
      $(e[i].tagName).addClass("miz");
    }, (320 * i) - 90 * i );
  }
  
  setTimeout(function(){
    $(".main-content").addClass("active");
  }, 1900);

  

});