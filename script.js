const images = [
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1025/600/400",
  "https://picsum.photos/id/1043/600/400"
];

let currentIndex = 0;
const carouselImg = document.getElementById("carousel-img");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function showImage(index) {
  carouselImg.src = images[index];
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

const jokeBtn = document.getElementById("joke-btn");
const jokeOutput = document.getElementById("joke-output");

jokeBtn.addEventListener("click", () => {
  jokeOutput.textContent = "Loading...";

  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      jokeOutput.textContent = `${data.setup} - ${data.punchline}`;
    })
    .catch(error => {
      jokeOutput.textContent = "Failed to load joke. Try again.";
      console.error("Error fetching joke:", error);
    });
});
