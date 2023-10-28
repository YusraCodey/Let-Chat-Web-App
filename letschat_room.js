var firebaseConfig = {
      apiKey: "AIzaSyCioKOjyx5KbFUgG4s7lzuK6PIfadwW9Aw",
      authDomain: "lets-chat-web-app-c69b8.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-c69b8-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-c69b8",
      storageBucket: "lets-chat-web-app-c69b8.appspot.com",
      messagingSenderId: "199225559329",
      appId: "1:199225559329:web:faf933d303990f67f51660"
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
      window.location = "letschat_page.html"
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
      window.location=("letschat_page.html")
}

function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}