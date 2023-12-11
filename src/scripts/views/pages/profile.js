const Profile = {
  async render() {
    return `

        <i id="logo" class="fa fa-user";></i>
        <div id="mycard" class="card">
          <h2 id="username-profile" style="font-weight : bold";>Username</h2>
          <form id="editForm">
            <input type="text" id="newName" name="newName" required>
            <button type="button" onclick="Profile.editName()" style="font-weight : bold";>Save</button>
          </form>
        </div>
        <button class="tombol-logout" type="submit" style="font-weight : bold";> Log Out </button>


      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },

  editName() {
    const newName = document.getElementById("newName").value;
    const profileName = document.getElementById("profileName");
    profileName.textContent = newName;
  },
};

export default Profile;
