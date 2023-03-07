/*
useEffect(() => {
  if (turn === "dealer") {
    const dealerHandValue = calculateHandValue(game.dealerHand);
    const playerHandValue = calculateHandValue(game.playerHand);

    if (dealerHandValue >= 17) {
      setGameOver(true);
      if (dealerHandValue > 21 || dealerHandValue < playerHandValue) {
        setWinner("player");
      } else {
        setWinner("dealer");
      }
    } else {
      (async () => {
        try {
          await dispatch(fetchCard(PlayerType.Dealer, deckId));
        } catch (error) {
          console.error("Error:", error);
        }
      })();
    }
  }
}, [turn, game.dealerHand]);

useEffect(() => {
  const playerHandValue = calculateHandValue(game.playerHand);
  if (playerHandValue === 21 || playerHandValue > 21) {
    setGameOver(true);
    setWinner("dealer");
  }
}, [game.playerHand]);

useEffect(() => {
  const dealerHandValue = calculateHandValue(game.dealerHand);
  if (dealerHandValue > 21 || dealerHandValue < calculateHandValue(game.playerHand)) {
    setGameOver(true);
    setWinner("player");
  }
}, [game.dealerHand]);
*/
