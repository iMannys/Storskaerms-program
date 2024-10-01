import { buildBattleEndDate, tournaments, tournamentStartDelayMinutes } from "./config.js";

const time = 60000; // Variable of 60 * 1000

function FindCurrentTournaments() {
  const currentDate = new Date();

  return tournaments
    .filter(tournament => {
      const tournamentDate = new Date(tournament.date);
      const tournamentEndDate = new Date(tournamentDate.getTime() + (tournamentStartDelayMinutes * time)); // Add 1 minute
      return tournamentEndDate > currentDate && !isNaN(tournamentDate);
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date))  // Sort by date
    .slice(0, 3);  // Get the first 3 upcoming tournaments
}

function Update() {
  const currentTournaments = FindCurrentTournaments(); // Returns an array with the 3 upcoming tournaments

  // Add more if more tournaments need to be displayed
  const containers = [
    {
      imageContainerId: 'main-tournament-image',
      textContainerId: 'gameText1',
      countdownContainerId: 'countdown1'
    },
    {
      imageContainerId: 'side-tournament-image',
      textContainerId: 'gameText2',
      countdownContainerId: 'countdown2'
    },
    {
      imageContainerId: 'side-tournament-image2',
      textContainerId: 'gameText3',
      countdownContainerId: 'countdown3'
    }
  ]

  const currentTime = new Date().getTime();

  containers.forEach((container, i) => {
    const imageContainer = document.getElementById(container.imageContainerId);
    const textContainer = document.getElementById(container.textContainerId);
    const countdownContainer = document.getElementById(container.countdownContainerId);

    const tournament = currentTournaments[i];

    if (!tournament) {
      countdownContainer.innerHTML = '';
      textContainer.innerHTML = '';
      imageContainer.style.display = "none";
      return;
    }

    const tournamentTime = new Date(tournament.date).getTime();

    if (currentTime >= tournamentTime) { // current time is past the tournament time
      countdownContainer.innerHTML = 'Starter NU!';
    } else {
      imageContainer.src = tournament.imagePath;
      textContainer.innerText = tournament.name;


      const timeDifference = Math.abs(tournamentTime - currentTime);

      const hours = Math.floor(timeDifference % (time * 60 * 24) / (time * 60));
      const minutes = Math.floor((timeDifference % (time * 60)) / time);
      const seconds = Math.floor((timeDifference % time) / 1000);

      const formattedHours = String(hours).padStart(2, '0');
      const formattedMinutes = String(minutes).padStart(2, '0');
      const formattedSeconds = String(seconds).padStart(2, '0');


      countdownContainer.innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
  });
}

function UpdateBod() {
  const bodCountdown = document.getElementById('bod-countdown');

  const currentTime = new Date();

  // Set the target time for the next round hour
  let nextRoundHour = currentTime.getHours() + 1;
  nextRoundHour = nextRoundHour > 24 ? 0 : nextRoundHour; // Loop to 0 if it's 24

  // Calculate time until the next round hour
  const timeUntilNextRound = new Date();
  timeUntilNextRound.setHours(nextRoundHour, 0, 0, 0); // nextRoundHour We only need the hours and everything else needs to be set to 0
  const timeDifference = timeUntilNextRound - currentTime;


  if (currentTime.getMinutes() <= 10) {
    bodCountdown.innerText = 'Åben nu!';
  } else {
    const minutes = Math.floor((timeDifference % (time * 60)) / time);
    const seconds = Math.floor((timeDifference % time) / 1000);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    bodCountdown.innerText = `${formattedMinutes}:${formattedSeconds}`;
  }
}

function UpdateMC() {
  const mcCountdown = document.getElementById('mc-countdown');
  const currentTime = new Date();
  const endDate = new Date(buildBattleEndDate);

  const timeDifference = endDate - currentTime;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(timeDifference % (time * 60 * 24) / (time * 60));
  const minutes = Math.floor((timeDifference % (time * 60)) / time);
  const seconds = Math.floor((timeDifference % time) / 1000);

  const formattedDays = String(days).padStart(2, '0');
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  mcCountdown.innerText = `${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

Update();
UpdateBod();
UpdateMC();

setInterval(() => {
  Update();
  UpdateBod();
  UpdateMC();
}, 1000);

