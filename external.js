
// Rocks(0), Papers(1) or Scissors(2)


//1.Create a function called getComputerChoice which returns random rocks(0), papers(1) or scissors(2).
function getComputerChoice()
{
    let choice = Math.floor(Math.random()*3);
    return choice;

}

/*2.Create a function that takes parameters player selection and computer selection and 
returns a string that declares the winner and the function is not case sensitive and return the result of this function*/
function getPlayerChoice()
{
    
    let choice = prompt("Enter Your Choice ( R/P/S )");
    
    switch(choice)
    {
        case 'R':
            choice = 0;
            break;

        case 'P':
            choice = 1;
            break;
        
        case 'S':
            choice = 2;
            break; 

        case 'rock':
            choice = 0;
            break;
    
        case 'paper':
            choice = 1;
            break;
            
        case 'scissor':
            choice = 2;
            break;       
             
      default : choice = Math.floor(Math.random()*3);

    }

    return choice;
}

//3.Create function assign value for random values
function choicename(choice)
{

    if(choice == 0)
    {
        return choice = "Rock";
    }
    if(choice == 1)
    {
        return choice = "Paper";
    }
    if(choice == 2)
    {
        return choice = "Scissors";
    }

}


//4.Create function that play the game for a round.
function playround( result,cchoice,pchoice,playerchoicename,computerchoicename)
{

    if (pchoice == cchoice)
    {
        alert("Draw");
        return result;
    }    
   else if( cchoice == 0 && pchoice == 2 )
    {
        alert(`You lose!  ${computerchoicename} beats ${playerchoicename}`);
        return result;
    }
    else if(pchoice == 0 && cchoice == 2 )
    {
        alert(`You Won!  ${playerchoicename} beats ${computerchoicename} `);
        result++;
        return result;
    }
    else if( cchoice > pchoice  )
    {  
     alert(`You lose! ${computerchoicename} beats ${playerchoicename} `);
     return result;
    }
   else
   {
    alert(`You won! ${playerchoicename} beats ${computerchoicename} `);
    result++;
    return result;
   }

}

//5.Create a function called game and call  previous function 5 times and reports winner or loser and keep score.
function game()
{
let i, cchoice, computerchoicename, pchoice, playerchoicename, result=0;
for (i = 0; i<=4; i++)
{ 
    cchoice = getComputerChoice();
    computerchoicename = choicename(cchoice);
    console.log(computerchoicename);

    pchoice = getPlayerChoice();
    playerchoicename = choicename(pchoice);
    console.log(playerchoicename);
   
    result = playround(result,cchoice,pchoice,playerchoicename,computerchoicename);
}
console.log(result);
alert(`Score : ${result}/5`)
}

game();
