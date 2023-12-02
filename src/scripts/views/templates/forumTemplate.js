const forumTemplate = () => `
    <div class="forum-container">
        <h2 class="py-2 rounded-1 text-light text-center">Lets Talk With People</h2>
        <p class="w-50 text-center">This is a discussion forum. You can use this forum to share your stories with others without worrying about your data being known to others.</p>

        <div class="forumChat-container">
            <div class="chatbox rounded-2">
                <div class="chat-incoming mb-4">
                <div class="chatProfile">
                    <img src="./images/icons/profile-circle.svg" width="44px" height="44px" alt="">
                    <p  class="fw-bold">Nama pengguna</p>
                </div>
                <div class="w-50 ms-4 rounded-2" style="background-color: #4299a5;">
                    <p class="p-2 text-light m-0">Lorem ipsum dolor sit amet consectetur adipisic</p>
                </div>
            </div>

            <div class="chat-outcoming mb-4">
                <div class="chatProfile">
                    <p class="fw-bold">Nama pengguna</p>
                    <img src="./images/icons/profile-circle.svg" width="44px" height="44px" alt="">
                </div>
                <div class="w-50 me-4 rounded-2" style="background-color: #4299a5;">
                    <p class="p-2 text-light m-0">Lorem ipsum dolor sit amet consectetur adipisic</p>
                </div>
            </div>

            <div class="chat-incoming mb-4">
                <div class="chatProfile">
                    <img src="./images/icons/profile-circle.svg" width="44px" height="44px" alt="">
                    <p  class="fw-bold">Nama pengguna</p>
                </div>
                <div class="w-50 ms-4 rounded-2" style="background-color: #4299a5;">
                    <p class="p-2 text-light m-0">Lorem ipsum dolor sit amet consectetur adipisic</p>
                </div>
            </div>

            <div class="chat-outcoming mb-4">
                <div class="chatProfile">
                    <p class="fw-bold">Nama pengguna</p>
                    <img src="./images/icons/profile-circle.svg" width="44px" height="44px" alt="">
                </div>
                <div class="w-50 me-4 rounded-2" style="background-color: #4299a5;">
                    <p class="p-2 text-light m-0">Lorem ipsum dolor sit amet consectetur adipisic</p>
                </div>
            </div>

            <div class="chat-incoming mb-4">
                <div class="chatProfile">
                    <img src="./images/icons/profile-circle.svg" width="44px" height="44px" alt="">
                    <p  class="fw-bold">Nama pengguna</p>
                </div>
                <div class="w-50 ms-4 rounded-2" style="background-color: #4299a5;">
                    <p class="p-2 text-light m-0">Lorem ipsum dolor sit amet consectetur adipisic</p>
                </div>
            </div>

            <div class="chat-outcoming mb-4">
                <div class="chatProfile">
                    <p class="fw-bold">Nama pengguna</p>
                    <img src="./images/icons/profile-circle.svg" width="44px" height="44px" alt="">
                </div>
                <div class="w-50 me-4 rounded-2" style="background-color: #4299a5;">
                    <p class="p-2 text-light m-0">Lorem ipsum dolor sit amet consectetur adipisic</p>
                </div>
            </div>
            
            <div class="chat-outcoming mb-4">
                <div class="chatProfile">
                    <p class="fw-bold">Nama pengguna</p>
                    <img src="./images/icons/profile-circle.svg" width="44px" height="44px" alt="">
                </div>
                <div class="w-50 me-4 rounded-2" style="background-color: #4299a5;">
                    <p class="p-2 text-light m-0">Lorem ipsum dolor sit amet consectetur adipisic</p>
                </div>
            </div>

            <div class="chat-outcoming mb-4">
                <div class="chatProfile">
                    <p class="fw-bold">Nama pengguna</p>
                    <img src="./images/icons/profile-circle.svg" width="44px" height="44px" alt="">
                </div>
                <div class="w-50 me-4 rounded-2" style="background-color: #4299a5;">
                    <p class="p-2 text-light m-0">Lorem ipsum dolor sit amet consectetur adipisic</p>
                </div>
            </div>
        </div>

        <div class="input-chat">
            <form action="">
                <input class="message" type="text" placeholder="Type a message here...">
                <input class="image" type="image"  src="./images/icons/forumImgInput.svg" value=""/>
                </form>
            </div>
        </div>
    </div>
`;

export default forumTemplate;
