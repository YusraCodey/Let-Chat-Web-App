var firebaseConfig = {
      apiKey: "AIzaSyBArnoZmShrM9yqShyVpkR1EAoN1f2m1mY",
      authDomain: "kwitter-c3945.firebaseapp.com",
      databaseURL: "https://kwitter-c3945-default-rtdb.firebaseio.com",
      projectId: "kwitter-c3945",
      storageBucket: "kwitter-c3945.appspot.com",
      messagingSenderId: "326888993322",
      appId: "1:326888993322:web:56b9d51b3b633e5b380953"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")

function send() {
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })

      document.getElementById("msg").value = ""
}
//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
