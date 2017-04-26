$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault()
    var name =$("#name").val();
    var food = $("#food").val();
    var music= $("input:radio[name=music]:checked").val();
    var date= $("#date").val();
    var favoriteColor = $("#color").val();

    $("#display").text("Your name is " + name + " favorite food is " + food + ", favorite music is " + music + " todays date is " + date + " favorite color hex is " + favoriteColor);


  });
});
