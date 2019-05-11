  // ========================================== START CODING BELOW!!

    // Initialize Firebase
    var firebaseConfig = {
        apiKey: "AIzaSyBKRpgfOXUX5_jfoXfY02xZ6_ImTs0u-iA",
        authDomain: "my-first-project-7460d.firebaseapp.com",
        databaseURL: "https://my-first-project-7460d.firebaseio.com",
        projectId: "my-first-project-7460d",
        storageBucket: "my-first-project-7460d.appspot.com",
        messagingSenderId: "244730099594",
        appId: "1:244730099594:web:e050040ce6357ea5"
      };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
      // Create a variable to reference the database.
      var database = firebase.database();
  
      // Initial Values
      var name = "";
      var position = "";
      var startDate = 0;
      var rate = "";
  
      // Capture Button Click
      $("#submit-btn").on("click", function(event) {
          console.log("Submit Clicked")
        event.preventDefault();
  
        // Grabbed values from text boxes
        name = $("#name").val().trim;
        position = $("#position").val().trim();
        startDate = $("#start").val().trim();
        rate = $("#rate").val().trim();
  
        // Code for handling the push
        database.ref().push({
          name: name,
          position: position,
          startDate: startDate,
          rate: rate,
          dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
  
      });
  
      // Firebase watcher .on("child_added"
      database.ref().on("child_added", function(snapshot) {
        // storing the snapshot.val() in a variable for convenience
        var sv = snapshot.val();
  
        // Console.loging the last user's data
        console.log(sv.name);
        console.log(sv.position);
        console.log(sv.startDate);
        console.log(sv.rate);
  
        // Change the HTML to reflect
        $("#name-display").text(sv.name);
        $("#email-display").text(sv.position);
        $("#age-display").text(sv.startDate);
        $("#comment-display").text(sv.rate);
  
        // Handle the errors
      }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
      });
  