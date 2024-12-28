const no = document.getElementById("noButton");
const yes = document.getElementById("yesButton");
const container = document.querySelector(".container");
const h2 = document.getElementById("quest");
const love = document.getElementById("love");
// Fungsi untuk mentranslasi objek ke posisi acak
function translasiObjek() {
  var gambar = document.getElementById("gambar");
  const windowWidth = no.clientWidth;
  const windowHeight = no.clientHeight;

  // Membatasi perpindahan objek agar tetap berada di dalam batas layar
  const newX = Math.max(0, Math.min(Math.random() * windowWidth, windowWidth));
  const newY = Math.max(
    0,
    Math.min(Math.random() * windowHeight, windowHeight)
  );

  no.style.transform = `translate(${newX}px, ${newY}px)`;
  gambar.src = "begging.png";
}

// Translasi no ke posisi acak setiap kali no diklik
no.addEventListener("click", translasiObjek);

function gantiGambar() {
  var gambar = document.getElementById("gambar");
  gambar.src = "good.png";
  setTimeout(function () {
    gambar.src = "rizz.png";
    no.style.display = "none";
    yes.style.display = "none";
    quest.textContent = "tomorrow at 12.00 P.M, I'll pick you up";
  }, 2000);

  setTimeout(function () {
    love.style.opacity = "1";
  }, 5000);
}
