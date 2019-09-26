$(document).ready(function () {
    var firebaseConfig = {
        apiKey: "AIzaSyCa4oCiOi8ZhtUe2ihhXjDvdszdomgVWe0",
        authDomain: "web-portfolio-b48e7.firebaseapp.com",
        databaseURL: "https://web-portfolio-b48e7.firebaseio.com",
        projectId: "web-portfolio-b48e7",
        storageBucket: "",
        messagingSenderId: "1021843626708",
        appId: "1:1021843626708:web:4e5ad6a53dbd346f7d3941"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();

    // Store user message
    var userMessage = {
        name: "",
        email: "",
        message: ""
    }

    // When user clicks sumbit message
    $("#submit-button").on("click", function (event) {
        event.preventDefault();
        console.log("Message sent");

        // Need to add form validation -- parsley.js
        userMessage.name = $("#name-input").val().trim();
        userMessage.email = $("#email-input").val().trim();
        userMessage.message = $("#message-input").val().trim();

        database.ref().push({
            userMessage: userMessage,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });

        $("#name-input").val("");
        $("#email-input").val("");
        $("#message-input").val("");
    })

    // Renders active item in nav
    $(".nav-item a").on("click", function (event) {
        event.preventDefault();
        $(".navbar-nav li").removeClass("active");
        $(this).parent().addClass("active");
    });

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});