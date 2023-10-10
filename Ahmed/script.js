var progressBars = document.getElementById("progressBars1");
var skills = [['Java', 80], ['Python', 90], ['Adroid Studio', 50], ['C#', 70], ['SQL', 75], ['Arduino', 80], ['Photoshop', 90], ['UI/UX', 70]];

for (var i = 0; i < skills.length; i++) {
    progressBars.innerHTML += '<div class="progressContainer"><h4>' + skills[i][0] + '</h4><progress value="' + skills[i][1] + '" max="100"></progress></div>';
}
// 🟢🟢🟢    COURSES    🟢🟢🟢
var coursesContainer = document.getElementsByClassName("coursesContainer")[0];

var courses2 = [
    { image1: "course1.jpg", name: "Computer course", discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt tempor ", price: 9.99 },
    { image1: "course2.jpeg", name: "Coding course", discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt tempor ", price: 19.99 },
    { image1: "course3.jpg", name: "Photoshop course", discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt tempor ", price: 9.99 }
];

for (var j = 0; j < courses2.length; j++) {
    coursesContainer.innerHTML += '<div class="courseCard"><img src="images/' + courses2[j].image1 + '" alt="image not loading" ><h2>' + courses2[j].name + '</h2><h5>' + courses2[j].discription + '</h5><h4><a href="#">Learn more</a></h4><div class="price"><p>' + courses2[j].price + '$</p></div></div>';
}

// 🟢🟢🟢    APPS    🟢🟢🟢
var appsContainer = document.getElementById("appsContainer");

var apps = [
    { image: "cNotes.png", name: "C-Notes", discription: "best free, easy, safe and no ads notes app.", link: "#"},
    { image: "caloriesCounter.png", name: "Calories Counter", discription: "count daily calories that you need.", link: "#"},
    { image: "shopAssistant.png", name: "Shopping Assistant", discription: "Shopping assistant is a good tool to save purchases like food, toys, clothes, devices, and anything you want", link: "#"},
    { image: "currency.png", name: "R Currency", discription: "A simple-designed currency converter with latest rates, with modern ui.", link: "#"},
    { image: "randomSelection.png", name: "Random selection", discription: "A simple application selects from random inputs, like: -random name (from list) -random number -random (Yes or No) -random password", link: "#"},
    { image: "myWeather.png", name: "my Weather", discription: "Free weather app provides current,hourly,daily and in-depth details info about weather.with 41,000 cities info support.", link: "#"},
    { image: "qrCode.png", name: "QR code reader & generator", discription: "QR code reader and generator,barcode reader.", link: "#"},
    { image: "converter.png", name: "Units converter", discription: "A simple tool to help you with converting units. available units: *Length *Weight *Temp *Volume", link: "#"}
];

for (var j = 0; j < apps.length; j++) {
    appsContainer.innerHTML += '<div class="appCard"><img src="images/apps/'+ apps[j].image +'" alt="image not loading!"><h4>'+ apps[j].name +'</h4><article><h5>'+ apps[j].discription +'</h5></article><a href="'+ apps[j].link +'"><button type="button">Download the app</button></a></div>';
}
//🟢🟢🟢 DESKTOP APPS  🟢🟢🟢

var appsDeskContainer = document.getElementById("appsDeskContainer");

var desktopApps = [
    { image: "cNotes.png", name: "C-Notes", discription: "best free, easy, safe and no ads notes app.", link: "#"},
    { image: "caloriesCounter.png", name: "Calories Counter", discription: "count daily calories that you need.", link: "#"},
    { image: "shopAssistant.png", name: "Shopping Assistant", discription: "Shopping assistant is a good tool to save purchases like food, toys, clothes, devices, and anything you want", link: "#"},
    { image: "currency.png", name: "R Currency", discription: "A simple-designed currency converter with latest rates, with modern ui.", link: "#"},
    { image: "randomSelection.png", name: "Random selection", discription: "A simple application selects from random inputs, like: -random name (from list) -random number -random (Yes or No) -random password", link: "#"},
    { image: "myWeather.png", name: "my Weather", discription: "Free weather app provides current,hourly,daily and in-depth details info about weather.with 41,000 cities info support.", link: "#"},
    { image: "qrCode.png", name: "QR code reader & generator", discription: "QR code reader and generator,barcode reader.", link: "#"},
    { image: "converter.png", name: "Units converter", discription: "A simple tool to help you with converting units. available units: *Length *Weight *Temp *Volume", link: "#"}
];

for (var j = 0; j < desktopApps.length; j++) {
    appsDeskContainer.innerHTML += '<div class="appCard"><img src="images/apps/'+ apps[j].image +'" alt="image not loading!"><h4>'+ apps[j].name +'</h4><article><h5>'+ apps[j].discription +'</h5></article><a href="'+ apps[j].link +'"><button type="button">Download the app</button></a></div>';
}
//🟢🟢🟢  SWITCHING BETWEEN MOBLIE APPS AND DESKTOP APPS  🟢🟢🟢
var appsDeskContainer = document.getElementById("appsDeskContainer");
var mobileButton = document.getElementById("mobileButton");
var desktopButton = document.getElementById("desktopButton");
function appsSwitcher(state){
    if(state == "mobile"){
        appsContainer.style.display = "flex";
        appsDeskContainer.style.display = "none";

        mobileButton.setAttribute("class","active");
        desktopButton.removeAttribute("class");
    }else if(state == "desktop"){
        appsContainer.style.display = "none";
        appsDeskContainer.style.display = "flex";
        
        desktopButton.setAttribute("class","active");
        mobileButton.removeAttribute("class");
    }
}

//🟢🟢🟢  MY CERTIFICATES  🟢🟢🟢

var myCertificatesContainer = document.getElementById("myCertificatesContainer");

var myCertificates = [
    { image: "html.jpg", name: "HTML",from: "Academy Shiyar", link: "#"},
    { image: "html.jpg", name: "HTML",from: "Academy Shiyar", link: "#"},
    { image: "html.jpg", name: "HTML",from: "Academy Shiyar", link: "#"},
    { image: "html.jpg", name: "HTML",from: "Academy Shiyar", link: "#"},
    { image: "html.jpg", name: "HTML",from: "Academy Shiyar", link: "#"},
    { image: "html.jpg", name: "HTML",from: "Academy Shiyar", link: "#"},
    { image: "html.jpg", name: "HTML",from: "Academy Shiyar", link: "#"},
    { image: "html.jpg", name: "HTML",from: "Academy Shiyar", link: "#"},
    { image: "html.jpg", name: "HTML",from: "Academy Shiyar", link: "#"},
];

for (var j = 0; j < myCertificates.length; j++) {
    myCertificatesContainer.innerHTML += '<div class="certificateCard"><img src="images/Certificates/'+ myCertificates[i].image +'" alt="image not loading!"><h3>'+ myCertificates[i].name +'</h3><h5>By: '+ myCertificates[i].from +'</h5><a href="'+ myCertificates[i].link +'"><h4>Check Certificate</h4></a></div>';
}
//🟢🟢🟢  SIDE LIST  🟢🟢🟢
const sideList = document.getElementById("sideList");
const openMenu = document.getElementById("icon1");
const closeMenu = document.getElementById("close");
var menuStatue = false;
openMenu.onclick = ()=>{
    if(menuStatue == false){
        sideList.style.right = "0";
        menuStatue = true;
    }else if(menuStatue == true){
        sideList.style.right = "-220px";
        menuStatue = false;
    }
}
closeMenu.onclick = ()=>{
    if(menuStatue == false){
        sideList.style.right = "0";
        menuStatue = true;
    }else if(menuStatue == true){
        sideList.style.right = "-220px";
        menuStatue = false;
    }
}
onresize = ()=>{
    if(menuStatue == true){
        sideList.style.right = "-220px";
        menuStatue = false;
    }
}

document.onclick = function(e){
    if(e.target.id !== "sideList" && e.target.id !== "icon1"){
        sideList.style.right = "-220px";
        menuStatue = false;
    }
}