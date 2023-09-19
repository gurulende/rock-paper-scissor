
    const score= {
      wins: 0,
      losses: 0,
      ties: 0
    };


    updateScore();

    let isAutoPlaying = false;
    let intervalId;

    function autoPlay(){

      if(!isAutoPlaying){
      intervalId = setInterval(() =>{
        const playerMove = pickComputerMove();
        playerGame(playerMove);},1000);
        isAutoPlaying = true;
      }
      else{
        clearInterval(intervalId);
        isAutoPlaying = false;
      }
    }

    document.querySelector('.js-rock-button').addEventListener('click', () =>{
      playerGame('rock');
    });

    document.querySelector('.js-paper-button').addEventListener('click', () =>{
      playerGame('paper');
    })

    
    document.querySelector('.js-scissors-button').addEventListener('click', () =>{
      playerGame('scissors');
    })


    document.body.addEventListener('keydown', (Event) =>{
      if(Event.key === 'r'){
        playerGame('rock');
      } else if(Event.key === 'p'){
        playerGame('paper');
      } else if(Event.key === 's'){
        playerGame('scissors');
      }
    });

    function playerGame(playerMove){

    const compueterMove = pickComputerMove();

    let Result = ' ';

    if(playerMove === 'scissors'){
      
        if(compueterMove === 'rock'){
          Result = 'You lose.';
        }
        else if(compueterMove === 'paper'){
          Result = 'You win.';
        }
        else if(compueterMove === 'scissors'){
          Result = 'Tie.';
        }

    }else if(playerMove === 'paper'){

        if(compueterMove === 'rock'){
          Result = 'You win.';
        }
        else if(compueterMove === 'paper'){
          Result = 'Tie.';
        }
        else if(compueterMove === 'scissors'){
          Result = 'You lose.';
        }

    }else if(playerMove === 'rock'){

        if(compueterMove === 'rock'){
          Result = 'Tie.';
        }
        else if(compueterMove === 'paper'){
          Result = 'You lose.';
        }
        else if(compueterMove === 'scissors'){
          Result = 'You win.';
        }

    }

        if(Result === 'You win.'){
          score.wins += 1;
        }
        else if(Result === 'You lose.'){
          score.losses += 1;
        }
        else if(Result === 'Tie.'){
          score.ties  += 1;
        }

      updateScore();

      document.querySelector('.js-result').innerHTML = Result;

      document.querySelector('.js-move').innerHTML = ` you 
          <img src="images/${playerMove}-emoji.png" class="move-icon">
          <img src="images/${compueterMove}-emoji.png" class="move-icon">
          computer`;



    }

    function updateScore(){
    document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses
    }, Ties: ${score.ties}`;
    }


    function pickComputerMove(){
    const randomNumber = Math.random();

      if(randomNumber >=0 && randomNumber <1/3)
      {
        compueterMove = 'rock';
      }
      else if(randomNumber >=1/3 && randomNumber <2/3)
      {
        compueterMove = 'paper';
      }
      else if(randomNumber>=2/3 && randomNumber < 1)
      {
        compueterMove = 'scissors';
      }

      return compueterMove;
    } 
