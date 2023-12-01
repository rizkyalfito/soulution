import UrlParser from '../../routes/url-parser';
import { detailShortSource, detailLongSource } from '../../../data/source-tips';
import { detailTipsShortTemplate, detailTipsLongTemplate } from '../templates/tipsTemplate';

const DetailTips = {
  async render() {
    return `
        <div id="detail-tips"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const tipsId = url.id;
    const tipsPendek = await detailShortSource.getTipById(tipsId);
    const tipsPanjang = await detailLongSource.getTipById(tipsId);
    const detailContainer = document.querySelector('#detail-tips');

    if (tipsPendek) {
      detailContainer.innerHTML = detailTipsShortTemplate(tipsPendek);
    } else if (tipsPanjang) {
      detailContainer.innerHTML = detailTipsLongTemplate(tipsPanjang);
    } else {
      detailContainer.innerHTML = 'Tip not found';
    }
  },
};

export default DetailTips;
