const containerVideoEl = document.createElement("div");
containerVideoEl.classList.add("containerVideo");
document.body.appendChild(containerVideoEl);

const VideoEl = document.createElement("video");
VideoEl.setAttribute("src", "media/rabbit320.mp4");

const containerEl = document.querySelector(".containerVideo");
containerEl.appendChild(VideoEl);
const containerControl = document.createElement("div");
containerControl.classList.add("controlVideo");
containerEl.appendChild(containerControl);

const playPauseButtonEL = document.createElement("div");
playPauseButtonEL.classList.add("controlVideo__playPauseDiv--play");

playPauseButtonEL.addEventListener("click", togglePlayPause);

function togglePlayPause() {
  if (VideoEl.paused) {
    VideoEl.play();
    playPauseButtonEL.innerHTML = "Pause";
    playPauseButtonEL.classList.remove("controlVideo__playPauseDiv--play");
    playPauseButtonEL.classList.add("controlVideo__playPauseDiv--pause");
  } else {
    VideoEl.pause();
    playPauseButtonEL.innerHTML = "Play";
    playPauseButtonEL.classList.remove("controlVideo__playPauseDiv--pause");
    playPauseButtonEL.classList.add("controlVideo__playPauseDiv--play");
  }
}

const stopButtonEL = document.createElement("div");
stopButtonEL.classList.add("controlVideo__stopButton");
stopButtonEL.innerHTML = "";
stopButtonEL.addEventListener("click", stopVideo);

function stopVideo() {
  VideoEl.pause();
  VideoEl.currentTime = 0;
}

const rangeEl = document.createElement("input");
rangeEl.classList.add("controlVideo__range");
rangeEl.setAttribute("type", "range");
rangeEl.setAttribute("min", "0");
rangeEl.setAttribute("max", "100");
rangeEl.setAttribute("value", "0");
rangeEl.addEventListener("change", function (e) {
  console.log(e.target.value);
  VideoEl.currentTime = (e.target.value / 100) * VideoEl.duration;
});
VideoEl.addEventListener("timeupdate", (e) => {
  rangeEl.setAttribute(
    "value",
    Math.round((VideoEl.currentTime / VideoEl.duration) * 100)
  );
});

const VolumeButtonEL = document.createElement("div");
VolumeButtonEL.classList.add("controlVideo__volumeButton");

let isVolumeVisible = false;

VolumeButtonEL.addEventListener("click", toggleVolume);

function toggleVolume() {
  const volumeRange = document.querySelector(".containerVideo__volume");
  if (!isVolumeVisible) {
    volumeRange.style.display = "block";
    isVolumeVisible = true;
  } else {
    volumeRange.style.display = "none";
    isVolumeVisible = false;
  }
}

const volumeEl = document.createElement("input");
volumeEl.classList.add("containerVideo__volume");
volumeEl.setAttribute("type", "range");
volumeEl.setAttribute("min", "0");
volumeEl.setAttribute("max", "100");
volumeEl.setAttribute("value", "0");
volumeEl.style.display = "none";

VideoEl.addEventListener("loadeddata", (event) => {
  volumeEl.setAttribute("value", VideoEl.volume * 100);
});
volumeEl.addEventListener("change", function (e) {
  VideoEl.volume = e.target.value / 100;
  console.log(VideoEl.volume);
});
volumeEl.addEventListener("change", function (e) {
  VideoEl.volume = e.target.value / 100;

  if (e.target.value === "0") {
    VolumeButtonEL.classList.add("controlVideo__volumeButton--off");
  } else {
    VolumeButtonEL.classList.remove("controlVideo__volumeButton--off");
  }
});

containerControl.appendChild(playPauseButtonEL);
containerControl.appendChild(stopButtonEL);
containerControl.appendChild(rangeEl);
containerControl.appendChild(volumeEl);
containerControl.appendChild(VolumeButtonEL);
