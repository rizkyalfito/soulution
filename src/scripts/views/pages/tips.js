import { tipsSource } from '../../../data/source-tips';
import { tipsShortTemplate, tipsLongTemplate } from '../templates/tipsTemplate';
import { articleItemTemplate } from '../templates/articleCardTemplate';
import articleSource from '../../../data/source-article';


const Tips = {
  async render() {
    return `
        <div class="px-5 pt-4 w-100 tips-hero">
          <p class="fw-bolder text-dark-emphasis tipsTagLine-hero">
            Take care of Your <br />
            Mental Health
          </p>
        </div>

        <h2 class="fs-3 px-5 pt-3 fw-bold">Tips Menghilangkan Stres Untuk <br> Jangka Waktu Yang Singkat</h2>

        <div id="shortTipsList"></div>
        <div class="d-flex align-items-center justify-content-end w-100 px-5 load-more">
          <button id="loadShortTips" type="submit">Load More</button>
        </div>

        <h2 class="fs-3 px-5 pt-5 fw-bold">Tips Menghilangkan Stres Untuk <br> Jangka Waktu Yang Panjang</h2>

        <div id="longTipsList"></div>
        <div class="d-flex align-items-center justify-content-end w-100 px-5 load-more">
          <button id="loadLongTips" type="submit">Load More</button>
        </div>

        <h2 class="fs-3 px-5 pt-5 fw-bold">Temukan Artikel Yang Berkaitan Dengan Kesehatan Mental Anda</h2>

        <div id="ArticleList"></div>
        <div class="d-flex align-items-center justify-content-end w-100 px-5 load-more">
          <button id="loadArticle" type="submit">Load More</button>
        </div>

        `;
  },

  async afterRender() {
    const shortTipsContainer = document.querySelector('#shortTipsList');
    const longTipsContainer = document.querySelector('#longTipsList');
    const articleContainer = document.querySelector('#ArticleList');
    const loadTipsShortBtn = document.querySelector('#loadShortTips');
    const loadTipsLongBtn = document.querySelector('#loadLongTips');
    const loadArticleBtn = document.querySelector('#loadArticle')

    const loadMoreShortTips = async () => {
      const tips = await tipsSource.ShortTips();
      const start = shortTipsContainer.children.length;
      const end = start + 2;

      tips.slice(start, end).forEach((tipsPendek) => {
        shortTipsContainer.innerHTML += tipsShortTemplate(tipsPendek);
      });

      if (end >= tips.length) {
        loadTipsShortBtn.style.display = 'none';
      }
    };

    const loadMoreLongTips = async () => {
      const tips = await tipsSource.LongTips();
      const start = longTipsContainer.children.length;
      const end = start + 2;

      tips.slice(start, end).forEach((tipsPanjang) => {
        longTipsContainer.innerHTML += tipsLongTemplate(tipsPanjang);
      });

      if (end >= tips.length) {
        loadTipsLongBtn.style.display = 'none';
      }
    };

    const loadMoreArticle = async () =>{
      const articles = await articleSource.article();
      const start = articleContainer.children.length;
      const end = start + 2;

      articles.slice(start, end).forEach((article) => {
        articleContainer.innerHTML += articleItemTemplate(article);
      });
      
      if(end >= articles.length) {
        loadArticleBtn.style.display = 'none';
      }
    };
    await loadMoreShortTips();
    await loadMoreLongTips();
    await loadMoreArticle();
    loadTipsShortBtn.addEventListener('click', () => loadMoreShortTips());
    loadTipsLongBtn.addEventListener('click', () => loadMoreLongTips());
    loadArticleBtn.addEventListener('click', () => loadMoreArticle())
  },
};

export default Tips;
