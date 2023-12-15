const Forum = {
  async render() {
    return `
    <div class="forum-container">
        <h2 class="py-2 rounded-1 text-light text-center">Lets Talk With People</h2>
        <p class="w-50 text-center">This is a discussion forum. You can use this forum to share your stories with others without worrying about your data being known to others.</p>

        <div id="forumchat" class="forumChat-container">
            <div id="chatbox" class="chatbox rounded-2">
                
            </div>

            <div class="input-chat">
                <form id="chatForm" action="">
                    <input id="message" name="message" class="message" type="text" placeholder="Type a message here...">
                    <button id="sendMessage" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 51 44" fill="none">
                    <path d="M0 43.1651V27.2155L21.3333 21.899L0 16.5825V0.632996L50.6667 21.899L0 43.1651Z" fill="#4299A5"/>
                    </svg></button>
                </form>
            </div>
        </div>
    </div>
      `;
  },

  async afterRender() {
    const message = document.getElementById('message');
    const sendMessage = document.getElementById('sendMessage');
    const chatbox = document.getElementById('chatbox');

    sendMessage.addEventListener('click', (e) => {
      e.preventDefault();
      if (message.value) {
        const chatProfile = document.createElement('div');
        chatProfile.className = 'chatProfile';
        chatProfile.className = 'd-flex align-items-center mb-2';

        const profileImage = document.createElement('img');
        profileImage.src = './images/icons/profile-circle.svg';
        profileImage.style.width = '44px';
        profileImage.style.height = '44px';
        profileImage.alt = '';

        const username = document.createElement('p');
        username.className = 'fw-bold';
        username.textContent = 'anonymous';
        username.style.margin = '0';

        chatProfile.appendChild(profileImage);
        chatProfile.appendChild(username);

        const chatMessage = document.createElement('div');
        chatMessage.className = 'w-50 ms-4 rounded-2';
        chatMessage.style.backgroundColor = '#4299a5';

        const messageText = document.createElement('p');
        messageText.className = 'p-2 text-light m-0 mb-3';
        messageText.textContent = message.value;

        chatMessage.appendChild(messageText);

        const chatContainer = document.createElement('div');
        chatContainer.appendChild(chatProfile);
        chatContainer.appendChild(chatMessage);

        chatbox.appendChild(chatContainer);
        message.value = '';
      }
    });
  },
};

export default Forum;
