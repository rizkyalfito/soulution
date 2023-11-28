class articleSource {
    // eslint-disable-next-line consistent-return
    static async article() {
      try {
        const response = await fetch('./data/article-data.json');
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseJson = await response.json();
        return responseJson.artikelData;
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    }
  }
  
  export default articleSource;
  