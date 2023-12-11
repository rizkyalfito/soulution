/* eslint-disable no-alert */
import axios from "axios";

const Profile = {
  async render() {
    const user = await this.getUserProfile();
    return `

        <i id="logo" class="fa fa-user";></i>
        <div id="mycard" class="card">
          <h2 id="username-profile" style="font-weight : bold";>Username</h2>
          <p id="email-profile">${user.email}</p>
          <form id="editForm">
            <input type="text" id="newName" name="newName" required>
            <button type="button" onclick="Profile.editName()" style="font-weight : bold";>Save</button>
          </form>
        </div>
        <button class="tombol-logout" type="submit" style="font-weight : bold";> Log Out </button>


      `;
  },

  async afterRender() {
    //  
  },

  async getUserProfile() {
    try {
      const response = await axios.get('http://localhost:3000/api/auth/check-session');
      if (response.data.loggedIn) {
        return response.data.user;
      }
    } catch (error) {
      console.error('Error checking session', error);
    }
    return {};
  },

  saveName() {
    const newName = document.getElementById('newName').value;

    // Kirim permintaan ke server untuk menyimpan perubahan nama
    axios.post('http://localhost:3000/api/auth/update-username', { username: newName })
      .then((response) => {
        if (response.data.message === 'Username updated') {
          alert('Username updated successfully');
          // Perbarui tampilan dengan username yang baru
          document.getElementById('username-profile').textContent = newName;
        } else {
          console.error('Username update failed');
        }
      })
      .catch((error) => {
        console.error('Error during username update', error);
      });
  },

  logout() {
    axios.get('http://localhost:3000/api/auth/logout')
      .then((response) => {
        if (response.data.message === 'Logout successful') {
          window.location.hash = '#/login'; 
        } else {
          console.error('Logout failed');
        }
      })
      .catch((error) => {
        console.error('Error during logout', error);
      });
  },
};

export default Profile;
