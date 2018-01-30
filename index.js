$(document).ready(function() {
  quoteGet();

  $("#get-quote").on("click", function() {
    quoteGet();
  });
  
});

function getQuote() {
  changeColor();
  $("#get-quote").html("<i class=\"fa fa-spinner fa-pulse fa-fw\"></i>");
  return axios.get("http://quotes.stormconsultancy.co.uk/random.json");
}

function changeColor() {
  let colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
  let color = Math.floor(Math.random() * colors.length)
  $("html body").animate({
    backgroundColor: colors[color],
    color: colors[color],
  }, 1000);
  $(".color-change").animate({
    backgroundColor: colors[color],  
  }, 1000);
  $(".blockquote-footer").animate({
    color: colors[color],
  }, 1000);
}

function updateTwitter(quote, author) {
  let quoteText = `"${quote}" ${author} #quotes`;
  quoteText = encodeURIComponent(quoteText);
  $(".twitter-share-button").attr("href", `https://twitter.com/intent/tweet?text=${quoteText}`);
  
}

function quoteGet() {
  getQuote()
  .then(({data}) => {
    $("#get-quote").html("New Quote");
    updateTwitter(data.quote, data.author)
    $("#author").text(data.author);
    $("#quote-text").text(data.quote);
  });
}