function startblackjack()
    {
        document.getElementById('btnStart').value = 'Restart';
        document.getElementById("status").style.display="none";
        // deal 2 cards to every player object
        currentPlayer = 0;
        createDeck();
        shuffle();
        createPlayers(2);
        createPlayersUI();
        dealHands();
        document.getElementById('player_' + currentPlayer).classList.add('active');
    }