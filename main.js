/* ------------ GLOBAL VARIABLES ------------  */
var container1="";
var container2="";
var url1;
var url2;
var count = 0;
var score = 0;
var multiplier = 1;
var time = 0;
var toggleTimer = 0;
var matches = 0;
var streak = 0;
var unFlipDelay = 300;
var displayedTimeBonus = 10;

/* ------------ CACHE IMAGES ------------  */ 
var jsonLength = 0;
/* get JSON length */
for (var picLocation in pictures) {
    if (pictures.hasOwnProperty(picLocation)) {
        jsonLength++;
    }
}

var imageCache = [];

for (var x = 0; x<jsonLength; x++) {
  imageCache[x] = new Image();
  imageCache[x].src = pictures[x].picLocation;
}


/* ------------ RESET IMAGES (New Game) ------------  */         
function newGame(x) {
  matches = 0;
  score = 0;
  streak = 0;
  multiplier = 1;
  toggleTimer = 0;
  count = 0;
  document.getElementById("score").innerHTML=score;
  time = 0;
  var revert = document.getElementsByClassName("f1_container fliped");
   var revertLength = revert.length;
   for (i = 0; i < revertLength; i++) {

    revert[0].className = "f1_container";
   }
  setTimeout(delay, x);
  function delay(){
  var randomArr = [], trackingArr = [],
  targetCount = 20, currentCount = 0,
  min = 1, max = 112,
  rnd;

  while (currentCount < targetCount) {
    rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!trackingArr[rnd]) {
      trackingArr[rnd] = rnd;
      randomArr[currentCount] = rnd;
      randomArr[currentCount + 1] = rnd;
      currentCount += 2;
    } 
  }
  var i = randomArr.length;
  while (--i) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = randomArr[i];
    randomArr[i] = randomArr[j];
    randomArr[j] = temp;}
for (i = 0; i < 20; i++) {
    document.getElementById("changer".concat(i)).src = pictures[randomArr[i]].picLocation;
   }
   }
 }



/* ------------ LOGIC ------------  */
function logic(card){
count++  
if (count == 1) {
  url1 = card.getElementsByTagName("img")[1].getAttribute("src");
  container1 = card.getAttribute("id");
}
if (count == 2) {
  url2 = card.getElementsByTagName("img")[1].getAttribute("src");
  container2 = card.getAttribute("id");
  if (url1 == url2) {
    score = score + (1 * multiplier);
    streak ++
    if (streak > 1){
      multiplier += multiplier;
      document.getElementById("streak").innerHTML=streak;
    }
    matches++
    card1 = 0;
    card2 = 0;
    count = 0;
    document.getElementById("score").innerHTML=score;
    // End of game scoring "matches == 10"
    if (matches == 10) {
      var defaultScore = score;
      var bonus = 1;
      if (time <= 30) {
        bonus = 10;
      } 
      else if(time <= 45) {
       bonus = 7;
      } 
      else if(time <= 60) {
      bonus = 4;
      }
      else if(time <= 90) {
        bonus = 3;
      }
      else if(time <= 120) {
        bonus = 2;
      }
      score = score * bonus;
    
      window.alert("Score: " + defaultScore +  "\nTime " + time + "\nTime Bonus Multiplier: " + bonus + "\nTotal: " + score);
    }

  } else {
    setTimeout(delay, unFlipDelay);
    function delay() {
    document.getElementById(container1).className="f1_container";
    document.getElementById(container2).className="f1_container";
    card1 = 0;
    card2 = 0;
    count = 0;
    streak = 0;
    }
  }
 }
}

/* ------------ TIME ------------  */

function Time() {

  time += toggleTimer;
  document.getElementById('time').innerHTML=time;
  setTimeout(function(){Time()},1000);
      if (time <= 30) {
        displayedTimeBonus = 10;
      } 
      else if(time <= 45) {
       displayedTimeBonus = 7;
      } 
      else if(time <= 60) {
      displayedTimeBonus = 4;
      }
      else if(time <= 90) {
        displayedTimeBonus = 3;
      }
      else if(time <= 120) {
        displayedTimeBonus = 2;
      }
      document.getElementById('multiplier').innerHTML= "x" + displayedTimeBonus;
  }


/* ------------ FLIP FUNCTIONALITY ------------  */
        function flip(card){
        // logic(card) 
    // window.alert(card.getElementsByTagName("img")[1].getAttribute("src"));
  toggleTimer = 1;
  if (count != 2) {
    if(card.className == "f1_container"){
     card.className += " fliped";
     logic(card);
    }
  }
//    else
//     card.className = "f1_container";
}

/* ------------ Test Flip All ------------  */
        function testFlipAll(){
            var flipAll = document.getElementsByClassName("f1_container");
               var flipAllLength = flipAll.length;
               for (i = 0; i < flipAllLength; i++) {

                flipAll[i].className = "f1_container fliped";
               }
}

      function testRevertAll(){
          var unFlipAll = document.getElementsByClassName("f1_container fliped");
             var unFlipAllLength = unFlipAll.length;
             for (i = 0; i < 20; i++) {

              unFlipAll[0].className = "f1_container";
             }
}

/* ------------ ADD RANDOM PICTURES ------------  */

            var pictures = [
                {"picLocation": "/test/pic/g-rp.jpg", "picName": "Riot"},
                {"picLocation": "/test/pic/1_Web_0.jpg", "picName": "Annie"},
                {"picLocation": "/test/pic/2_Web_0.jpg", "picName": "Olaf"},
                {"picLocation": "/test/pic/3_Web_0.jpg", "picName": "Galio"},
                {"picLocation": "/test/pic/4_Web_0.jpg", "picName": "Twisted Fate"},
                {"picLocation": "/test/pic/5_Web_0.jpg", "picName": "Xin Zhao"},
                {"picLocation": "/test/pic/6_Web_0.jpg", "picName": "Urgot"},
                {"picLocation": "/test/pic/7_Web_0.jpg", "picName": "Le Blanc"},
                {"picLocation": "/test/pic/8_Web_0.jpg", "picName": "Vladimir"},
                {"picLocation": "/test/pic/9_Web_0.jpg", "picName": "Fiddlesticks"},
                {"picLocation": "/test/pic/10_Web_0.jpg", "picName": "Kayle"},
                {"picLocation": "/test/pic/11_Web_0.jpg", "picName": "Master Yi"},
                {"picLocation": "/test/pic/12_Web_0.jpg", "picName": "Alistar"},
                {"picLocation": "/test/pic/13_Web_0.jpg", "picName": "Ryze"},
                {"picLocation": "/test/pic/14_Web_0.jpg", "picName": "Sion"},
                {"picLocation": "/test/pic/15_Web_0.jpg", "picName": "Sivir"},
                {"picLocation": "/test/pic/16_Web_0.jpg", "picName": "Soraka"},
                {"picLocation": "/test/pic/17_Web_0.jpg", "picName": "Teemo"},
                {"picLocation": "/test/pic/18_Web_0.jpg", "picName": "Tristana"},
                {"picLocation": "/test/pic/19_Web_0.jpg", "picName": "Warwick"},
                {"picLocation": "/test/pic/20_Web_0.jpg", "picName": "Nunu"},
                {"picLocation": "/test/pic/21_Web_0.jpg", "picName": "Miss Fortune"},
                {"picLocation": "/test/pic/22_Web_0.jpg", "picName": "Ashe"},
                {"picLocation": "/test/pic/23_Web_0.jpg", "picName": "Tryndamere"},
                {"picLocation": "/test/pic/24_Web_0.jpg", "picName": "Jax"},
                {"picLocation": "/test/pic/25_Web_0.jpg", "picName": "Morgana"},
                {"picLocation": "/test/pic/26_Web_0.jpg", "picName": "Zilean"},
                {"picLocation": "/test/pic/27_Web_0.jpg", "picName": "Singed"},
                {"picLocation": "/test/pic/28_Web_0.jpg", "picName": "Evelyn"},
                {"picLocation": "/test/pic/29_Web_0.jpg", "picName": "Twitch"},
                {"picLocation": "/test/pic/30_Web_0.jpg", "picName": "Karthas"},
                {"picLocation": "/test/pic/31_Web_0.jpg", "picName": "ChoGoth"},
                {"picLocation": "/test/pic/32_Web_0.jpg", "picName": "Amumu"},
                {"picLocation": "/test/pic/33_Web_0.jpg", "picName": "Rammas"},
                {"picLocation": "/test/pic/34_Web_0.jpg", "picName": "Anivia"},
                {"picLocation": "/test/pic/35_Web_0.jpg", "picName": "Shaco"},
                {"picLocation": "/test/pic/36_Web_0.jpg", "picName": "Mundo"},
                {"picLocation": "/test/pic/37_Web_0.jpg", "picName": "sona"},
                {"picLocation": "/test/pic/38_Web_0.jpg", "picName": "Kassadin"},
                {"picLocation": "/test/pic/39_Web_0.jpg", "picName": "Irelia"},
                {"picLocation": "/test/pic/40_Web_0.jpg", "picName": "Janna"},
                {"picLocation": "/test/pic/41_Web_0.jpg", "picName": "Gang Plank"},
                {"picLocation": "/test/pic/42_Web_0.jpg", "picName": "Corki"},
                {"picLocation": "/test/pic/43_Web_0.jpg", "picName": "Karma"},
                {"picLocation": "/test/pic/44_Web_0.jpg", "picName": "Taric"},
                {"picLocation": "/test/pic/45_Web_0.jpg", "picName": "Viegar"},
                {"picLocation": "/test/pic/48_Web_0.jpg", "picName": "Trundle"},
                {"picLocation": "/test/pic/50_Web_0.jpg", "picName": "Swain"},
                {"picLocation": "/test/pic/51_Web_0.jpg", "picName": "Caitlyn"},
                {"picLocation": "/test/pic/53_Web_0.jpg", "picName": "Blitzcrank"},
                {"picLocation": "/test/pic/54_Web_0.jpg", "picName": "Malphite"},
                {"picLocation": "/test/pic/55_Web_0.jpg", "picName": "Katerina"},
                {"picLocation": "/test/pic/56_Web_0.jpg", "picName": "Darkness"},
                {"picLocation": "/test/pic/57_Web_0.jpg", "picName": "Maokai"},
                {"picLocation": "/test/pic/58_Web_0.jpg", "picName": "Renekton"},
                {"picLocation": "/test/pic/59_Web_0.jpg", "picName": "Jarvan"},
                {"picLocation": "/test/pic/60_Web_0.jpg", "picName": "Elise"},
                {"picLocation": "/test/pic/61_Web_0.jpg", "picName": "Oriana"},
                {"picLocation": "/test/pic/62_Web_0.jpg", "picName": "Wukong"},
                {"picLocation": "/test/pic/63_Web_0.jpg", "picName": "Brand"},
                {"picLocation": "/test/pic/64_Web_0.jpg", "picName": "Lee Sin"},
                {"picLocation": "/test/pic/67_Web_0.jpg", "picName": "Vayne"},
                {"picLocation": "/test/pic/68_Web_0.jpg", "picName": "Rumble"},
                {"picLocation": "/test/pic/69_Web_0.jpg", "picName": "Cassiopia"},
                {"picLocation": "/test/pic/72_Web_0.jpg", "picName": "Skarner"},
                {"picLocation": "/test/pic/74_Web_0.jpg", "picName": "Hiemer Dinger"},
                {"picLocation": "/test/pic/75_Web_0.jpg", "picName": "Nasus"},
                {"picLocation": "/test/pic/76_Web_0.jpg", "picName": "Nidalee"},
                {"picLocation": "/test/pic/77_Web_0.jpg", "picName": "Udyr"},
                {"picLocation": "/test/pic/78_Web_0.jpg", "picName": "Poppy"},
                {"picLocation": "/test/pic/79_Web_0.jpg", "picName": "Gragas"},
                {"picLocation": "/test/pic/80_Web_0.jpg", "picName": "Pantheon"},
                {"picLocation": "/test/pic/81_Web_0.jpg", "picName": "Ezreal"},
                {"picLocation": "/test/pic/82_Web_0.jpg", "picName": "Mordekizer"},
                {"picLocation": "/test/pic/83_Web_0.jpg", "picName": "Gravedigger"},
                {"picLocation": "/test/pic/84_Web_0.jpg", "picName": "Akali"},
                {"picLocation": "/test/pic/85_Web_0.jpg", "picName": "Kennen"},
                {"picLocation": "/test/pic/86_Web_0.jpg", "picName": "Garen"},
                {"picLocation": "/test/pic/89_Web_0.jpg", "picName": "Leona"},
                {"picLocation": "/test/pic/90_Web_0.jpg", "picName": "Malzahar"},
                {"picLocation": "/test/pic/91_Web_0.jpg", "picName": "Talon"},
                {"picLocation": "/test/pic/92_Web_0.jpg", "picName": "Riven"},
                {"picLocation": "/test/pic/96_Web_0.jpg", "picName": "Kog Maw"},
                {"picLocation": "/test/pic/98_Web_0.jpg", "picName": "Shen"},
                {"picLocation": "/test/pic/99_Web_0.jpg", "picName": "Lux"},               
                {"picLocation": "/test/pic/101_Web_0.jpg", "picName": "Xerath"},
                {"picLocation": "/test/pic/102_Web_0.jpg", "picName": "Shyvana"},
                {"picLocation": "/test/pic/103_Web_0.jpg", "picName": "Ahri"},
                {"picLocation": "/test/pic/104_Web_0.jpg", "picName": "Graves"},
                {"picLocation": "/test/pic/105_Web_0.jpg", "picName": "Fizz"},
                {"picLocation": "/test/pic/106_Web_0.jpg", "picName": "Volibear"},
                {"picLocation": "/test/pic/107_Web_0.jpg", "picName": "Rengar"},
                {"picLocation": "/test/pic/110_Web_0.jpg", "picName": "Varus"},
                {"picLocation": "/test/pic/111_Web_0.jpg", "picName": "Nautilus"},
                {"picLocation": "/test/pic/112_Web_0.jpg", "picName": "Victor"},
                {"picLocation": "/test/pic/113_Web_0.jpg", "picName": "Sejuani"},
                {"picLocation": "/test/pic/114_Web_0.jpg", "picName": "Fiora"},
                {"picLocation": "/test/pic/115_Web_0.jpg", "picName": "Ziggs"},
                {"picLocation": "/test/pic/117_Web_0.jpg", "picName": "Lulu"},
                {"picLocation": "/test/pic/119_Web_0.jpg", "picName": "Draven"},
                {"picLocation": "/test/pic/120_Web_0.jpg", "picName": "Hecarim"},
                {"picLocation": "/test/pic/121_Web_0.jpg", "picName": "Kha Zix"},
                {"picLocation": "/test/pic/122_Web_0.jpg", "picName": "Darius"},
                {"picLocation": "/test/pic/126_Web_0.jpg", "picName": "Jayce"},
                {"picLocation": "/test/pic/127_Web_0.jpg", "picName": "Lissandra"},
                {"picLocation": "/test/pic/131_Web_0.jpg", "picName": "Diana"},
                {"picLocation": "/test/pic/133_Web_0.jpg", "picName": "Quinn"},
                {"picLocation": "/test/pic/134_Web_0.jpg", "picName": "Syndra"},
                {"picLocation": "/test/pic/143_Web_0.jpg", "picName": "Zyra"},
                {"picLocation": "/test/pic/154_Web_0.jpg", "picName": "Zac"},
                {"picLocation": "/test/pic/238_Web_0.jpg", "picName": "Zed"},
                {"picLocation": "/test/pic/254_Web_0.jpg", "picName": "Vi"},
                {"picLocation": "/test/pic/267_Web_0.jpg", "picName": "Nami"},
                {"picLocation": "/test/pic/412_Web_0.jpg", "picName": "Thresh"}
            ];
  

/* ------------ HIDE ADDRESS BAR ------------  */
('.game').masonry({ isFitWidth: true });

    function hideAddressBar()
      {
          if(!window.location.hash)
          { 
              if(document.height <= window.outerHeight + 10)
              {
                  document.body.style.height = (window.outerHeight + 50) +'px';
                  setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
              }
              else
              {
                  setTimeout( function(){ window.scrollTo(0, 1); }, 0 ); 
              }
          }
      } 

      window.addEventListener("load", hideAddressBar );
      window.addEventListener("orientationchange", hideAddressBar );

/* ------------ HIDE BUTTONS ------------  */
function hideButtons() {
  document.getElementById("mainmenu").style.display="none";
}

function showButtons() {
  document.getElementById("mainmenu").style.display="block";
}

function hideGame() {
  document.getElementById("game").style.display="none";
}

function showGame() {
  document.getElementById("game").style.display="block";
}

function hideStuff(game){
   document.getElementById("game").style.visibility="hidden";
}

function toggleMe(btn,a){
    var e=document.getElementById(a);
    if(!e)return true;
    if(e.style.display=="none"){
      e.style.display="block";
      btn.value = "Hide";
   }
   else {
      e.style.display="none";
      btn.value = "Show";
   }
   return true;
  }

/* ------------ RUN START FUNCTIONS ------------  */

function start() {
  newGame(0);
  Time();

}


