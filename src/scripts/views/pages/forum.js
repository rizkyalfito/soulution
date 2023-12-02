import forumTemplate from '../templates/forumTemplate';

const Forum = {
  async render() {
    return `
    <div id="forum"></div>
      `;
  },

  async afterRender() {
    const forumContainer = document.querySelector('#forum');
    forumContainer.innerHTML = forumTemplate();
  },
};

export default Forum;
