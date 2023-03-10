

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







const employee = {
    fName:'Caden',
    role:'instructor',
    stacks: ['Web Fund', 'Python', 'MERN'],
    age:25
}
const {fName, role, stacks:[stack1,stack2,stack3]} = employee
// const {fName, role, ...everythingElse} = employee

// console.log(everythingElse);

// console.log(fName, role, stack1, stack2, stack3);
