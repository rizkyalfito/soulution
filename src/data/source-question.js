class questionsource {
    static async Question() {
      try {
        const response = await fetch('./data/question.json');
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseJson = await response.json();
        return responseJson.QuestionText;
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    }
  }
  
  export default questionsource;

  