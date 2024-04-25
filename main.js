// KF Panda Search

// HTML Variables
var characterName = document.getElementById("char-name");
var characterQuote = document.getElementById("char-quote");
var characterImage = document.getElementById("char-img");
var bodyTheme = document.getElementById("theme-in");
var themeBtn = document.getElementById("theme-btn");
var divTheme = document.getElementById("div");

// Character Button Event Listener
document.getElementById("char-btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value.toLowerCase();

  // If Statement - Test The Input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    characterName.innerHTML = `Po`;
    characterQuote.innerHTML = `Buddy, I am the Dragon Warrior!`;
    characterImage.src = `img/po.png`;
  } else if (name === "tigress" || name === "master tigress") {
    characterName.innerHTML = `Tigress`;
    characterQuote.innerHTML = `That was hardcore!`;
    characterImage.src = `img/tigress.png`;
  } else if (name === "shifu" || name === "master shifu") {
    characterName.innerHTML = "Shifu";
    characterQuote.innerHTML = `I'm not trying to turn you into me. I'm trying to turn you into you.`;
    characterImage.src = `img/shifu.png`;
  } else if (name === "mantis") {
    characterName.innerHTML = `Mantis`;
    characterQuote.innerHTML = `Fear the Bug!`;
    characterImage.src = `img/mantis.png`;
  } else if (name === "monkey") {
    characterName.innerHTML = `Monkey`;
    characterQuote.innerHTML = `We should hang out!`;
    characterImage.src = `img/monkey.png`;
  } else if (name === "viper") {
    characterName.innerHTML = `Viper`;
    characterQuote.innerHTML = "I don't need to bite to fight!";
    characterImage.src = `img/viper.png`;
  } else if (name === "crane") {
    characterName.innerHTML = `Crane`;
    characterQuote.innerHTML = `Wings of Justice!`;
    characterImage.src = `img/crane.png`;
  } else if (name === "boss wolf") {
    characterName.innerHTML = `Boss Wolf`;
    characterQuote.innerHTML = `Chew ont that, tubby!`;
    characterImage.src = `img/boss-wolf.png`;
  } else if (name === "croc") {
    characterName.innerHTML = `Croc`;
    characterQuote.innerHTML = `I get the top bunk`;
    characterImage.src = `img/croc.png`;
  } else if (name === "kai") {
    characterName.innerHTML = `Kai`;
    characterQuote.innerHTML = `What do you say, Oogway? Do you forgive him?`;
    characterImage.src = `img/kai.png`;
  } else if (name === "mr. ping" || name === "mr ping") {
    characterName.innerHTML = `Mr. Ping`;
    characterQuote.innerHTML = `In honor of my son, free tofu dessert for everybody!`;
    characterImage.src = `img/mr-ping.png`;
  } else if (name === "oogway" || name === "master oogway") {
    characterName.innerHTML = `Oogway`;
    characterQuote.innerHTML = `Mmm, Monkey.`;
    characterImage.src = `img/oogway.png`;
  } else if (name === "shen" || name === "lord shen") {
    characterName.innerHTML = `Shen`;
    characterQuote.innerHTML = `Search the farthest village. Find more metal! China will be mine...`;
    characterImage.src = `img/shen.png`;
  } else if (name === "soothsayer") {
    characterName.innerHTML = `Soothsayer`;
    characterQuote.innerHTML = `Your story may not have such a happy ending, but that doesn't make you who you are. 
    It is the rest of your story, who you choose to be.`;
    characterImage.src = `img/soothsayer.png`;
  } else if (name === "storming ox") {
    characterName.innerHTML = `Storming Ox`;
    characterQuote.innerHTML = `You insolent fool!`;
    characterImage.src = `img/storming-ox.png`;
  } else if (name === "tai lung") {
    characterName.innerHTML = `Tai Lung`;
    characterQuote.innerHTML = `Not your fault?! Who filled my head with dreams?! who drove me to train until my bones cracked?! 
    Who dneied me my DESTINY?!?`;
    characterImage.src = `img/tai-lung.png`;
  } else {
    characterName.innerHTML = `?????`;
    characterQuote.innerHTML = `---------`;
    characterImage.src = `img/question-mark.png`;
  }
}

themeBtn.addEventListener("click", themeColor);

function themeColor() {
  var background = bodyTheme.value.toLowerCase();

  if (background === "random") {
    var red = Math.floor(Math.random() * 255 + 1);
    var green = Math.floor(Math.random() * 255 + 1);
    var blue = Math.floor(Math.random() * 255 + 1);

    divTheme.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 0.7)`;
    document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 0.7)`;
  } else if (background === "black") {
    divTheme.style.backgroundColor = `rgba(0, 0, 0, 0.7)`;
    divTheme.style.color = `white`;
    document.body.style.backgroundColor = `rgb(0, 0, 0, 0.7)`;
    document.body.style.color = `white`;
  } else if (background === "white") {
    divTheme.style.backgroundColor = `rgba(255, 255, 255, 0.7)`;
    divTheme.style.color = `black`;
    document.body.style.backgroundColor = `rgba(255, 255, 255, 0.7)`;
    document.body.style.color = `black`;
  } else {
    divTheme.style.backgroundColor = `rgba(72, 116, 63, 0.7)`;
    divTheme.style.color = `white`;
    document.body.style.backgroundColor = `rgba(255, 255, 255, 0.7)`;
    document.body.style.color = `black`;
  }
}
