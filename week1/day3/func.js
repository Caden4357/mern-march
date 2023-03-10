

const displayAlbumInfo = (props) => {
    return `${props.albumName} was released in ${props.releaseYear} by ${props.bandName} and has sold ${props.recordsSold} Records`
}


console.log(displayAlbumInfo(
    {
        albumName: 'Titanic Rising',
        bandName: 'Weyes Blood',
        releaseYear: 2021,
        recordsSold: 500000
    }
    ))

console.log(displayAlbumInfo(
    {
        albumName: 'Master Of Puppets',
        bandName: 'Metallica',
        releaseYear: 1987,
        recordsSold: 5000000
    }
    ))






