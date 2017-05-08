const database = firebase.database();

const getAllDataButtonElement = document.getElementById('get-all-data');
const postDataButtonElement = document.getElementById('post-data');
const postDataValueElement = document.getElementById('post-data-value');

function writeUserDate(userId, name, email, imageUrl) {
  database.ref(`users/${userId}`).set({
    username: name,
    email,
    profile_picture: imageUrl,
  });
};

database.ref().on('value', snapshot => {
  console.log(snapshot.val());
});

getAllDataButtonElement.addEventListener('click', () => {
  database.ref().once('value').then(snapshot => {
    console.log(snapshot.val());
  });
});

postDataButtonElement.addEventListener('click', () => {
  const value = postDataValueElement.value;
  database.ref(`data/${value}`).set({
    value: value,
  });
});
