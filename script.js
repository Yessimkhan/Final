function change(element) {
    $("#img").animate({ left: '-=100px', opacity: '1' }, "quick");
    $("#img").animate({ left: '+=100px', opacity: '1' }, "slow");
    var a = element.innerHTML;
    switch (a) {    
        case "Mercury":
            document.getElementById("img").src = "https://envato-shoebox-0.imgix.net/ded8/3b57-8812-47e5-bfe5-9574cdaf53b9/venus2.jpg?crop=top&fit=crop&fm=jpeg&h=211&q=80&w=316&s=37a64a72f8aae4b3ce52bbef9e48dfc4";
            document.getElementById("txt").innerHTML = "Mercury"
            break;
        case "Sun":
            document.getElementById("img").src = "https://solarsystem.nasa.gov/system/resources/detail_files/386_SunEmitsSolsticeFlare1200w.jpg";
            document.getElementById("txt").innerHTML = "Sun"
            break;
        case "Venus":
            document.getElementById("img").src = "https://img1.goodfon.ru/wallpaper/nbig/9/19/venus-planet-venus-solar.jpg";
            document.getElementById("txt").innerHTML = "Venus"
            break;
        case "Earth":
            document.getElementById("img").src = "https://www.wallpaperflare.com/static/572/168/928/earth-black-space-planet-wallpaper.jpg";
            document.getElementById("txt").innerHTML = "Earth"
            break;
    }

    
}

function big(element) {
    element.style.fontSize = "40px";
}

function small(element) {
    element.style.fontSize = "30px";
}

function load() {
    $(".text").animate({ opacity: '1' }, "slow");
}
