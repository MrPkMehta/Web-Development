const quotes = [
    {
      text: "Life is 10% what happens to us and 90% how we react to it.",
      author: "Charles R. Swindoll"
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston S. Churchill"
    }
  ];
  
  const quoteText = document.querySelector("#text");
  const quoteAuthor = document.querySelector("#author");
  const newQuoteButton = document.querySelector("#new-quote");
  
  function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex].text;
    quoteAuthor.textContent = quotes[randomIndex].author;
  }
  
  newQuoteButton.addEventListener("click", displayQuote);
  
  displayQuote();
  