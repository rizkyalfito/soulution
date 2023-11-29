class tipsSource {
  // eslint-disable-next-line consistent-return
  static async ShortTips() {
    try {
      const response = await fetch('./data/shortTips-data.json');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseJson = await response.json();
      return responseJson.tipsJangkaPendek;
    } catch (error) {
      console.error('Error while fetching data:', error);
    }
  }

  // eslint-disable-next-line consistent-return
  static async LongTips() {
    try {
      const response = await fetch('./data/longTips-data.json');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseJson = await response.json();
      return responseJson.tipsJangkaPanjang;
    } catch (error) {
      console.error('Error while fetching data:', error);
    }
  }
}

export default tipsSource;
