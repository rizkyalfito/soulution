import UrlParser from '../../routes/url-parser';
import { detailArticleSource } from '../../../data/source-article';
import { detailArticleTemplate } from '../templates/articleTemplate';

const DetailArticle = {
  async render() {
    return `
        <div id="detail-article"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const articleId = url.id;
    const article = await detailArticleSource.getArticleById(articleId);
    const detailContainer = document.getElementById('detail-article');

    detailContainer.innerHTML = detailArticleTemplate(article);
  },
};

export default DetailArticle;
