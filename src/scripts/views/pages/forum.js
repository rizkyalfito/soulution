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
                    <button id="sendMessage" type="submit">kirim</button>
                    <input class="image" type="image"  src="./images/icons/forumImgInput.svg" value=""/>
                </form>
            </div>
        </div>
    </div>
      `;
  },

  async afterRender() {
  // 
  }
}

export default Forum;
