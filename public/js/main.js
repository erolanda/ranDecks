function generateDeck(){
  $.get("http://www.clashapi.xyz/api/random-deck", function(data, status){
    $.each(data, function( index, value ) {
      url = "http://www.clashapi.xyz/images/cards/" + value.idName + ".png";
      document.getElementById("i"+index).src = url;
    });
  });
}
