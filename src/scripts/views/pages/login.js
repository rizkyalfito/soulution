const Login = {
    async render() {
      return `
      <div class="login-container">
     
  
      <div class="input-container">
        <h2>WELCOME!</h2>
        <h3 class="text_login">Log In to your account</h3>
       
        <form class="login-form"> 
          <input type="email" class="input-label" placeholder="Email" />
          <input type="password" class="input-label" placeholder="Password" /> 
          <button class="register-text" type="submit">LOGIN</button>
          <p>Don't have any account?
            <a class="tombol-arah" href="#/Signup">Sign Up</a>
            </p>
        </form>
      </div>
      <div class="container_img">
      <img src="./images/heros/login.jpg"class="gambar"width="500px"height="450px"alt="LogIn"/>
      </div>

    </div>
      
          `;
    },
  
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
  
  export default Login;
  