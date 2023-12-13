/* eslint-disable no-promise-executor-return */
/* eslint-disable no-alert */
import axios from 'axios';

const checkSession = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/auth/check-session', { withCredentials: true });
    console.log(response.data);

    // Lakukan sesuatu berdasarkan respons sesi di sini
  } catch (error) {
    console.error('Error checking session', error);
  }
};

const SignUp = {
  async render() {
    return `
      <div class="login-container">
        <div class="input-container">
          <h2>Sign Up</h2>
          <h3 class="text_login">Sign Up to your account</h3>
          <form id="signup-form" class="login-form"> 
            <input id="email" type="email" class="input-label" placeholder="Email" />
            <input id="password" type="password" class="input-label" placeholder="Password" /> 
            <input id="username" type="text" class="input-label" placeholder="Username" />
            <button id="signup-btn"class="register-text" type="submit">SIGN UP</button>
            <div id="loading-indicator" class="loader" style="display: none;">
                          <span class="loader-text">loading</span>
                          <span class="load"></span>
                        </div>
            <p> Have any account?
              <a class="tombol-arah" href="#/login">Log In</a>
            </p>
          </form>
        </div>
        <div class="container_img">
          <img src="./images/heros/login3.jpg" class="gambar" width="500px" height="450px" alt="LogIn"/>
        </div>
      </div>
    `;
  },
  
  async afterRender() {
    const signupForm = document.getElementById('signup-form');
    const singupButton = document.getElementById('signup-btn');
    const loadingIndicator = document.getElementById('loading-indicator');

    signupForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');
      const usernameInput = document.getElementById('username');

      singupButton.style.display = 'none';
      loadingIndicator.style.display = 'block';

      // Validasi sederhana
      if (!emailInput.value || !passwordInput.value || !usernameInput.value) {
        alert('Email, password, and username are required');
        return;
      }

      try {
        const response = await axios.post('http://localhost:3000/api/auth/signup', {
          email: emailInput.value,
          password: passwordInput.value,
          username: usernameInput.value,
        }, { withCredentials: true });

        
        // Simulasikan delay 2 detik (2000 milidetik)
        await new Promise(resolve => setTimeout(resolve, 2000));

        if (response.data.message === 'Signup successful') {
          alert('Signup successful, log in to continue.');
          window.location.hash = '#/login';
        } else {
          console.error('Signup failed');
          alert('Signup failed. Please check again.');
        }
      } catch (error) {
        console.error('Error during signup', error);

        if (error.response && error.response.status === 400) {
          alert('Email is already in use. Please use a different email.');
        } else {
          alert('Error during signup. Please try again later.');
        }
      } finally {
        singupButton.style.display = 'block';
        loadingIndicator.style.display = 'none';
    }
    });
    checkSession();
  },
};

export default SignUp;
