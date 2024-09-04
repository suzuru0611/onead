// 音量键功能
const volumeButton = document.querySelector(".volume-button");
volumeButton.addEventListener("click", () => {
  const audio = new Audio("data:audio/mp3;base64,[你的音频Base64编码]");
  audio.play();
});

// 图片点击跳转
const image = document.querySelector(".image-container img");
image.addEventListener("click", () => {
  window.location.href = "https://www.onead.com.tw/";
});

// 处理视频
const video = document.getElementById("video");
video.addEventListener("canplay", () => {
  video.play();
});

video.addEventListener("timeupdate", () => {
  if (video.currentTime >= video.duration / 2) {
    console.log("video current 50% duration");
    video.removeEventListener("timeupdate", this);
  }
});
