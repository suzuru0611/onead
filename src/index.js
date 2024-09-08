const muteButton = document.getElementById("mute-button-sensor");
const video = document.getElementById("onead-video");
const cube = document.getElementById("cube-wrapper0");
const onead = document.getElementById("onead-layout0");
const gsplayer0 = document.getElementById("gsplayer0");
const scrollSpace = document.getElementById("swiper-extend-wrapper0");
const imgElement = document.getElementById("volume-img");
const bannerWrapper = document.getElementById("banner-wrapper1");
const iframe = document.getElementById("onead-banner0");
const wrapper = document.getElementById("banner-wrapper0");
const muteSvgData =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjYwIiBjeT0iNjAiIHI9IjYwIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjY0Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOTEuNjUzMyA1MC45MjE4QzkwLjM4NDYgNDkuNjUzMiA4OC4zMjc4IDQ5LjY1MzIgODcuMDU5MiA1MC45MjE4TDgxLjA0NjcgNTYuOTM0Mkw3NS4wMzQ2IDUwLjkyMjFDNzMuNzY2IDQ5LjY1MzUgNzEuNzA5MiA0OS42NTM1IDcwLjQ0MDUgNTAuOTIyMUM2OS4xNzE5IDUyLjE5MDggNjkuMTcxOSA1NC4yNDc2IDcwLjQ0MDUgNTUuNTE2Mkw3Ni40NTI2IDYxLjUyODNMNzAuNDQwMSA2Ny41NDA5QzY5LjE3MTQgNjguODA5NSA2OS4xNzE0IDcwLjg2NjQgNzAuNDQwMSA3Mi4xMzVDNzEuNzA4NyA3My40MDM3IDczLjc2NTYgNzMuNDAzNyA3NS4wMzQyIDcyLjEzNUw4MS4wNDY3IDY2LjEyMjVMODcuMDU5NiA3Mi4xMzUzQzg4LjMyODIgNzMuNDA0IDkwLjM4NTEgNzMuNDA0IDkxLjY1MzcgNzIuMTM1M0M5Mi45MjI0IDcwLjg2NjcgOTIuOTIyNCA2OC44MDk4IDkxLjY1MzcgNjcuNTQxMkw4NS42NDA5IDYxLjUyODNMOTEuNjUzMyA1NS41MTU5QzkyLjkyMTkgNTQuMjQ3MyA5Mi45MjE5IDUyLjE5MDUgOTEuNjUzMyA1MC45MjE4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zOS40OTA1IDQ4Ljc2MTdDMzguOTk5MSA0OS4xNDA0IDM4LjcxMTIgNDkuNzI1NiAzOC43MTEyIDUwLjM0NlY3MS4wMzA4QzM4LjcxMTIgNzEuNjUxMSAzOC45OTkxIDcyLjIzNjMgMzkuNDkwNSA3Mi42MTVMNTYuOTEyOSA4Ni4wNDAxQzU4LjIyNzkgODcuMDUzNCA2MC4xMzM3IDg2LjExNiA2MC4xMzM3IDg0LjQ1NTlWMzYuOTIwOEM2MC4xMzM3IDM1LjI2MDcgNTguMjI3OSAzNC4zMjMzIDU2LjkxMjkgMzUuMzM2NkwzOS40OTA1IDQ4Ljc2MTdaTTI0IDQ5LjM2MjFDMjIuODk1NCA0OS4zNjIxIDIyIDUwLjI1NzUgMjIgNTEuMzYyMVY3MC4wMTQ0QzIyIDcxLjExOSAyMi44OTU0IDcyLjAxNDQgMjQgNzIuMDE0NEgyOC41OTI3QzI5LjY5NzMgNzIuMDE0NCAzMC41OTI3IDcxLjExOSAzMC41OTI3IDcwLjAxNDRWNTEuMzYyMUMzMC41OTI3IDUwLjI1NzUgMjkuNjk3MyA0OS4zNjIxIDI4LjU5MjcgNDkuMzYyMUgyNFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="; // 靜音圖示
const unmuteSvgData =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjYwIiBjeT0iNjAiIHI9IjYwIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjY0Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzguNzExMiA1MC4zNDZDMzguNzExMiA0OS43MjU2IDM4Ljk5OTEgNDkuMTQwNCAzOS40OTA1IDQ4Ljc2MTdMNTYuOTEyOSAzNS4zMzY2QzU4LjIyNzkgMzQuMzIzMyA2MC4xMzM3IDM1LjI2MDcgNjAuMTMzNyAzNi45MjA5Vjg0LjQ1NTlDNjAuMTMzNyA4Ni4xMTYgNTguMjI3OSA4Ny4wNTM0IDU2LjkxMjkgODYuMDQwMUwzOS40OTA1IDcyLjYxNUMzOC45OTkxIDcyLjIzNjQgMzguNzExMiA3MS42NTExIDM4LjcxMTIgNzEuMDMwOFY1MC4zNDZaTTIyIDUxLjM2MjFDMjIgNTAuMjU3NSAyMi44OTU0IDQ5LjM2MjEgMjQgNDkuMzYyMUgyOC41OTI3QzI5LjY5NzMgNDkuMzYyMSAzMC41OTI3IDUwLjI1NzUgMzAuNTkyNyA1MS4zNjIxVjcwLjAxNDRDMzAuNTkyNyA3MS4xMTkgMjkuNjk3MyA3Mi4wMTQ0IDI4LjU5MjcgNzIuMDE0NEgyNEMyMi44OTU0IDcyLjAxNDQgMjIgNzEuMTE5IDIyIDcwLjAxNDRWNTEuMzYyMVpNNzIuMjU1NyA1My4zNTY3QzcxLjA4NDIgNTIuMTg1MSA2OS4xODQ3IDUyLjE4NTEgNjguMDEzMSA1My4zNTY3QzY2Ljg0MTUgNTQuNTI4MiA2Ni44NDE1IDU2LjQyNzcgNjguMDEzMSA1Ny41OTkzQzY5Ljk0NDEgNTkuNTMwMyA2OS45NDQxIDYyLjY2MDkgNjguMDEzMSA2NC41OTE5QzY2Ljg0MTUgNjUuNzYzNSA2Ni44NDE1IDY3LjY2MyA2OC4wMTMxIDY4LjgzNDVDNjkuMTg0NyA3MC4wMDYxIDcxLjA4NDIgNzAuMDA2MSA3Mi4yNTU3IDY4LjgzNDVDNzYuNTI5OCA2NC41NjA0IDc2LjUyOTggNTcuNjMwOCA3Mi4yNTU3IDUzLjM1NjdaTTc1Ljk1NzYgNDcuNzk1NUM3Ny4xMjkyIDQ2LjYyMzkgNzkuMDI4NyA0Ni42MjM5IDgwLjIwMDMgNDcuNzk1NUM4Ny41NzY5IDU1LjE3MjEgODcuNTc2OSA2Ny4xMzIgODAuMjAwMyA3NC41MDg2Qzc5LjAyODcgNzUuNjgwMiA3Ny4xMjkyIDc1LjY4MDIgNzUuOTU3NiA3NC41MDg2Qzc0Ljc4NiA3My4zMzcgNzQuNzg2IDcxLjQzNzUgNzUuOTU3NiA3MC4yNjZDODAuOTkxMSA2NS4yMzI1IDgwLjk5MTEgNTcuMDcxNiA3NS45NTc2IDUyLjAzODFDNzQuNzg2IDUwLjg2NjYgNzQuNzg2IDQ4Ljk2NzEgNzUuOTU3NiA0Ny43OTU1Wk04OC4xNDQ4IDQwLjY0NTRDODYuOTczMiAzOS40NzM5IDg1LjA3MzcgMzkuNDczOSA4My45MDIxIDQwLjY0NTRDODIuNzMwNiA0MS44MTcgODIuNzMwNiA0My43MTY1IDgzLjkwMjEgNDQuODg4MUM5Mi42NTg2IDUzLjY0NDYgOTIuNjU4NiA2Ny44NDE3IDgzLjkwMjEgNzYuNTk4MkM4Mi43MzA2IDc3Ljc2OTggODIuNzMwNiA3OS42NjkzIDgzLjkwMjEgODAuODQwOEM4NS4wNzM3IDgyLjAxMjQgODYuOTczMiA4Mi4wMTI0IDg4LjE0NDggODAuODQwOEM5OS4yNDQ0IDY5Ljc0MTIgOTkuMjQ0NCA1MS43NDUxIDg4LjE0NDggNDAuNjQ1NFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="; // 開啟音量圖示
const threshold = 60; // 滑動觸發所需距離
let startY = 0;
let hasLogged = false;
let isMuted = true;

// 監聽 timeupdate 事件
video.addEventListener("timeupdate", () => {
  if (video.duration > 0) {
    const currentTime = video.currentTime;
    const duration = video.duration;
    const percentage = (currentTime / duration) * 100;

    // 檢查是否達到 50% 的播放進度
    if (percentage >= 50 && !hasLogged) {
      console.log("video current 50% duration");
      hasLogged = true; // 確保只在達到 50% 時執行一次
    }
  }
});

// 靜音跟icon圖示切換
document
  .getElementById("mute-button-sensor")
  .addEventListener("click", function () {
    isMuted = !isMuted; // 切換靜音狀態
    console.log(isMuted);
    // 更新圖示和視頻靜音狀態
    if (isMuted) {
      imgElement.src = muteSvgData;
      video.muted = true;
    } else {
      imgElement.src = unmuteSvgData;
      video.muted = false;
    }
  });

// 禁止影片全螢幕播放
document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("onead-video");

  if (video) {
    video.addEventListener("click", function () {
      // Prevent fullscreen request
      video.requestFullscreen =
        video.requestFullscreen ||
        video.webkitRequestFullscreen ||
        video.mozRequestFullScreen ||
        video.msRequestFullscreen;

      if (video.requestFullscreen) {
        video.requestFullscreen = function () {
          console.log("Fullscreen request was blocked");
        };
      }
    });
  }
});

//廣告頁面跳轉
function handleClick() {
  window.location.href = "https://www.onead.com.tw/";
}
document
  .getElementById("video-click-area0")
  .addEventListener("click", handleClick);
document
  .getElementById("banner-click-area0")
  .addEventListener("click", handleClick);

// 關閉廣告
document.getElementById("close-button0").addEventListener("click", function () {
  document.getElementById("onead-layout0").style.display = "none";
});

// 當用戶滑動頁面時，處理滑動事件
function handleScroll(event) {
  // 獲取當前滑動位置的 Y 坐標
  const currentY =
    event.type === "touchmove" ? event.touches[0].clientY : event.clientY;

  // 獲取元素的可視範圍
  const layoutRect = onead.getBoundingClientRect();

  // 檢查滑動位置是否在指定元素的可視範圍內
  if (currentY >= layoutRect.top && currentY <= layoutRect.bottom) {
    // 計算滑動的距離
    const deltaY = startY - currentY;

    console.log("滑動距離大於60觸發", deltaY);

    // 判斷是否是向上滑動且距離大於預設閾值
    if (deltaY > threshold) {
      // 獲取 swiper 元素的可視範圍
      const swiper = document
        .getElementById("bottom-wrapper0")
        .getBoundingClientRect();

      // 檢查 swiper 元素是否在視窗內
      const inView = swiper.top < window.innerHeight;

      // 更新元素的顯示狀態和樣式
      imgElement.src = muteSvgData; // 設置圖片源
      video.muted = true; // 靜音視頻

      // 根據元素是否在視窗內來更新樣式
      bannerWrapper.style.transform = "translateY(0px)";
      scrollSpace.style.display = inView ? "none" : "block";
      onead.style.height = inView ? "100%" : "42.5vw";
      gsplayer0.style.display = inView ? "none" : "block";

      // 更新 cube 元素的顯示狀態和樣式
      cube.style.opacity = inView ? "1" : "0";
      cube.style.display = inView ? "block" : "none";
      cube.style.transform = inView ? "translateY(0)" : "translateY(1000px)";
      cube.style.background = inView
        ? "linear-gradient(rgb(197, 197, 197) 0%, rgb(62, 65, 75) 59.89%)"
        : "";
    }
  }
}

// 開始跟踪滑動起始位置
function startTracking(event) {
  startY =
    event.type === "touchstart" ? event.touches[0].clientY : event.clientY;
}

// 重置元素的顯示狀態和樣式
function resetElements() {
  scrollSpace.style.display = "block";
  bannerWrapper.style.transform = "translateY(1000px)";
  cube.style.cssText =
    "display:none; position: fixed; top: 0px; left: 0px; margin: auto !important; width: 100% !important; height: 100% !important; transform: translateY(1000px); opacity: 0; background: initial;";
  document.getElementById("onead-layout0").style.cssText =
    "position: fixed;bottom: 0px;width: 100% !important;height: 42.5vw !important;z-index: 2147483646;";
  document.getElementById("gsplayer0").style.display = "block";
}

// 添加觸摸事件和滑鼠事件的監聽器
window.addEventListener("touchstart", startTracking);
window.addEventListener("touchmove", handleScroll);
window.addEventListener("mousedown", startTracking);
window.addEventListener("mousemove", handleScroll);

// 為「返回」按鈕添加點擊事件處理器
document
  .getElementById("go-back-button0")
  .addEventListener("click", resetElements);

function resizeIframe() {
  const wrapperWidth = wrapper.clientWidth; // 獲取容器的寬度
  const wrapperHeight = wrapper.clientHeight; // 獲取容器的高度

  // 定義 iframe 內容的寬高比
  const iframeWidth = 180; // 原始寬度
  const iframeHeight = 320; // 原始高度
  const aspectRatio = iframeWidth / iframeHeight; // 寬高比

  // 根據父容器的尺寸計算縮放比例
  let scale;

  if (wrapperWidth / wrapperHeight > aspectRatio) {
    // 如果父容器的寬度相對於高度更寬，基於高度進行縮放
    scale = wrapperHeight / iframeHeight;
  } else {
    // 如果父容器的高度相對於寬度更高，基於寬度進行縮放
    scale = wrapperWidth / iframeWidth;
  }

  // 應用縮放變換
  iframe.style.transform = `scale(${scale})`;
  iframe.style.width = `${iframeWidth}px`; // 保持原始寬度
  iframe.style.height = `${iframeHeight}px`; // 保持原始高度
}

// 初始調整
resizeIframe();

document.addEventListener("DOMContentLoaded", function () {
  var iframe = document.getElementById("onead-banner0");
  var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

  // 創建一個新的 script 元素
  var newScript = document.createElement("script");
  newScript.src = "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"; // 替代的 CDN

  // 在 iframe 中添加新的 script
  iframeDoc.head.appendChild(newScript);
});

// 在窗口大小調整時進行調整
window.addEventListener("resize", resizeIframe);
var iframeAD = document.getElementById("banner-wrapper0");
iframeAD.addEventListener("load", function () {
  var iframeDoc = iframeAD.contentDocument || iframeAD.contentWindow.document;

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.addedNodes.length) {
        console.log("New nodes added to iframe");
      }
    });
  });

  observer.observe(iframeDoc.body, { childList: true, subtree: true });
});

document.addEventListener("touchstart", startTracking, { passive: true });
document.addEventListener("touchmove", handleScroll, { passive: true });
