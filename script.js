let progress = document.querySelector("#progress");
let song = document.querySelector("#song");
let ctrlIcon = document.querySelector("#ctrlIcon");
let src = document.querySelector("#src");
let h1 = document.querySelector("#title");
let author = document.querySelector("#author");
let songImg = document.querySelector(".song-img");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
let arr = [
     {
        src : "file:///D:/Music/Aye%20Deen%20K%20Mujahid%20Jihad%20Ki%20Fizayain%20Tujhe%20Yaad%20Ker%20Rahi%20Hain%20Nazam%20With%20Dirilis%20Ertugrul%20Scenes(MP3_160K).mp3",
        title : "Aye Deen K Mujahid",
        author: "saifullah_68",
        img:"file:///D:/ShareMe/1676094972244.jpg"
    },
    {
        src : "file:///D:/Music/Best%20Heart%20Touching%20Nasheed_%20Yeh%20Zindagi%20Hai%20Fani_%20Qari%20Inaam%20ul%20Hassan%20_%20Qari%20Shoeb%20Hussaini_%20IR(MP3_320K).mp3",
        title : "Best Heart Touching Nasheed",
        author: "Qari Inaam ul Hassan & Qari Shoeb Hussaini, IR",
        img : "file:///D:/AdobeLightroom/1625732921874%20(1).jpg"
    },
   {
        src : "file:///D:/Music/Loyalty%20Nasheed%20by%20Muhammad%20al%20Muqit(MP3_320K).mp3",
        title : "Loyalty Nasheed",
        author: "Muhammad al Muqit",
        img : "file:///D:/sktech%20book/sketchbook%20preview/7b86a9a0-5621-4866-a82e-ffb9570b9880.png"
    },
    {
        src : "file:///D:/Music/MEANI%20NABIYO%20_%20Ishfaq%20Kawa%20_%20Shahid%20Vaakhs%20_%20Ehsaan%20Khan%20_Brothers%20Production%20_%20Ramazan%202023%20_(MP3_320K).mp3",
        title : "MEANI NABIYO",
        author: "Ishfaq Kawa _ Shahid Vaakhs _ Ehsaan Khan _Brothers Production",
        img : "file:///D:/sktech%20book/export/sketch1646477381954.png"
    },
    {
        src : "file:///D:/Music/The%20Way%20of%20The%20Tears%20-%20Exclusive%20Nasheed%20-%20Muhammad%20al%20Muqit(MP3_320K).mp3",
        title : "The Way of The Tears",
        author: "Muhammad al Muqit",
        img : "file:///D:/snapchat/Snapchat-1892721889.jpg"
    }
]
let count = 0;
function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
        songImg.classList.remove("rotate");
    }else{
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
        songImg.classList.add("rotate")
    }
}
if(song.play){
    setInterval(()=>{
    progress.value = song.currentTime;
    },500)
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove("fa-play")
        ctrlIcon.classList.add("fa-pause")
        songImg.classList.add("rotate")
}
function next(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause")
        ctrlIcon.classList.add("fa-play")
        songImg.classList.remove("rotate")
    }else{
        song.play()
        ctrlIcon.classList.remove("fa-play")
        ctrlIcon.classList.add("fa-pause")

    }
    if(count >= arr.length-1){
        count = 0;
    }else{
        count++
    }
    let authorName = arr[count].author.length >= 17 ? `${arr[count].author.slice(0,18)}...`:arr[count].author;
    song.src = arr[count].src;
    h1.innerHTML = arr[count].title
    author.innerHTML = authorName
    songImg.src = arr[count].img;
    console.log(authorName)
}
function prev(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause")
        ctrlIcon.classList.add("fa-play")
        songImg.classList.remove("rotate")
    }else{
        song.play()
        ctrlIcon.classList.remove("fa-play")
        ctrlIcon.classList.add("fa-pause")
        songImg.classList.add("rotate")
    }
    if(count <= 0){
        count = arr.length-1;
    }else{
        count--
    }
    let authorName = arr[count].author.length >= 17 ? `${arr[count].author.slice(0,18)}...`:arr[count].author;
    song.src = arr[count].src;
    h1.innerHTML = arr[count].title
    author.innerHTML = authorName
    songImg.src = arr[count].img;
}
