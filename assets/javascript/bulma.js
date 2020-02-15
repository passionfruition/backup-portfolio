$(document).ready(function () {

    var projects = [
        // {
        //     name: "Google Books",
        //     photo: "https://cdn.vox-cdn.com/thumbor/64OEm0HvabxPdBV4fES4KTsqB1I=/0x0:1000x417/1200x800/filters:focal(691x161:851x321)/cdn.vox-cdn.com/uploads/chorus_image/image/65029446/playbooks_beta.max_1000x1000.0.png",
        //     gif: "https://cdn.vox-cdn.com/thumbor/64OEm0HvabxPdBV4fES4KTsqB1I=/0x0:1000x417/1200x800/filters:focal(691x161:851x321)/cdn.vox-cdn.com/uploads/chorus_image/image/65029446/playbooks_beta.max_1000x1000.0.png",
        //     description: "An app where users can search, view, save and delete Google Books.",
        //     ideation: "",
        //     tools: ["React", "React Router", "Mongoose", "Bulma", "Heroku"],
        //     github: "https://github.com/madeleineprak/Google-Books",
        //     website: "https://googlebooks-mp.herokuapp.com/"
        // },
        // {
        //     name: "Memory Game",
        //     photo: "./assets/images/MemoryGame.PNG",
        //     gif: "./assets/images/MemoryGame.gif",
        //     description: "A game where the user's goal is to click a unique image each time to get the most points.",
        //     ideation: "",
        //     tools: ["React", "Unsplash API", "Bulma", "bulma-toast"],
        //     github: "https://github.com/madeleineprak/Memory-Game",
        //     website: "https://madeleineprak.github.io/Memory-Game/"
        // },
        // {
        //     name: "Get The Scoop",
        //     photo: "./assets/images/GetTheScoop.PNG",
        //     gif: "./assets/images/GetTheScoop.gif",
        //     description: "An app that keeps track of hacker news and lets the user add personalized notes.",
        //     ideation: "",
        //     tools: ["Mongoose", "Express", "Express-Handlebars", "Cheerio"],
        //     github: "https://github.com/madeleineprak/Get-The-Scoop",
        //     website: "https://fast-inlet-41689.herokuapp.com/"
        // },
        {
            name: "Mom 'n Pop",
            photo: "./assets/images/MomandPop.PNG",
            gif: "./assets/images/MomandPop.gif",
            description: "A crowd-sourced interactive map app that keeps track of all the awesome local mom-and-pop shops in the Seattle area.",
            ideation: "",
            tools: ["Sequelize", "MapBox", "GeocoderAPI", "Materialize"],
            github: "https://github.com/madeleineprak/Mom-N-Pop",
            website: "https://momnpop.herokuapp.com/"
        },
        {
            name: "Hike Finder",
            photo: "./assets/images/HikeFinder.PNG",
            gif: "./assets/images/FindMyHike.gif",
            description: "An app where you can find a hike in any given area along with all the information you need to plan a trip there.",
            ideation: "",
            tools: ["Parsley.js", "GoogleDevelopers", "HikingProjectAPI"],
            github: "https://github.com/madeleineprak/Find-My-Hike",
            website: "https://madeleineprak.github.io/Find-My-Hike/"
        },
        {
            name: "Get The Scoop",
            photo: "./assets/images/GetTheScoop.PNG",
            gif: "./assets/images/GetTheScoop.gif",
            description: "An app that keeps track of hacker news and lets you add personalized notes.",
            ideation: "",
            tools: ["Mongoose", "Express", "Express-Handlebars", "Cheerio"],
            github: "https://github.com/madeleineprak/Get-The-Scoop",
            website: "https://fast-inlet-41689.herokuapp.com/"
        }
        // {
        //     name: "Burger Queen",
        //     photo: "./assets/images/BurgerQueen.png",
        //     gif: "./assets/images/BurgerQueen.gif",
        //     description: "An app where the user can eat as many burgers as they want without gaining any weight.",
        //     ideation: "",
        //     tools: ["Express", "ExpressHandlebars", "MySQL", "Heroku"],
        //     github: "https://github.com/madeleineprak/Burger-Queen",
        //     website: "https://burgerqueen-devmad.herokuapp.com/"
        // },
        // {
        //     name: "Hey Bud",
        //     photo: "./assets/images/HeyBud.PNG",
        //     gif: "./assets/images/HeyBud.gif",
        //     description: "A dating app but for friends. The user can take a survey and find a buddy that has the highest compatibility based on a number of survey questions.",
        //     ideation: "",
        //     tools: ["Express", "Heroku"],
        //     github: "https://github.com/madeleineprak/Friend-Finder",
        //     website: "https://heybud-devmadeleine.herokuapp.com/"
        // },
        // {
        //     name: "Bamazon",
        //     photo: "./assets/images/Bamazon.png",
        //     gif: "./assets/images/Bamazon.gif",
        //     description: "A marketplace node application that stores data in MySQL. Users can participate from customer, manager and supervisor user perspectives using the command line.",
        //     ideation: "",
        //     tools: ["MySQL", "dotenv", "inquirer", "console.table"],
        //     github: "https://github.com/madeleineprak/Bamazon",
        //     website: ""
        // },
        // {
        //     name: "LIRI",
        //     photo: "./assets/images/LIRI.png",
        //     gif: "./assets/images/LIRI.gif",
        //     description: "A command line node app that takes in parameters and gives you back data. Inspired by SIRI.",
        //     ideation: "",
        //     tools: ["BandsInTownAPI", "SpotifyAPI", "OMDbAPI"],
        //     github: "https://github.com/madeleineprak/LIRI-Node-App",
        //     website: ""
        // },
        // {
        //     name: "GIF Getaway",
        //     photo: "./assets/images/MentalVacation.PNG",
        //     gif: "./assets/images/GIFGetaway.gif",
        //     description: "An app that lets you take a mental vaction no matter where you are. Click on any vacation image to increase immersion.",
        //     ideation: "",
        //     tools: ["GiphyAPI", "Bootstrap"],
        //     github: "https://github.com/madeleineprak/Gif-Vacation",
        //     website: "https://madeleineprak.github.io/Gif-Vacation/"
        // },
        // {
        //     name: "Vine Trivia",
        //     photo: "./assets/images/VineQuiz.PNG",
        //     gif: "./assets/images/VineTrivia.gif",
        //     description: "Remember the beloved app Vine? Take this quiz to see how well you knew it. Be careful, it's timed!",
        //     ideation: "",
        //     tools: ["jQuery", "Bootstrap", "Timer"],
        //     github: "https://github.com/madeleineprak/Trivia-Game",
        //     website: "https://madeleineprak.github.io/Trivia-Game/"
        // }
        // {
        //     name: "Celebrity Word Guess Game",
        //     photo: "./assets/images/WordGuess.PNG",
        //     gif: "./assets/images/WordGuess.gif",
        //     description: "A game where you guess the celebrity from two pictures. See how many you can get correct.",
        //     ideation: "",
        //     tools: ["jQuery", "Bootstrap"],
        //     github: "https://github.com/madeleineprak/Word-Guess-Game",
        //     website: "https://madeleineprak.github.io/Word-Guess-Game/"
        // },
        // {
        //     name: "Train Scheduler",
        //     photo: "./assets/images/TrainScheduler.png",
        //     gif: "./assets/images/TrainScheduler.png",
        //     description: "An app that lets you to view schedules from various trains or add your own.",
        //     ideation: "",
        //     tools: ["Firebase", "jQuery", "Bootstrap", "Timer"],
        //     github: "https://github.com/madeleineprak/Train-Scheduler",
        //     website: "https://madeleineprak.github.io/Train-Scheduler/"
        // },
        // {
        //     name: "Crystal Collector",
        //     photo: "./assets/images/CrystalCollector.PNG",
        //     gif: "./assets/images/CrystalCollector.png",
        //     description: "A game where you have to reach the random number by collecting jewels worth a certain amount of points.",
        //     ideation: "",
        //     tools: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
        //     github: "https://github.com/madeleineprak/Crystal-Collector",
        //     website: "https://madeleineprak.github.io/Crystal-Collector/"
        // }
    ]

    function displayMobileProjects() {
        projects.forEach(function (project) {
            var technologies = project.tools;
            var contentSection = $("<div>").addClass("content").text(project.description + " ");

            $("#mobile-projects").append(
                $("<div>").addClass("card").append(
                    $("<div>").addClass("card-image").append(
                        $("<figure>").addClass("image is-4by3").append(
                            $("<img>").attr("src", project.photo).attr("style", "object-fit: cover;")
                        )
                    ),
                    $("<div>").addClass("card-content").append(
                        $("<div>").addClass("media").append(
                            $("<div>").addClass("media-content").append(
                                $("<p>").addClass("title is-4").text(project.name),
                                $("<p>").addClass("subtitle is-6").attr("href", "https://github.com/madeleineprak").attr("target", "_blank").text("@madeleineprak")
                            )
                        ),
                        contentSection,
                        $("<a>").attr("href", project.github).attr("target", "_blank").addClass("button is-dark project-button").append(
                            $("<span>").addClass("icon is-small").append(
                                $("<i>").addClass("fab fa-github-square")),
                            $("<span>").text("GITHUB")
                        ),
                        $("<a>").attr("href", project.website).attr("target", "_blank").addClass("button is-dark project-button").append(
                            $("<span>").addClass("icon is-small").append(
                                $("<i>").addClass("fas fa-external-link-square-alt")),
                            $("<span>").text("DEPLOYED")
                        ),
                        $("<br>")

                    )
                )
            );
            technologies.forEach(function (technology) {
                contentSection.append($("<a>").text("#" + technology).addClass("project-tool"))
            })
            contentSection.append(
                $("<br>"),
                // $("<time>").attr("datetime", "2019-11-23").text("3:05 AM - 23 Nov 2019")
            )
        })
    }

    function displayProjectDetails(project) {
        var technologies = project.tools;
        // var techSection = $("<h2>").text("Technologies Used").addClass("details-header");
        var toolDiv = $("<div>");
        $("#web-project-details").empty();
        var div = $("<div>").append(
            $("<h2>").text(project.name).addClass("title is-4"),
            $("<p>").text(project.description),
            $("<br>"),
            $("<a>").attr("href", project.github).attr("target", "_blank").addClass("button is-dark project-button").append(
                $("<span>").addClass("icon is-small").append(
                    $("<i>").addClass("fab fa-github-square")),
                $("<span>").text("GITHUB")),
            $("<a>").attr("href", project.website).attr("target", "_blank").addClass("button is-dark project-button").append(
                $("<span>").addClass("icon is-small").append(
                    $("<i>").addClass("fas fa-external-link-square-alt")),
                $("<span>").text("DEPLOYED")),
            $("<h2>").text("Technologies Used").addClass("details-header title is-4"),
            toolDiv,
            $("<h2>").text("Preview").addClass("details-header title is-4"),
            $("<img>").attr("src", project.gif).addClass("project-gif"),
            $("<br>")
        )
        // techSection.append($("<br>"));
        technologies.forEach(function (technology) {
            toolDiv.append($("<span>").text("#" + technology).addClass("tool-span"))
        })
        $("#web-project-details").append(div);
    }

    function displayProjectPhotos() {
        // $("#web-project-photos").empty();
        projects.forEach(function (project) {
            $("#web-project-photos").append(
                $("<img>").attr("src", project.photo).attr("data-name", project.name).addClass("click-photo")
            )
        })
    }

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    displayMobileProjects();
    displayProjectPhotos();

    $(".click-photo").click(function () {
        var clickedProject = $(this).attr("data-name");
        projects.forEach(function (project) {
            if (project.name == clickedProject) {
                displayProjectDetails(project);
            }
        })
    })
});

//       ===== Scroll to Top ==== 
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $("#mobile-return-to-top").fadeIn(200);    // Fade in the arrow
    } else {
        $("#mobile-return-to-top").fadeOut(200);   // Else fade out the arrow
    }
});

$("#mobile-return-to-top").click(function () {      // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
    }, 500);
});

$("#web-project-photos").scroll(function () {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $("#web-return-to-top").fadeIn(200);    // Fade in the arrow
    } else {
        $("#web-return-to-top").fadeOut(200);   // Else fade out the arrow
    }
});

$("#web-return-to-top").click(function () {      // When arrow is clicked
    $('#web-project-photos').animate({
        scrollTop: 0                       // Scroll to top of body
    }, 500);
});