const tipsShortTemplate = (tipsPendek) => `
    <div class="tips-card">
        <img class="lazyload" data-src="${tipsPendek.picture}" alt="${tipsPendek.title}" />
        <div class="tips-info">
            <a href="/#/detail-tips/${tipsPendek.id}" class="text-decoration-none text-dark"><h3 tabindex="0" class="fw-bold">${tipsPendek.title}</h3></a>
            <p tabindex="0" class="fw-3">${tipsPendek.teks}</p>
        </div>
    </div>
`;

const tipsLongTemplate = (tipsPanjang) => `
    <div class="tips-card">
        <img class="lazyload" data-src="${tipsPanjang.picture}" alt="${tipsPanjang.title}" />
        <div class="tips-info">
            <a href="/#/detail-tips/${tipsPanjang.id}" class="text-decoration-none text-dark"><h3 tabindex="0" class="fw-bold">${tipsPanjang.title}</h3></a>
            <p tabindex="0" class="fw-3">${tipsPanjang.teks}</p>
        </div>
    </div>
`;

const detailTipsShortTemplate = (tipsPendek) => `
    <div class="detailTips-container">
        <a href="/#/tips"><svg xmlns="http://www.w3.org/2000/svg" width="58" height="57" viewBox="0 0 58 57" fill="none">
        <path d="M48.3337 26.1249V30.8749H19.3337L32.6254 43.9374L29.1937 47.3099L10.0537 28.4999L29.1937 9.68994L32.6254 13.0624L19.3337 26.1249H48.3337Z" fill="#4299A5"/>
        </svg></a>
        <h2>${tipsPendek.title}</h2>
        <img class="lazyload" data-src="${tipsPendek.picture}" alt="">
        <p tabindex="0">${tipsPendek.teks}</p>
    </div>
`;

const detailTipsLongTemplate = (tipsPanjang) => `
    <div class="detailTips-container">
        <a href="/#/tips"><svg xmlns="http://www.w3.org/2000/svg" width="58" height="57" viewBox="0 0 58 57" fill="none">
        <path d="M48.3337 26.1249V30.8749H19.3337L32.6254 43.9374L29.1937 47.3099L10.0537 28.4999L29.1937 9.68994L32.6254 13.0624L19.3337 26.1249H48.3337Z" fill="#4299A5"/>
        </svg></a>
        <h2>${tipsPanjang.title}</h2>
        <img class="lazyload" data-src="${tipsPanjang.picture}" alt="">
        <p tabindex="0">${tipsPanjang.teks}</p>
    </div>
`;

export { tipsShortTemplate, tipsLongTemplate, detailTipsShortTemplate, detailTipsLongTemplate };
