const tipsShortTemplate = (tipsPendek) => `
    <div class="tips-card">
        <img src="${tipsPendek.picture}" alt="${tipsPendek.title}" />
        <div class="tips-info">
            <a href="" class="text-decoration-none text-dark"><h3 tabindex="0" class="fw-bold">${tipsPendek.title}</h3></a>
            <p tabindex="0" class="fw-3">${tipsPendek.teks}</p>
        </div>
    </div>
`;

const tipsLongTemplate = (tipsPanjang) => `
    <div class="tips-card">
        <img src="${tipsPanjang.picture}" alt="${tipsPanjang.title}" />
        <div class="tips-info">
            <a href="" class="text-decoration-none text-dark"><h3 tabindex="0" class="fw-bold">${tipsPanjang.title}</h3></a>
            <p tabindex="0" class="fw-3">${tipsPanjang.teks}</p>
        </div>
    </div>
`;

// eslint-disable-next-line import/prefer-default-export
export { tipsShortTemplate, tipsLongTemplate };
