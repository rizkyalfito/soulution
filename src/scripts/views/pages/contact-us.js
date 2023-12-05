import TeamSource from "../../../data/source-team";
import teamTemplate from "../templates/teamTemplate";

const ContactUs = {
  async render() {
    return `
    <div class="contact-container">

      <div class="px-5 pt-4 w-100 contact-hero">
        <img class="w-100 rounded contact-hero-img" src="./images/heros/contact-hero.jpeg" height="350px" alt="Hero Home" />
      </div>
      
      <h2 class="py-2 rounded-1 text-light text-center">Our Team</h2>

      <div class="content">
        <div id="team" class="team">
        </div>
      </div>
          `;
  },

  async afterRender() {
    const teams = await TeamSource.listTeam();
    const teamContainer = document.querySelector('#team');
    teams.forEach((team)=>{
      teamContainer.innerHTML += teamTemplate(team);
    })
  },
};

export default ContactUs;
