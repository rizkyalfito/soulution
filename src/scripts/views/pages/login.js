/* eslint-disable no-promise-executor-return */
/* eslint-disable no-alert */
import axios from 'axios';

const checkSession = async () => {
    try {
        const response = await axios.get('http://192.168.0.109:3000/api/auth/check-session', { withCredentials: true });
        console.log(response.data);

        // Update status atau lakukan tindakan berdasarkan respons sesi di sini
        if (response.data.loggedIn) {
            // Pengguna masuk, lakukan sesuatu
            console.log('User is logged in:', response.data.user);
        } else {
            // Pengguna tidak masuk, lakukan sesuatu
            console.log('User is not logged in');
        }
    } catch (error) {
        console.error('Error checking session', error);
    }
};


const Login = {
    async render() {
        return `
            <div class="login-container">
                <div class="input-container">
                    <h2>Log In</h2>
                    <h3 class="text_login">Log In to your account</h3>
                    <form id="login-form" class="login-form"> 
                        <input id="email" type="email" class="input-label" placeholder="Email" />
                        <input id="password" type="password" class="input-label" placeholder="Password" /> 
                        <button id="login-btn" class="register-text" type="submit">LOGIN</button>
                        <div id="loading-indicator" class="loader" style="display: none;">
                          <span class="loader-text">loading</span>
                          <span class="load"></span>
                        </div>
                        <p>Don't have any account?
                            <a class="tombol-arah" href="#/Signup">Sign Up</a>
                        </p>
                    </form>
                </div>
                <div class="container_img">
                    <img src="./images/heros/login3.jpg" class="gambar"  alt="LogIn"/>
                </div>
            </div>
        `;
    },
  
    async afterRender() {
        const loginForm = document.getElementById('login-form');
        const loginButton = document.getElementById('login-btn');
        const loadingIndicator = document.getElementById('loading-indicator');

        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');

            // Validasi sederhana
            if (!emailInput.value || !passwordInput.value) {
                alert('Email and password are required');
                return;
            }

            loginButton.style.display = 'none';
            loadingIndicator.style.display = 'block';

            try {
                const response = await axios.post('http://192.168.0.109:3000/api/auth/login', {
                    email: emailInput.value,
                    password: passwordInput.value,
                }, { withCredentials: true });
            
                // Simulasikan delay 2 detik (2000 milidetik)
                await new Promise(resolve => setTimeout(resolve, 2000));
            
                if (response.status === 200) {
                    console.log('Login successful');
            
                    // Pastikan pemanggilan checkSession setelah selesai proses login
                    await checkSession();
            
                    // Pastikan tidak ada navigasi sebelum checkSession selesai
                    window.location.hash = '#/check';
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
            } finally {
                loginButton.style.display = 'block';
                loadingIndicator.style.display = 'none';
            }
                     
        });
    },
};

export default Login;