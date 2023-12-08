const Test = {
    async render() {
      return `
  <div class="up-content">
      <p><b>Complete the following questions according to your situation<br /> <br />
      In the LAST MONTH, how often have you: </b></p>
  </div>
          `;
    },
  
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
  
  export default Test;
  