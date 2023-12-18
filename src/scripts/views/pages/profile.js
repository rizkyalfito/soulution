/* eslint-disable no-alert */
import axios from 'axios';

const Profile = {
  async render() {
    const user = await this.getUserProfile();
    return `
      <i id="logo" class="fa fa-user";></i>
      <p id="email-profile" style="text-align: center";>${user.email}</p>
      <div id="mycard" class="card">
        <form id="editForm">
          <p id="username-profile" style="font-weight: bold;">${user.username}</p>
          <input type="text" id="newName" name="newName" value="${user.username}" required>
          <button id="saveButton" type="button" style="font-weight: bold;">Save</button>
        </form>
      </div>
      <button id="tombol-logout" class="tombol-logout" type="button" style="font-weight: bold;">Log Out</button>
    `;
  },

  async afterRender() {
    document.getElementById('saveButton').addEventListener('click', () => {
      this.saveName();
    });

    document.getElementById('tombol-logout').addEventListener('click', async () => {
      const isConfirmed = window.confirm('Are you sure you want to log out?');

      if (isConfirmed) {
        await this.logout();
      }
    });
  },

  async getUserProfile() {
    try {
      const response = await axios.get('http://localhost:3000/api/auth/check-session', { withCredentials: true });
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
    axios
      .post('http://localhost:3000/api/profile/update-username', { username: newName }, { withCredentials: true })
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
        // Tambahkan penanganan kesalahan di sini
        alert('Error during username update. You need to login first');
      });
  },

  logout() {
    axios
      .get('http://localhost:3000/api/auth/logout', { withCredentials: true })
      .then((response) => {
        if (response.data.message === 'Logout successful') {
          window.location.hash = '#/home';
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
