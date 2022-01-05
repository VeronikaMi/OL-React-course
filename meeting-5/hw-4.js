console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    if (Object.keys(usersDB).includes(email)) {
      setTimeout(() => {
        console.log("Now we have the data of user: " + email);
        resolve({ userEmail: email });
      }, 3000);
    }
    else {
      reject("User not found!");
    }
  })
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    if (video.title) {
      setTimeout(() => { resolve(video.title) }, 2000);
    }
    else {
      setTimeout(() => { reject("Video Title not found!") }, 2000);
    }
  })
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    if (usersDB[email].length) {
      setTimeout(() => { resolve(usersDB[email]) }, 2000);
    }
    else {
      setTimeout(() => { reject("Video not found!") }, 2000);
    }
  })
}

function displayError(errorMessage) {
  console.error(new Error(errorMessage));
}

const getPassedUsersFirstVideoTitle = async (user) => {
  try {
    let user = await loginUser(user, 1234);
    let videos = await getUserVideos(loggedUser.userEmail);
    let title = await videoDetails(videos[0]);
    console.log(title);
  }
  catch (error) {
    displayError(error);
  }
}

getPassedUsersFirstVideoTitle("user4@hw.js");
getPassedUsersFirstVideoTitle("user3@hw.js");
getPassedUsersFirstVideoTitle("user2@hw.js");
getPassedUsersFirstVideoTitle("user1@hw.js");


console.log("Finish");