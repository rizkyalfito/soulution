// Di dalam calculatePSSScore.js
const calculatePSSScore = (answers) => {
    const reversedIndices = [3, 4, 6, 7];
    const reversedAnswers = answers.map((score, index) =>
      reversedIndices.includes(index) ? 4 - score : score
    );
  
    const totalScore = reversedAnswers.reduce((sum, score) => sum + score, 0);
  
    return totalScore;
  };
  
  export default calculatePSSScore;
  