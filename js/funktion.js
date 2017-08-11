//scroll
              $(document).ready(function(){


        // Add smooth scrolling to all links
        $("a").on('click', function(event) {

          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function(){

              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
          });
          } // End if
       });
       });


        $(document).ready(function(){

            $(".panel").slideUp();
            $(".dropdown").click(function(){
                $(this).find(".panel").slideToggle("slow");
            });
        });





//firebase

var config = {
    apiKey: "AIzaSyBO6AXmvu_ejPWyOYTUHey_pogs3sW0Imk",
    authDomain: "foto-9a643.firebaseapp.com",
    databaseURL: "https://foto-9a643.firebaseio.com",
    projectId: "foto-9a643",
    storageBucket: "",
    messagingSenderId: "192772675130"
  };
  firebase.initializeApp(config);

//App

  var app = angular .module("app", ["firebase"]
 	);


// Kommentarer

app.factory("kommentarer", function($firebaseArray) {
    var ref = firebase.database().ref().child("kommentarer");
    return $firebaseArray(ref);
  }
);

//Controller



app.controller("KommentarCtrl", function($scope, kommentarer) {
	$scope.kommentarer = kommentarer;
      // Här skriver vi kod för controllern
      $scope.kommentar = {
		text: "",
		skribent: ""
	}

	$scope .addComment = function() {

	$scope .kommentarer.$add($scope.kommentar);

		$scope.kommentar = {
			text: "",
			skribent: ""
		}

	}

  }
);

//


