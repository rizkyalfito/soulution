/* eslint-disable no-alert */
import axios from 'axios';

const Login = {
    async render() {
        return `
            <div class="login-container">
                <div class="input-container">
                    <h2>WELCOME!</h2>
                    <h3 class="text_login">Log In to your account</h3>
                    <form id="login-form" class="login-form"> 
                        <input id="email" type="email" class="input-label" placeholder="Email" />
                        <input id="password" type="password" class="input-label" placeholder="Password" /> 
                        <button class="register-text" type="submit">LOGIN</button>
                        <p>Don't have any account?
                            <a class="tombol-arah" href="#/Signup">Sign Up</a>
                        </p>
                    </form>
                </div>
                <div class="container_img">
                    <img src="./images/heros/login.jpg" class="gambar" width="500px" height="450px" alt="LogIn"/>
                </div>
            </div>
        `;
    },
  
    async afterRender() {
      const loginForm = document.getElementById('login-form');

      loginForm.addEventListener('submit', async (event) => {
          event.preventDefault();

          const emailInput = document.getElementById('email');
          const passwordInput = document.getElementById('password');

          // Validasi sederhana
          if (!emailInput.value || !passwordInput.value) {
              alert('Email and password are required');
              return;
          }

          try {
              const response = await axios.post('http://localhost:3000/api/auth/login', {
                  email: emailInput.value,
                  password: passwordInput.value,
              });

              if (response.status === 200) {
                  console.log('Login successful');
                  window.location.hash = '#/home';
              } else {
                  console.error('Login failed');
                  alert('Login failed. Please check your email and password.');
              }
          } catch (error) {
              console.error('Error during login', error);

              if (error.response && error.response.status === 401) {
                  alert('Invalid email or password. Please try again.');
              } else {
                  alert('Error during login. Please try again later.');
              }
          }
      });
  },
};

export default Login;