var song = document.getElementById('song');
var isPlaying = false;
var volume = 1;
var i = 0;
var inputTaskEmail = document.getElementById('input-task-email');
var inputTaskMessage = document.getElementById('input-task-msg');
var inputTaskName = document.getElementById('input-task-name');

var songTitle = document.getElementById('song-title');
var songArtist = document.getElementById('song-artist');
var songAlbum = document.getElementById('song-album');

//to scroll back to first page as it refresh
// window.onbeforeunload = function () {
//     window.scrollTo (0,0); 
// } 

var aboutMe = document.getElementById('about-me');
var picAboutMe = document.getElementById('pic-aboutme');
var writeUp = document.getElementById('write-up');
var playlist = document.getElementById('playlist-header'); 
var achievements = document.getElementById('achievements');
var sampleProjects = document.querySelectorAll('.desk-project');

window.addEventListener("scroll", onScroll);

function onScroll(evt) {
    if (window.scrollY + 300 >= aboutMe.offsetTop) {
        writeUp.classList.add('fadeInRight')
        picAboutMe.classList.add('fadeInLeft')
    }
    if (window.scrollY + 300 >= playlist.offsetTop) {
        document.getElementById('playlistTitle').classList.add('animate__animated');
        document.getElementById('playlistTitle').classList.add('animate__lightSpeedInLeft');
        document.getElementById('playlistIntro').classList.add('animate__animated');
        document.getElementById('playlistIntro').classList.add('animate__lightSpeedInRight')
    }
    for (var i = 0; i < sampleProjects.length; i++) {
        if (window.scrollY + 300 >= achievements.offsetTop) {
            console.log('abc')
            sampleProjects[i].classList.add('zoomIn');
        }
    }
}

var songPlaylistLibrary = [
    {   
        i:'0',
        source: './audio/Joji, Diplo - Daylight.mp3',
        img: 'url(./images/joji_concert.jpg)',
        title: 'Daylight',
        artist: 'Joji',
        album: 'Uprising',
    },
    {   
        i:'1',
        source: './audio/y2mate.com - AiZ  The Last Thing Official Music Video.mp3',
        img: 'url(./images/aizat_concert.jpg)',
        title: 'The Last Thing',
        artist: 'Aizat Hamdan',
        album: '',
    },
    {   
        i:'2',
        source: './audio/Joe Dassin - The Last Thing On My Mind.mp3',
        img: 'url(./images/fazry_concert.jpg)',
        title: 'Out of Time',
        artist: 'Fazry Santaroena',
        album: '',
    },
    {   
        i:'3',
        source: './audio/y2mate.com - Gerak Lu Official Music Video.mp3',
        img: 'url(./images/mikhail_cover.jpg)',
        title: 'Gerak Lu',
        artist: 'Mikhail Raiyan',
        album: '',
    },
    {   
        i:'4',
        source: './audio/Bruno Mars - Chunky.mp3',
        img: 'url(./images/chunky_concert.jpg)',
        title: 'Chunky',
        artist: 'Bruno Mars',
        album: '24K Magic',
    },
    {
        i: '5',
        source: './audio/y2mate.com - Pivot Gang  Colbert Official Audio.mp3',
        img: 'url(./images/colbert_concert.jpg)',
        title: 'Colbert',
        artist: 'The Pivot Gang',
        album: '',
    },
    {
        i: '6',
        source: './audio/y2mate.com - After The Storm  Kali Uchis ft Tyler The Creator  Bootsy Collins lyrics.mp3',
        img: 'url(./images/after_the_strom_concert.jpg)',
        title: 'After The Storm',
        artist: 'Kaki Uchis, Tyler The Great',
        album: '',
    },
    {
        i: '7',
        source: './audio/y2mate.com - Souly Had Melii  Crush.mp3',
        img: 'url(./images/crush_concert.jpg)',
        title: 'Crush',
        artist: 'Souly Had',
        album: 'Crush',
    }
]

function playButton () {
    if (isPlaying == false) {
        song.play();
        isPlaying = true;
        document.getElementById("song-button").innerHTML = "<i class='fa fa-pause'></i>";
        document.getElementById('song-button').style.backgroundColor = 'rgba(179, 157, 38, 0.932)';
        return;
    }
    if (isPlaying == true) {
        song.pause();
        isPlaying = false;
        document.getElementById("song-button").innerHTML = "<i class='fa fa-play'></i>";
        document.getElementById('song-button').style.backgroundColor = '#EADEB8';
        return;
    }
}

function changeSong(num) {
    i +=num;
    if (i > 7) {
        i = 0;
    }
    else if (i < 0) {
        i = 7;
    }
    document.getElementById("song-button").innerHTML = "<i class='fa fa-play'></i>";
    document.getElementById('song-button').style.backgroundColor = 'transparent';
    isPlaying = false;
    song.src = songPlaylistLibrary[i].source;
    document.getElementById('song-background').style.backgroundImage = songPlaylistLibrary[i].img;
    songTitle.innerHTML = songPlaylistLibrary[i].title;
    songArtist.innerHTML = songPlaylistLibrary[i].artist;
    songAlbum.innerHTML = songPlaylistLibrary[i].album;
}

function volButton(num) {
    volume += num;
    if (volume > 1) {
        volume = 1
    }
    else if (volume < 0) {
        volume = 0;
    }
    console.log(num);
    console.log(volume);
    song.volume = volume;
}

function subSong (data) {
    console.log(data);
    switch(data) {
        case '0':
            i=0;
            document.getElementById("song-button").innerHTML = "<i class='fa fa-play'></i>";
            document.getElementById('song-button').style.backgroundColor = 'transparent';
            isPlaying = false;
            song.src = songPlaylistLibrary[i].source;
            document.getElementById('song-background').style.backgroundImage = songPlaylistLibrary[i].img;
            songTitle.innerHTML = songPlaylistLibrary[i].title;
            songArtist.innerHTML = songPlaylistLibrary[i].artist;
            songAlbum.innerHTML = songPlaylistLibrary[i].album;
            break;
        case '1':
            i=1;
            document.getElementById("song-button").innerHTML = "<i class='fa fa-play'></i>";
            document.getElementById('song-button').style.backgroundColor = 'transparent';
            isPlaying = false;
            song.src = songPlaylistLibrary[i].source;
            document.getElementById('song-background').style.backgroundImage = songPlaylistLibrary[i].img;
            songTitle.innerHTML = songPlaylistLibrary[i].title;
            songArtist.innerHTML = songPlaylistLibrary[i].artist;
            songAlbum.innerHTML = songPlaylistLibrary[i].album;
            break;
        case '2':
            i=2;
            document.getElementById("song-button").innerHTML = "<i class='fa fa-play'></i>";
            document.getElementById('song-button').style.backgroundColor = 'transparent';
            isPlaying = false;
            song.src = songPlaylistLibrary[i].source;
            document.getElementById('song-background').style.backgroundImage = songPlaylistLibrary[i].img;
            songTitle.innerHTML = songPlaylistLibrary[i].title;
            songArtist.innerHTML = songPlaylistLibrary[i].artist;
            songAlbum.innerHTML = songPlaylistLibrary[i].album;
            break;
        case '3':
            i=3;
            document.getElementById("song-button").innerHTML = "<i class='fa fa-play'></i>";
            document.getElementById('song-button').style.backgroundColor = 'transparent';
            isPlaying = false;
            song.src = songPlaylistLibrary[i].source;
            document.getElementById('song-background').style.backgroundImage = songPlaylistLibrary[i].img;
            songTitle.innerHTML = songPlaylistLibrary[i].title;
            songArtist.innerHTML = songPlaylistLibrary[i].artist;
            songAlbum.innerHTML = songPlaylistLibrary[i].album;
            break;
        case '4':
            i=4;
            document.getElementById("song-button").innerHTML = "<i class='fa fa-play'></i>";
            document.getElementById('song-button').style.backgroundColor = 'transparent';
            isPlaying = false;
            song.src = songPlaylistLibrary[i].source;
            document.getElementById('song-background').style.backgroundImage = songPlaylistLibrary[i].img;
            songTitle.innerHTML = songPlaylistLibrary[i].title;
            songArtist.innerHTML = songPlaylistLibrary[i].artist;
            songAlbum.innerHTML = songPlaylistLibrary[i].album;
            break;
        case '5':
            i=5;
            document.getElementById("song-button").innerHTML = "<i class='fa fa-play'></i>";
            document.getElementById('song-button').style.backgroundColor = 'transparent';
            isPlaying = false;
            song.src = songPlaylistLibrary[i].source;
            document.getElementById('song-background').style.backgroundImage = songPlaylistLibrary[i].img;
            songTitle.innerHTML = songPlaylistLibrary[i].title;
            songArtist.innerHTML = songPlaylistLibrary[i].artist;
            songAlbum.innerHTML = songPlaylistLibrary[i].album;
            break;
        case '6':
            i=6
            document.getElementById("song-button").innerHTML = "<i class='fa fa-play'></i>";
            document.getElementById('song-button').style.backgroundColor = 'transparent';
            isPlaying = false;
            song.src = songPlaylistLibrary[i].source;
            document.getElementById('song-background').style.backgroundImage = songPlaylistLibrary[i].img;
            songTitle.innerHTML = songPlaylistLibrary[i].title;
            songArtist.innerHTML = songPlaylistLibrary[i].artist;
            songAlbum.innerHTML = songPlaylistLibrary[i].album;
            break;
        case '7':
            i=7;
            document.getElementById("song-button").innerHTML = "<i class='fa fa-play'></i>";
            document.getElementById('song-button').style.backgroundColor = 'transparent';
            isPlaying = false;
            song.src = songPlaylistLibrary[i].source;
            document.getElementById('song-background').style.backgroundImage = songPlaylistLibrary[i].img;
            songTitle.innerHTML = songPlaylistLibrary[i].title;
            songArtist.innerHTML = songPlaylistLibrary[i].artist;
            songAlbum.innerHTML = songPlaylistLibrary[i].album;
            break;
    }
}

function submitButton() {
    if (inputTaskMessage == '' && inputTaskEmail == '') {
        alert('Please fill in the details')
    }

}