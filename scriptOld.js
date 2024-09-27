document.addEventListener('DOMContentLoaded', function () {
    // Update this variable with the path to your images folder
    const imagesFolder = '../Billeder';

    // Set the background image to "baggrund.png"
    document.querySelector('.background-image').style.backgroundImage = `url('${imagesFolder}baggrund.png')`;

    //Tunerings tidspunterne
    const tunering1Tid = new Date('2024-03-19T18:15:00').getTime();
    const tunering2Tid = new Date('2024-03-19T19:00:00').getTime();
    const tunering3Tid = new Date('2024-03-19T20:00:00').getTime();
    const tunering4Tid = new Date('2024-03-19T22:00:00').getTime();
    const tunering5Tid = new Date('2024-03-20T11:00:00').getTime();
    const tunering6Tid = new Date('2024-03-20T12:30:00').getTime();
    const tunering7Tid = new Date('2024-03-20T13:30:00').getTime();
    const tunering8Tid = new Date('2024-03-20T14:45:00').getTime();
    const tunering9Tid = new Date('2024-03-20T17:15:00').getTime();
    const tunering10Tid = new Date('2024-03-20T19:00:00').getTime();
    const tunering11Tid = new Date('2024-03-20T19:00:00').getTime();
    const tunering12Tid = new Date('2024-03-20T20:35:00').getTime();
    const tunering13Tid = new Date('2024-03-20T20:35:00').getTime();

    const tuneringLast3Tid = new Date('2024-03-20T22:00:00').getTime();
    const tuneringLast2Tid = new Date('2024-03-21T00:00:00').getTime();
    const tuneringLastTid = new Date('2024-03-21T11:00:00').getTime();
    const tuneringMCBBTid = new Date('2024-03-21T11:00:00').getTime();


    const startMusic = document.getElementById('startMusic');

    const TuneringTider = Date;
    const tuneringTider = [
        new TuneringTider('2024-02-22T18:37:30').getTime(),
        new TuneringTider('2024-02-22T18:38:00').getTime(),
        new TuneringTider('2024-02-22T18:38:30').getTime(),
        new TuneringTider('2024-02-22T18:43:30').getTime(),
        new TuneringTider('2024-02-22T18:44:00').getTime(),
        new TuneringTider('2024-02-22T18:44:30').getTime(),
    ];

    // lave 3 ekstra og i bunden og kald dem " "
    const GameNames = {
        1: "GameName1",
        2: "GameName2",
        3: "GameName3",
        4: "GameName4",
        5: "GameName5",
        6: "GameName6",
        7: " ",
        8: " ",
        9: " ",
        // Add more mappings as needed
    };

    let tuneringsCount = 0;
    let lastCountedIndex = -1;


    // Function to check and update tuneringsCount
    function updateTuneringsCount() {
        const currentTime = new Date().getTime();
        // Loop through the predefined times starting from the last counted index + 1
        for (let i = lastCountedIndex + 1; i < tuneringTider.length; i++) {
            if (currentTime >= tuneringTider[i] + 9500) {
                tuneringsCount++;
                lastCountedIndex = i; // Update the last counted index
            } else {
                // Since the times are in ascending order, once we find a time that hasn't passed, we can break out of the loop
                break;
            }
        }
    }

    // Call the function periodically, e.g., every minute
    setInterval(updateTuneringsCount, 600); // 60000 milliseconds = 1 minute




    //Tuneringerne
    const game1 = "Sten, Saks Papir";
    const game2 = "TFT";
    const game3 = "League of Legends 1v1";
    const game4 = "CS2 5v5";
    const game5 = "UNO";
    const game6 = "Rocket League 2v2";
    const game7 = "Lethal Company";
    const game8 = "League of Legends 5v5";
    const game9 = "SkyWars";
    const game10 = "Tetris";
    const game11 = "Skak";
    const game12 = "Valorant 2v2";
    const game13 = "Magic The Gathering [Ikke tunering]";
    const gameLast3 = "GeoGuessr";
    const gameLast2 = "Mario Kart [Ikke tunering]";
    const gameLast = "CS2 Wing";
    const gameblank = " ";

    // Function to update images based on the current time
    function updateImages() {
        const currentDate = new Date();
        const currentHour = currentDate.getHours();
        const currentMinute = currentDate.getMinutes();
        const currentDay = currentDate.getDate();


        const currentTime = new Date().getTime();




        // Check if the current time is

        // Update the src attribute for the side images


        document.querySelector('.image-container:nth-child(1) .side-image').src = `${imagesFolder}Tuneringsbillede${[tuneringsCount + 1]}.png`;
        document.querySelector('.image-container:nth-child(2) .side-image').src = `${imagesFolder}Tuneringsbillede${[tuneringsCount + 2]}.png`;
        document.querySelector('.image-container:nth-child(3) .side-image').src = `${imagesFolder}Tuneringsbillede${[tuneringsCount + 3]}.png`;

        document.getElementById('gameText1').innerHTML = GameNames[tuneringsCount + 1];
        document.getElementById('gameText2').innerHTML = GameNames[tuneringsCount + 2];
        document.getElementById('gameText3').innerHTML = GameNames[tuneringsCount + 3];

        const timeDifference1 = tuneringTider[tuneringsCount] - currentTime;
        const timeDifference2 = tuneringTider[tuneringsCount + 1] - currentTime;
        const timeDifference3 = tuneringTider[tuneringsCount + 2] - currentTime;

        const hours1 = Math.floor((timeDifference1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes1 = Math.floor((timeDifference1 % (1000 * 60 * 60)) / (1000 * 60));
        const seconds1 = Math.floor((timeDifference1 % (1000 * 60)) / 1000);
        const hours2 = Math.floor((timeDifference2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes2 = Math.floor((timeDifference2 % (1000 * 60 * 60)) / (1000 * 60));
        const seconds2 = Math.floor((timeDifference2 % (1000 * 60)) / 1000);
        const hours3 = Math.floor((timeDifference3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes3 = Math.floor((timeDifference3 % (1000 * 60 * 60)) / (1000 * 60));
        const seconds3 = Math.floor((timeDifference3 % (1000 * 60)) / 1000);
        const formattedhours1 = String(hours1).padStart(2, '0');
        const formattedMinutes1 = String(minutes1).padStart(2, '0');
        const formattedSeconds1 = String(seconds1).padStart(2, '0');
        const formattedhours2 = String(hours2).padStart(2, '0');
        const formattedMinutes2 = String(minutes2).padStart(2, '0');
        const formattedSeconds2 = String(seconds2).padStart(2, '0');
        const formattedhours3 = String(hours3).padStart(2, '0');
        const formattedMinutes3 = String(minutes3).padStart(2, '0');
        const formattedSeconds3 = String(seconds3).padStart(2, '0');

        if (tuneringTider.length <= tuneringsCount + 2) { document.getElementById('countdown3').innerHTML = ' '; }
        else { document.getElementById('countdown3').innerHTML = `${formattedhours3}:${formattedMinutes3}:${formattedSeconds3}`; }

        if (tuneringTider.length <= tuneringsCount + 1) { document.getElementById('countdown2').innerHTML = ' '; }
        else { document.getElementById('countdown2').innerHTML = `${formattedhours2}:${formattedMinutes2}:${formattedSeconds2}`; }

        if (tuneringTider.length <= tuneringsCount) { document.getElementById('countdown1').innerHTML = ' '; }
        else {
            if (currentTime >= tuneringTider[tuneringsCount]) { document.getElementById('countdown1').innerHTML = 'Starter NU!'; }
            else { document.getElementById('countdown1').innerHTML = `${formattedhours1}:${formattedMinutes1}:${formattedSeconds1}`; }
        }

    }




    // Set interval to check and update images every minute
    setInterval(updateImages, 1000);

    // Initial update on page load
    updateImages();


    function updateCountdown() {
        // Get the current time
        const currentTime = new Date();
        const currentHour = currentTime.getHours();
        const currentMinute = currentTime.getMinutes();

        // Set the target time for the next round hour
        let nextRoundHour = currentHour + 1;
        nextRoundHour = nextRoundHour > 24 ? 0 : nextRoundHour; // Loop to 0 if it's 24

        // Calculate time until the next round hour
        const timeUntilNextRound = new Date();
        timeUntilNextRound.setHours(nextRoundHour, 0, 0, 0);
        const timeDifference = timeUntilNextRound - currentTime;



        // Display the appropriate text
        const countdownElement = document.getElementById('bod-countdown');
        if (currentMinute <= 10) {
            countdownElement.innerHTML = 'Boden er åben!';
        } else {
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            const formattedMinutes = String(minutes).padStart(2, '0');
            const formattedSeconds = String(seconds).padStart(2, '0');
            countdownElement.innerHTML = `Boden åbner om\n${formattedMinutes}:${formattedSeconds}`;

        }

        const timeDifference4 = tuneringMCBBTid - currentTime;

        const days4 = Math.floor(timeDifference4 / (1000 * 60 * 60 * 24));
        const hours4 = Math.floor(timeDifference4 / (1000 * 60 * 60));
        const minutes4 = Math.floor((timeDifference4 % (1000 * 60 * 60)) / (1000 * 60));
        const seconds4 = Math.floor((timeDifference4 % (1000 * 60)) / 1000);
        const formattedMinutes4 = String(minutes4).padStart(2, '0');
        const formattedSeconds4 = String(seconds4).padStart(2, '0');
        const formattedhours4 = String(hours4).padStart(2, '0');

        if (currentTime >= tuneringMCBBTid) { document.getElementById('mc-countdown').innerHTML = 'Slut!'; }
        else { document.getElementById('mc-countdown').innerHTML = `${formattedhours4}:${formattedMinutes4}:${formattedSeconds4}`; }

    }




    // Update every second
    setInterval(updateCountdown, 1000);

    // Initial update
    updateCountdown();




});
