import tipsSource from '../../../data/source-tips';
import { tipsItemTemplate } from '../templates/tipsCardTemplate';

const Tips = {
  async render() {
    return `
        <div class="px-5 pt-4 w-100 tips-hero">
          <img class="w-100 rounded tipsImg-hero" src="./images/heros/tipsHero.png" height="350px" alt="Hero tips" />
          <p class="fw-bolder tipsTagLine-hero">
            Take care of Your <br />
            Mental Health
          </p>
        </div>

        <h2 class="fs-3 px-5 pt-5">Tips Menghilangkan Stres Untuk <br> Jangka Waktu Yang Singkat</h2>

        <div id="shortTipsList"></div>
        `;
  },

  async afterRender() {
    const soulutionShortTips = await tipsSource.ShortTips();
    const TipsContainer = document.querySelector('#shortTipsList');
    soulutionShortTips.forEach((tipsPendek) => {
      TipsContainer.innerHTML += tipsItemTemplate(tipsPendek);
    });
  },
};

export default Tips;
