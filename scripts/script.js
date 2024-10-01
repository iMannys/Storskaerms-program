import { buildBattleEndDate, tournaments, tournamentStartDelayMinutes } from "./config.js";

const time = 60000; // Variable of 60 * 1000

// Finds the current upcoming tournaments to display on the site
// maxResults parameter is the amount of results returned 
function FindCurrentTournaments(maxResults) {
  const currentDate = new Date(); // Get the current date and time

  return tournaments // The imported tournaments object
    .filter(tournament => { // Filter through every tournament
      const tournamentDate = new Date(tournament.date);
      const tournamentEndDate = new Date(tournamentDate.getTime() + (tournamentStartDelayMinutes * time)); // Add delay to tournament date to display starting for the delay.
      return tournamentEndDate > currentDate && !isNaN(tournamentDate); // Filter out tournaments that are already done
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date))  // Sort by date
    .slice(0, maxResults);  // Get the first maxResults number of upcoming tournaments out all the active/upcoming tournaments 
}

// Updates and displays the 3 tournaments with timers
function UpdateTournamentCountdowns() {
  // Containers for each of the 3 tournaments with image, text and countdown elements
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

  // Returns an array with the upcoming tournaments that is based on how many containers there are
  const currentTournaments = FindCurrentTournaments(containers.length);

  const currentTime = new Date().getTime(); // Get the current time

  containers.forEach((container, i) => { // Run through every display element
    const imageContainer = document.getElementById(container.imageContainerId);
    const textContainer = document.getElementById(container.textContainerId);
    const countdownContainer = document.getElementById(container.countdownContainerId);

    const tournament = currentTournaments[i]; // Get the current tournament of the loop

    // If you cant find a tournament remove the display, so there isnt unnecessary clutter
    // An example usecase for this is when there are only 1-2 remaining tournaments
    if (!tournament) {
      countdownContainer.innerHTML = '';
      textContainer.innerHTML = '';
      imageContainer.style.display = "none"; // This removes the no image found icon
      return;
    }

    const tournamentTime = new Date(tournament.date).getTime(); // Tournament time

    // If the current time is past the tournament time it will display the starting message
    // This is possible because the tournament will stay on the list for the starting delay that is set in the config file
    if (currentTime >= tournamentTime) { // current time is past the tournament time
      countdownContainer.innerHTML = 'Starter NU!';
    } else {
      imageContainer.src = tournament.imagePath; // Set the image to the tournament image
      textContainer.innerText = tournament.name; // Set the name text to the tournament name


      const timeDifference = Math.abs(tournamentTime - currentTime); // Get the absolute value of the difference in time 

      const hours = Math.floor(timeDifference % (time * 60 * 24) / (time * 60)); // Calculate the hours
      const minutes = Math.floor((timeDifference % (time * 60)) / time); // Calculate the minutes
      const seconds = Math.floor((timeDifference % time) / 1000); // Calculate the seconds

      // Format the hours, minutes and seconds into a string with padStart.
      // If the hours is 2 it will become 02 
      const formattedHours = String(hours).padStart(2, '0');
      const formattedMinutes = String(minutes).padStart(2, '0');
      const formattedSeconds = String(seconds).padStart(2, '0');

      countdownContainer.innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`; // Format everything into a combined string and set it as the countdown text
    }
  });
}

// Update the the timer and display when the booth has opened
function UpdateBoothCountdown() {
  const bodCountdown = document.getElementById('bod-countdown');

  const currentDate = new Date(); // Get the current time

  // Set the target time for the next round hour
  let nextRoundHour = currentDate.getHours() + 1;
  nextRoundHour = nextRoundHour > 24 ? 0 : nextRoundHour; // Loop to 0 if it's 24

  // Calculate time until the next round hour
  const dateUntilNextRound = new Date();
  dateUntilNextRound.setHours(nextRoundHour, 0, 0, 0); // We need to set the date to a round hour, so everything else needs to be set to 0
  const timeDifference = dateUntilNextRound - currentDate; // Get the time difference

  // The booth opens the first 10 minutes of every hour. So e.g if the time is 17:00 the booth will be open to 17:10
  if (currentDate.getMinutes() <= 10) {
    bodCountdown.innerText = 'Åben nu!'; // Display the text instead of countdown
  } else {
    const minutes = Math.floor((timeDifference % (time * 60)) / time); // Get the time difference in minutes
    const seconds = Math.floor((timeDifference % time) / 1000); // Get the time difference in seconds

    // Format the minutes and seconds with padStart
    // If minutes is 2 the string will be 02
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    bodCountdown.innerText = `${formattedMinutes}:${formattedSeconds}`; // Format the minutes and seconds into a string and display it
  }
}

// Updates the Minecraft timer 
function UpdateMCCountdown() {
  const mcCountdown = document.getElementById('mc-countdown'); // Get the countdown element
  const currentTime = new Date(); // Get the current time
  const endDate = new Date(buildBattleEndDate); // Get the build battle end date from the config file 

  const timeDifference = endDate - currentTime; // Find the difference in time between the end date and the current time

  // Calculate the days, hours, minutes and seconds with the time difference
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(timeDifference % (time * 60 * 24) / (time * 60));
  const minutes = Math.floor((timeDifference % (time * 60)) / time);
  const seconds = Math.floor((timeDifference % time) / 1000);

  // Format the days, hours, minutes and seconds with padStart
  // If the days is 2 the formatted string will be 02
  const formattedDays = String(days).padStart(2, '0');
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  mcCountdown.innerText = `${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`; // Format everything into one string and display it
}

// Initialize every function when the website is first opened
UpdateTournamentCountdowns();
UpdateBoothCountdown();
UpdateMCCountdown();

// Run an interval every second that runs all the functions
setInterval(() => {
  UpdateTournamentCountdowns();
  UpdateBoothCountdown();
  UpdateMCCountdown();
}, 1000);

