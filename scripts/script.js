import { tournaments, tournamentStartDelayMinutes } from "./config.js";

const time = 60000; // Variable of 60 * 1000

function FindCurrentTournaments() {
  const currentDate = new Date();

  return tournaments
    .filter((tournament) => {
      const tournamentDate = new Date(tournament.date);
      const tournamentEndDate = new Date(
        tournamentDate.getTime() + tournamentStartDelayMinutes * time,
      ); // Add 1 minute
      return tournamentEndDate > currentDate && !isNaN(tournamentDate);
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by date
    .slice(0, 3); // Get the first 3 upcoming tournaments
}

function Update() {
  const currentTournaments = FindCurrentTournaments(); // Returns an array with the 3 upcoming tournaments

  // Add more if more tournaments need to be displayed
  const containers = [
    {
      imageContainerId: "main-tournament-image",
      textContainerId: "gameText1",
      countdownContainerId: "countdown1",
    },
    {
      imageContainerId: "side-tournament-image",
      textContainerId: "gameText2",
      countdownContainerId: "countdown2",
    },
    {
      imageContainerId: "side-tournament-image2",
      textContainerId: "gameText3",
      countdownContainerId: "countdown3",
    },
  ];

  const currentDate = new Date();
  const currentTime = currentDate.getTime();

  containers.forEach((container, i) => {
    const imageContainer = document.getElementById(container.imageContainerId);
    const textContainer = document.getElementById(container.textContainerId);
    const countdownContainer = document.getElementById(
      container.countdownContainerId,
    );

    const tournament = currentTournaments[i];

    if (!tournament) {
      countdownContainer.innerHTML = "";
      textContainer.innerHTML = "";
      imageContainer.style.display = "none";
      return;
    }

    const tournamentTime = new Date(tournament.date).getTime();

    if (currentTime >= tournamentTime) {
      // current time is past the tournament time
      countdownContainer.innerHTML = "Starter NU!";
    } else {
      imageContainer.src = tournament.imagePath;
      textContainer.innerText = tournament.name;

      const timeDifference = Math.abs(tournamentTime - currentTime);

      const hours = Math.floor(
        (timeDifference % (time * 60 * 24)) / (time * 60),
      );
      const minutes = Math.floor((timeDifference % (time * 60)) / time);
      const seconds = Math.floor((timeDifference % time) / 1000);

      const formattedHours = String(hours).padStart(2, "0");
      const formattedMinutes = String(minutes).padStart(2, "0");
      const formattedSeconds = String(seconds).padStart(2, "0");

      countdownContainer.innerHTML =
        `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
  });
}

setInterval(Update, 1000);

Update();
