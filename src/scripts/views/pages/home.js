import articleSource from "../../../data/source-article";
import { articleItemTemplate } from "../templates/articleCardTemplate";

const Home = {
  async render() {
    return `
    <div class="px-5 pt-4 w-100 Home-hero">
    <img class="w-100 rounded HomeImg-hero" src="./images/heros/homeHero1.png" height="350px" alt="Hero Home" />
    <p class="fw-bolder articleTagLine-hero">
      Take care of Your <br />
      Mental Health
    </p>
  </div>
  <div class = "new-section">
  <div class="d-flex align-items-center px-2 pl-5 new-article">
  <h4 class="fs-4 px-4 pt-5  article-title"><b>New Article</b></h4>
  </div>
  <div class = more-option >
  <a href="./src/scripts/views/pages/detail-article.js" style="text-decoration: none;">More --></a>
  </div>
  </div>
  <div id="ArticleList"></div>
      `;
  },

  async afterRender() {
    const soulutionArticle = await articleSource.article();
    const ArticleContainer = document.querySelector('#ArticleList');
    soulutionArticle.forEach((articlePendek) => {
      ArticleContainer.innerHTML += articleItemTemplate(articlePendek);
    });
},
};

export default Home;
