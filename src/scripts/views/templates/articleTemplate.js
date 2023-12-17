const articleItemTemplate = (article) => `
    <div class="tips-card">
        <img class="lazyload" data-src="${article.picture}" alt="${article.title}" />
        <div class="tips-info">
            <a href="/#/detail-article/${article.id}" class="text-decoration-none text-dark"><h3 tabindex="0">${article.title}</h3></a>
            <p tabindex="0">${article.teks}</p>
        </div>
    </div>
`;

const detailArticleTemplate = (article) => `
    <div class="detailTips-container">
        <a href="/#/tips"><svg xmlns="http://www.w3.org/2000/svg" width="58" height="57" viewBox="0 0 58 57" fill="none">
        <path d="M48.3337 26.1249V30.8749H19.3337L32.6254 43.9374L29.1937 47.3099L10.0537 28.4999L29.1937 9.68994L32.6254 13.0624L19.3337 26.1249H48.3337Z" fill="#4299A5"/>
        </svg></a>
        <h2>${article.title}</h2>
        <img class="lazyload" data-src="${article.picture}" alt="">
        <p><span>( ${article.author} )</span> - ${article.source}</p>
        <p class="pt-1">${article.teks}</p>
    </div>
`;

export { articleItemTemplate, detailArticleTemplate };
