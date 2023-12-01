import articleSource from '../../../data/source-article';
import { articleItemTemplate } from '../templates/articleCardTemplate';

const Home = {
  async render() {
    return `
    <h2>forum</h2>
      `;
  },

  async afterRender() {
    const soulutionShortTips = await articleSource.article();
    const ArticleContainer = document.querySelector('#ArticleList');
    soulutionShortTips.forEach((articlePendek) => {
      ArticleContainer.innerHTML += articleItemTemplate(articlePendek);
    });
  },
};

export default Home;
