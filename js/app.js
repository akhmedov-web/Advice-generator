const adviceButton = document.querySelector(".card__dice-button");
const quote = document.querySelector(".card__quote-text");
const index = document.querySelector(".card__index");

//Functions
  async function getAdvice() {
    quote.textContent = "Loading...";
    index.textContent = "...";
    try {
      const adviceResponse = await fetch("https://api.adviceslip.com/advice");
      const advice = await adviceResponse.json();
      displayAdvice(advice);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function displayAdvice(advice) {
    quote.textContent = `"${advice.slip.advice}"`;
    index.textContent = `#${advice.slip.id}`;
  }

  //Event listeners
  if(adviceButton) {
    adviceButton.addEventListener("click", getAdvice);
  }
  document.addEventListener("keyup", (e)=>{ if (e.code == "Space"){getAdvice()} });

document.addEventListener("DOMContentLoaded", getAdvice);
