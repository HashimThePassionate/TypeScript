"use strict";
function makeAlbum(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = makeAlbum("Artist 1", "Album 1");
var album2 = makeAlbum("Artist 2", "Album 2", 12);
var album3 = makeAlbum("Artist 3", "Album 3", 8);
console.log(album1);
console.log(album2);
console.log(album3);
