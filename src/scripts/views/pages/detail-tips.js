import UrlParser from '../../routes/url-parser';
import tipsSource from '../../../data/source-tips';

const DetailTips = {
  async render() {
    return `
        <h2>DetailTips Page</h2>
        <div id="detail-tips"></div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default DetailTips;
