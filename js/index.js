$('.owl-one').owlCarousel({
loop:false,
margin:10,
nav:true,
navText:["<i class='icofont-arrow-left'></i>","<i class='icofont-arrow-right'></i>"],
rewind:true,
responsive:{
0:{
  items:1
},
600:{
  items:1
},
1000:{
  items:4
}
}
})



$('.owl-two').owlCarousel({
loop:true,
autoPlay:true,
margin:10,
nav:false,
dots:true,
merge:true,
video:true,
navText:["<i class='icofont-arrow-left'></i>","<i class='icofont-arrow-right'></i>"],
rewind:true,
responsive:{
0:{
items:1
},
600:{
items:1
},
1000:{
items:1
}
}
})