const images = [
      "https://i.pinimg.com/736x/8a/44/39/8a4439689a4b1df26491f7e8b257fbe0.jpg",
      "https://i.pinimg.com/736x/50/6d/b1/506db1b2bb0646a9ba80f52fba6244a1.jpg",
      "https://i.pinimg.com/736x/3f/6f/e8/3f6fe8d259f90fd430b5574a90b815f6.jpg",
    ];

    const cards = document.querySelectorAll(".card");
    const result = document.getElementById("result");
    let flippedCards = [];
    let flippedImages = [];

    cards.forEach(card => {
      card.addEventListener("click", () => {
        if (card.classList.contains("flipped")) return;

        const randomImg = images[Math.floor(Math.random() * images.length)];
        const imgTag = card.querySelector("img");
        imgTag.src = randomImg;

        card.classList.add("flipped");
        flippedCards.push(card);
        flippedImages.push(randomImg);

        if (flippedCards.length === 3) {
          setTimeout(() => checkWin(), 800);
        }
      });
    });

    function checkWin() {
      const allSame = flippedImages.every(img => img === flippedImages[0]);

      if (allSame) {
        result.textContent = "You Win! All Pokémon Match!";
        result.style.color = "green";
      } else {
        result.textContent = "Not Matched! Try Again!";
        result.style.color = "red";

        flippedCards.forEach(card => card.classList.remove("flipped"));
      }

      flippedCards = [];
      flippedImages = [];
    }