const teamTemplate = (team) => `
<div class="team-item" tabindex="0">
    <div class="team-item__header">
      <img class="team-item__header__poster lazyload" alt="${team.nama}"
      data-src="${team.avatar}" alt="${team.nama}" />
    </div>
    <div class="team-item__content" >
      <h3 tabindex="0">${team.nama}</h3>
      <h6 tabindex="0" class="username">
        <a href=${team.urlprofile} target="_blank">${team.username}</a></h6>
      <p tabindex="0">${team.instansi}</p>
    </div>
  </div>

`;
export default teamTemplate;
