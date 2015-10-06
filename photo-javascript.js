var counter = 0;
$items = $('.slideshow div');
var numItems = 6;

var showImage = function(){
  console.log("show");
    var itemToShow = Math.abs(counter%numItems);
    $items.removeClass('show');
    $items.eq(itemToShow).addClass('show');    
};

$('.next-button').on('click', function(){
    counter++;
    showImage(); 
});

$('.prev-button').on('click', function(){
    counter--;
    showImage(); 
});
