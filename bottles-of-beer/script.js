const lyrics = document.getElementById("lyrics");

for(let i = 99; i > 0; i--) {
    lyrics.innerHTML += `${i} bottles of beer on the wall, ${i} bottles of beer <br />
                              Take one down and pass it around, ${i} bottles of beer on the wall <br/><br />`
}

lyrics.innerHTML += "No more bottles of beer on the wall, no more bottles of beer <br/> Go to the store and buy some more, 99 bottles of beer on the wall";