const database = firebase.database();

const getAllDataButtonElement = document.getElementById('get-all-data');

function writeUserDate(userId, name, email, imageUrl) {
  database.ref(`users/${userId}`).set({
    username: name,
    email,
    profile_picture: imageUrl,
  });
};

database.ref('users/').on('value', snapshot => {
  console.log(snapshot.val());
});

getAllDataButtonElement.addEventListener('click', () => {
  database.ref().once('value').then(snapshot => {
    console.log(snapshot.val());
  });
});
