/*
window.onload = function() {
  const newBalance = localStorage.getItem('balance');
  
  const pack1History = localStorage.getItem('pack1History');
  const pack2History = localStorage.getItem('pack2History');
  const pack3History = localStorage.getItem('pack3History');
  const pack4History = localStorage.getItem('pack4History');
  const pack5History = localStorage.getItem('pack5History');
  document.getElementById('result').textContent = pack1History;
  document.getElementById('pack2').textContent = pack2History;
  document.getElementById('pack3').textContent = pack3History;
  document.getElementById('pack4').textContent = pack4History;
  document.getElementById('pack5').textContent = pack5History;
  let totalPack = 0;
  if (pack1History) totalPack += pack1History.split(',').length * 2000;
  if (pack2History) totalPack += pack2History.split(',').length * 4000;
  if (pack3History) totalPack += pack3History.split(',').length * 8000;
  if (pack4History) totalPack += pack4History.split(',').length * 10000;
  if (pack5History) totalPack += pack5History.split(',').length * 100000;

function calculateInterest() {
  const pack1History = localStorage.getItem('pack1History');
  const pack2History = localStorage.getItem('pack2History');
  const pack3History = localStorage.getItem('pack3History');
  const pack4History = localStorage.getItem('pack4History');
  const pack5History = localStorage.getItem('pack5History');
  const lastCalculationTime = parseInt(localStorage.getItem('lastCalculationTime')) || Date.now();

  const currentTime = Date.now();
  const timeElapsed = (currentTime - lastCalculationTime) / 1000; // in seconds

  let interest = 0;
  if (pack1History) {
    const pack1Values = pack1History.split(',').map(Number);
    interest += pack1Values.reduce((a, b) => a + b * 0.2 * timeElapsed / (60 * 60 * 24), 0);
  }
  if (pack2History) {
    const pack2Values = pack2History.split(',').map(Number);
    interest += pack2Values.reduce((a, b) => a + b * 0.2 * timeElapsed / (60 * 60 * 24), 0);
  }
  if (pack3History) {
    const pack3Values = pack3History.split(',').map(Number);
    interest += pack3Values.reduce((a, b) => a + b * 0.2 * timeElapsed / (60 * 60 * 24), 0);
  }
  if (pack4History) {
    const pack4Values = pack4History.split(',').map(Number);
    interest += pack4Values.reduce((a, b) => a + b * 0.2 * timeElapsed / (60 * 60 * 24), 0);
  }
  if (pack5History) {
    const pack5Values = pack5History.split(',').map(Number);
    interest += pack5Values.reduce((a, b) => a + b * 0.2 * timeElapsed / (60 * 60 * 24), 0);
  }

  const currentInterest = parseFloat(localStorage.getItem('interestBln')) || 0;
  localStorage.setItem('interestBln', currentInterest + interest);
  localStorage.setItem('lastCalculationTime', currentTime);
  document.getElementById('interestBln').textContent = parseFloat(localStorage.getItem('interestBln')).toFixed(2);
}

setInterval(calculateInterest, 3000);
}*/



/*
const firebaseConfig = {
    apiKey: "AIzaSyCWJ8u2MGdC98r4ij_SZz9DkcqnGXcwOZU",
    authDomain: "ohut-7a131.firebaseapp.com",
    databaseURL: "https://ohut-7a131-default-rtdb.firebaseio.com",
    projectId: "ohut-7a131",
    storageBucket: "ohut-7a131.firebasestorage.app",
    messagingSenderId: "287815822212",
    appId: "1:287815822212:web:b118b5f20a1a8845074bd1"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const userId = firebase.auth().currentUser.uid;

window.onload = function() {
  db.ref(`users/${userId}`).once('value', (snapshot) => {
    const userData = snapshot.val();
    if (userData) {
      const pack1History = userData.pack1History || [];
      const pack2History = userData.pack2History || [];
      const pack3History = userData.pack3History || [];
      const pack4History = userData.pack4History || [];
      const pack5History = userData.pack5History || [];

      document.getElementById('result').textContent = pack1History.join(', ');
      document.getElementById('pack2').textContent = pack2History.join(', ');
      document.getElementById('pack3').textContent = pack3History.join(', ');
      document.getElementById('pack4').textContent = pack4History.join(', ');
      document.getElementById('pack5').textContent = pack5History.join(', ');

      let totalPack = 0;
      totalPack += pack1History.length * 2000;
      totalPack += pack2History.length * 4000;
      totalPack += pack3History.length * 8000;
      totalPack += pack4History.length * 10000;
      totalPack += pack5History.length * 100000;

      function calculateInterest() {
        const lastCalculationTime = userData.lastCalculationTime || Date.now();
        const currentTime = Date.now();
        const timeElapsed = (currentTime - lastCalculationTime) / 1000; // in seconds
        let interest = 0;

        interest += pack1History.reduce((a, b) => a + b * 0.2 * timeElapsed / (60 * 60 * 24), 0);
        interest += pack2History.reduce((a, b) => a + b * 0.2 * timeElapsed / (60 * 60 * 24), 0);
        interest += pack3History.reduce((a, b) => a + b * 0.2 * timeElapsed / (60 * 60 * 24), 0);
        interest += pack4History.reduce((a, b) => a + b * 0.2 * timeElapsed / (60 * 60 * 24), 0);
        interest += pack5History.reduce((a, b) => a + b * 0.2 * timeElapsed / (60 * 60 * 24), 0);

        const currentInterest = userData.interestBln || 0;
        db.ref(`users/${userId}`).update({
          interestBln: currentInterest + interest,
          lastCalculationTime: currentTime,
        });
        document.getElementById('interestBln').textContent = (currentInterest + interest).toFixed(2);
      }
      setInterval(calculateInterest, 3000);
    }
  });
}*/

/*
In this updated code, we use the Firebase Realtime Database to store and retrieve user data. We assume that the user's data is stored in a node with the user's ID as the key, and that the data is structured as follows:

```
{
  "users": {
    "userId": {
      "pack1History": [...],
      "pack2History": [...],
      "pack3History": [...],
      "pack4History": [...],
      "pack5History": [...],
      "interestBln": 0,
      "lastCalculationTime": 0
    }
  }
}*/

const firebaseConfig = {
  apiKey: "AIzaSyCWJ8u2MGdC98r4ij_SZz9DkcqnGXcwOZU",
  authDomain: "ohut-7a131.firebaseapp.com",
  databaseURL: "https://ohut-7a131-default-rtdb.firebaseio.com",
  projectId: "ohut-7a131",
  storageBucket: "ohut-7a131.firebasestorage.app",
  messagingSenderId: "287815822212",
  appId: "1:287815822212:web:b118b5f20a1a8845074bd1"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();

auth.onAuthStateChanged((user) => {
  if (user) {
    const userId = user.uid;
    window.onload = function() {
      db.ref(`users/${userId}`).once('value', (snapshot) => {
        const userData = snapshot.val();
        if (userData) {
          const pack1History = userData.pack1History || [];
          const pack2History = userData.pack2History || [];
          const pack3History = userData.pack3History || [];
          const pack4History = userData.pack4History || [];
          const pack5History = userData.pack5History || [];
          document.getElementById('result').textContent = pack1History.join(', ');
          document.getElementById('pack2').textContent = pack2History.join(', ');
          document.getElementById('pack3').textContent = pack3History.join(', ');
          document.getElementById('pack4').textContent = pack4History.join(', ');
          document.getElementById('pack5').textContent = pack5History.join(', ');
          let totalPack = 0;
          totalPack += pack1History.length * 2000;
          totalPack += pack2History.length * 4000;
          totalPack += pack3History.length * 8000;
          totalPack += pack4History.length * 10000;
          totalPack += pack5History.length * 100000;
          function calculateInterest() {
            const lastCalculationTime = userData.lastCalculationTime || Date.now();
            const currentTime = Date.now();
            const timeElapsed = (currentTime - lastCalculationTime) / 1000; // in seconds
            let interest = 0;
            interest += pack1History.reduce((a, b) => a + b * 0.2 * timeElapsed / (60 * 60 * 24), 0);
            interest += pack2History.reduce((a, b) => a + b * 0.2 * timeElapsed / (60 * 60 * 24), 0);
            interest += pack3History.reduce((a, b) => a + b * 0.2 * timeElapsed / (60 * 60 * 24), 0);
            interest += pack4History.reduce((a, b) => a + b * 0.2 * timeElapsed / (60 * 60 * 24), 0);
            interest += pack5History.reduce((a, b) => a + b * 0.2 * timeElapsed / (60 * 60 * 24), 0);
            const currentInterest = userData.interestBln || 0;
            db.ref(`users/${userId}`).update({
              interestBln: currentInterest + interest,
              lastCalculationTime: currentTime,
            });
            document.getElementById('interestBln').textContent = (currentInterest + interest).toFixed(2);
          }
          setInterval(calculateInterest, 3000);
        }
      });
    }
  } else {
    console.log("User is not signed in");
  }
});

