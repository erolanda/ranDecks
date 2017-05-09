function generateDeck(){
  $.get("http://www.clashapi.xyz/api/random-deck", function(data, status){
    $.each(data, function( index, value ) {
      url = "http://www.clashapi.xyz/images/cards/" + value.idName + ".png";
      document.getElementById("i"+index).src = url;
    });
	var totalCost = data.map(function(card){
	  return card.elixirCost;
	}).reduce(getSum);
	var averageCost = Math.round(totalCost / (data.length) * 10) / 10;
  $('#averageCost').html("<span class='average-cost'>Average Elixir Cost: " + averageCost + '</span>');
  });
}

function getSum(total, num) {
  return total + num;
}
