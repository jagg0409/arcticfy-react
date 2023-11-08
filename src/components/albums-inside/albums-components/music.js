

const music = () =>{
  
  const btnPlay = document.getElementById("#btn-play");
  const btnPlayIcon = document.getElementById("#btn-play-icon");
  const btnRepeat = document.getElementById("#btn-repeat");
  const btnPrev = document.getElementById("#btn-prev");
  const btnNext = document.getElementById("#btn-next");
  const btnVolume = document.getElementById("#btn-volume");
  const btnVolumeIcon = document.getElementById("#btn-volume i");
  const playerVolume = document.getElementById("#player-volume");
  const songName = document.getElementById("#song-name");
  const songAuthor = document.getElementById("#song-author");
  const playerCurrentTime = document.getElementById("#player-current-time");
  const playerDuration = document.getElementById("#player-duration");
  const playerProgress = document.getElementById("#player-progress");
  const audioPlayer = document.getElementById("#audio-player");
  console.log({btnPlay})
  
  let currentSong = 0;
  let repeatSong = false;
  
  const songs = [
    {
      name: "The car -",
      author: "Arctic Monkeys",
      path: "../audio/Arctic Monkeys   Arabella (Official Audio.mp3",
    },
    {
      name: "There'd Better Be A Mirrorball ",
      author: "Arctic Monkeys",
      path: "../audio/bodypaint.mp3",
    },
    {
      name: "Sexy Fashion Beats",
      author: "Arctic Monkeys",
      path: "./assets/songs/Coma Media - Sexy Fashion Beats.mp3",
    },
    {
      name: "Best Time",
      author: "FASSounds",
      path: "./assets/songs/FASSounds - Best Time.mp3",
    },
    {
      name: "Guitar Electro Sport",
      author: "Gvidon",
      path: "./assets/songs/Gvidon - Guitar Electro Sport Trailer.mp3",
    },
  ];
  
  
  btnPlay.addEventListener("click", () => togglePlaySong());
  btnPrev.addEventListener("click", () => changeSong(false));
  btnNext.addEventListener("click", () => changeSong());
  btnPrev.addEventListener("click", () => changeSong(false));

const togglePlaySong = () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    btnPlayIcon.classList.replace("bi-play-fill", "bi-pause-fill");
  } else {
    audioPlayer.pause();
    btnPlayIcon.classList.replace("bi-pause-fill", "bi-play-fill");
  }
};

const changeSong = (next = true) => {
  if (next && currentSong < songs.length - 1) {
    currentSong++;
  } else if (!next && currentSong > 0) {
    currentSong--;
  } else {
    return;
  }
  
  updatePlayer();
  togglePlaySong();
};

const updatePlayer = () => {
  const song = songs[currentSong];
  
  songName.innerHTML = song.name;
  songAuthor.innerHTML = song.author;
  audioPlayer.src = song.path;
  playerProgress.value = audioPlayer.currentTime;
};

const toggleRepeatSong = () => {
  repeatSong = !repeatSong;
  btnRepeat.classList.toggle("btn-activated");
};

const timeUpdate = () => {
  const { currentTime, duration } = audioPlayer;
  
  if (isNaN(duration)) return;
  
  playerDuration.innerHTML = formatSecondsToMinutes(duration);
  playerCurrentTime.innerHTML = formatSecondsToMinutes(currentTime);
  playerProgress.max = duration;
  playerProgress.value = currentTime;
};

const changeVolume = () => {
  const { value } = playerVolume;
  
  audioPlayer.volume = value;
  
  if (value == 0) {
    btnVolumeIcon.classList.replace("bi-volume-up-fill", "bi-volume-mute-fill");
  } else {
    btnVolumeIcon.classList.replace("bi-volume-mute-fill", "bi-volume-up-fill");
  }
};

const changeTime = () => {
  audioPlayer.currentTime = playerProgress.value;
};

const formatSecondsToMinutes = (seconds) => {
  return new Date(seconds * 1000).toISOString().slice(14, 19);
};

const ended = () => {
  repeatSong ? togglePlaySong() : changeSong(true);
};

window.onload = () => {
  updatePlayer();
};

}

export default music