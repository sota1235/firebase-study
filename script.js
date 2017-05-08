const database = firebase.database();

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
