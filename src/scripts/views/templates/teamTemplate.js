const teamTemplate = (team) =>`
<div class="team-item" tabindex="0">
    <div class="team-item__header">
      <img class="team-item__header__poster" alt="${team.nama}"
      src="${team.avatar}" alt="${team.nama}" />
    </div>
    <div class="team-item__content" >
      <h3 tabindex="0">${team.nama}</h3>
      <h6 tabindex="0" class="username">${team.username}</h6>
      <p tabindex="0">${team.instansi}</p>
    </div>
  </div>

`
export default teamTemplate;