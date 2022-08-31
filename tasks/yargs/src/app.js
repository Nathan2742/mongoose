const yargs = require("yargs")
const Movie = require("./utils")

// console.log(yargs.argv)

// console.log(yrags.argv.actor)

// if (yargs.argv.add) {
//     console.log("its " + yargs.argv.title)
// } else {
//     console.log("not true")
// };

// --add --title spiderman --actor"dave smith"


const app = (yragsObj) => {
    try {
        // Check if somthing is true
        if (yragsObj.add) { 
            const movie = new Movie(yragsObj.title, yragsObj.actor)
            movie.add()
            console.table(movie.list())
        } else {
            console.log("incorrect command")
        }
    } catch(error) {
        console.log(error)
        
    }
}


app(yargs.argv)