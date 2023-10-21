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
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name

function addRoom() {
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      })
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html"
}


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name -" + Room_names)
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"
                  document.getElementById("output").innerHTML +=row
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name", name)
      window.location=("kwitter_page.html")
}

function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}