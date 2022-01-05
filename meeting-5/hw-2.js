console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};
function loginUser(email, password, onPass, onFail) {
  if (Object.keys(usersDB).includes(email)) {
    setTimeout(() => {
      console.log("Now we have the data of user:", email);
      onPass({ userEmail: email });
    }, 3000);
  } 
  else {
    setTimeout(() => {onFail("User not found!");}, 3000);
  }
}

function getUserVideos(email, onPass, onFail) {
  if (usersDB[email].length) {
    setTimeout(() => {
      onPass(usersDB[email]);
    }, 2000);
  } 
  else {
    setTimeout(() => {onFail("Videos not found!");}, 2000);
  }
}

function videoDetails(video, onPass, onFail) {
  if (video.title) {
    setTimeout(() => {
      onPass(video.title);
    }, 2000);
  } 
  else {
    setTimeout(() => {onFail("Video Title not found!");}, 2000);
  }
}

const getPassedUsersFirstVideoTitle = (user) =>{
  loginUser(user,1234,(user) => {
      console.log("user:", user);
      getUserVideos(user.userEmail,(videos) => {
          console.log("videos:", videos);
          videoDetails(videos[0],(title) => {
              console.log("title:", title);
            },
            (error) => displayError(error)
          );
        },
        (error) => displayError(error)
      );
    },
    (error) => displayError(error)
  );
}

function displayError(errorMessage) {
  console.error(new Error(errorMessage));
}

getPassedUsersFirstVideoTitle("user4@hw.js");
// getPassedUsersFirstVideoTitle("user3@hw.js");
// getPassedUsersFirstVideoTitle("user2@hw.js");
// getPassedUsersFirstVideoTitle("user1@hw.js");

console.log("Finish");