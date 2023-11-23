const tipsItemTemplate = (tipsPendek) => `
    <div class="tips-card">
        <img src="${tipsPendek.picture}" alt="${tipsPendek.title}" />
        <div class="tips-info">
            <a href="" class="text-decoration-none text-dark"><h3 tabindex="0">${tipsPendek.title}</h3></a>
            <p tabindex="0">${tipsPendek.teks}</p>
        </div>
    </div>
`;

// eslint-disable-next-line import/prefer-default-export
export { tipsItemTemplate };
