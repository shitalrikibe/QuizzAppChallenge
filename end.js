const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores =JSON.parse(localStorage.getItem("highScores")) || [];
const Max_High_Score = 5;
console.log(highScores);

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () =>{
  saveScoreBtn.disabled = !username.value;
});

  saveHighScore = (e) => {
    //console.log("click the save btn");
  e.preventDefault();

  const score = {
    score: Math.floor(Math.random() * 100),

    name: username.value
  };
  highScores.push(score);
  highScores.sort( (a,b) => b.score - a.score);
  highScores.splice(3);

localStorage.setItem("highScores", JSON.stringify(highScores));
window.location.assign("index.html");

  //console.log(highScores);
};
