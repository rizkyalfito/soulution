const articleItemTemplate = (articlePendek) => `
    <div class="article-card">
        <img src="${articlePendek.picture}" alt="${articlePendek.title}" />
        <div class="article-info">
            <a href="" class="text-decoration-none text-dark"><h3 tabindex="0">${articlePendek.title}</h3></a>
            <p tabindex="0">${articlePendek.teks}</p>
        </div>
    </div>
`;

// eslint-disable-next-line import/prefer-default-export
export { articleItemTemplate };