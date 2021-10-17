// Init
const github = new Github();

// Search input
const searchUser = document.getElementById("searchUser");

// Search input event Listener
searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // Http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // show alert
      } else {
        // show profile
      }
    });
  } else {
    // Clear Profile
  }
});
