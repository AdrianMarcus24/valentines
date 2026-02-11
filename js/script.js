const photos = [
  "assets/photo1.jpg",
  "assets/photo2.jpg",
  "assets/photo3.jpg",
  "assets/photo4.jpg",
  "assets/photo5.jpg",
  "assets/photo6.jpg",
  "assets/photo7.jpg",
];

let index = 0;
let musicStarted = false;

function showNext() {
  const img = document.getElementById("photo");
  const music = document.getElementById("music");

  // Start music on first click (browser-friendly)
  if (!musicStarted) {
    music.play();
    musicStarted = true;
  }

  img.src = photos[index];
  img.style.display = "block";

  index++;
  if (index >= photos.length) {
    index = 0;
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 2) + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);
