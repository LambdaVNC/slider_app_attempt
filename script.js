var models = [
  {
    name: "Dodge Charger",
    image: "image.jpg",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.caranddriver.com%2Fdodge%2Fcharger&psig=AOvVaw3Hk1Mu9NSocNm1NgsQJ4bG&ust=1665227928333000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLC6vtD_zfoCFQAAAAAdAAAAABAE",
  },
  {
    name: "BMW i5",
    image: "bmw.jpg",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.arenaev.com%2F2023_bmw_i5_spotted_testing_at_nurburgring-news-400.php&psig=AOvVaw1Bj3vE3aIEF4nbkVPbxerI&ust=1665227982096000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMCxjer_zfoCFQAAAAAdAAAAABAE",
  },
  {
    name: "Ashyrat pack POSSAT",
    image: "passat.jpg",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ssmotors.com.tr%2Faracdetay.aspx%3Fid%3D17059&psig=AOvVaw0O0JF0Xab2wdWjXL2iCCD7&ust=1665228119658000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLD95KuAzvoCFQAAAAAdAAAAABAI",
  },
  {
    name: "Peugeot 508",
    image: "508.jpg",
    link: "https://www.google.com/url?sa=i&url=http%3A%2F%2Fsifiraracfiyatlari.com%2F2022-model-peugeot-508-fiyatlari-ve-teknolojik-ozellikleri%2F&psig=AOvVaw0XxsPjoXOGkI9SFmicCnMh&ust=1665228201508000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOjc1dKAzvoCFQAAAAAdAAAAABAE",
  },
];

var index = 1;
const slaytCount = models.length;

showSlide(index);

function showSlide(i) {
  index = i;

  if (i < 0) {
    index = slaytCount - 1;
  }

  if (i >= slaytCount) {
    index = 0;
  }

  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);

  document.querySelector(".card-title").textContent = models[index].name;

  document.querySelector(".href").setAttribute("href", models[index].link);
}

document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function () {
    index--;
    console.log(index);
    showSlide(index);
  });

document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function () {
    index++;
    console.log(index);
    showSlide(index);
  });

myInterval = setInterval(function () {
  document.querySelector(".fa-arrow-circle-right").click();
}, 2000);

function calm(){
  clearInterval(myInterval);
}

function go(){
  setInterval(function () {
    document.querySelector(".fa-arrow-circle-right").click();
  }, 2000);
}
