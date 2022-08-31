require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { createMovie, listMovies, deleteMovie } = require("./movie/movieFunctions")


const app = async (yargsObject) => {
    try {
        if(yargsObject.add) {
            await createMovie({title: yargsObject.title, actor: yargsObject.actor})
            console.log(await listMovies())
            
        
        } else if ({ title: yargsObject.title, actor: yargsObject.actor}) { 
            console.log(await deleteMovie())
        
        } else if (yargsObject.list) {
            console.log(await listMovies())
        } else {
            console.log("incorrect command")
        }
        await mongoose.disconnect();
    } catch(error) {
        console.log(error);
        await mongoose.disconnect();
    }
}



// ###########################################

// app(yargs.argv)


// require("./db/connection");
// const mongoose = require("mongoose");
// const yargs = require("yargs");

// const { createMovie, listMovies, updateMovie, deleteMovie, deleteMultipleMovies } = require("./movie/movieFunctions")

// const app = async (yargsObject) => {
//     try {
//         if(yargsObject.add) {
//             await createMovie({title: yargsObject.title, actor: yargsObject.actor})
//             console.log(await listMovies());
//         } else if (yargsObject.list) {
//             console.log(await listMovies());
//         } 
//         else if (yargsObject.update) {
//             await updateMovie(
//                 {title: yargsObject.title, actor:yargsObject.actor},
//                 {title: yargsObject.newTitle, actor: yargsObject.newActor}
//             )
//             console.log("Movie updated!");
//             console.log(await listMovies());
//         }
//         else if (yargsObject.delete){
//             await deleteMovie({title: yargsObject.title, actor: yargsObject.actor})
//             console.log("The movie you have chosen has been deleted successfully!");
//             console.log(" The movies remaining are: " + await listMovies());
//         } else if (yargsObject.deleteAll) {
//             await deleteMultipleMovies()
//             console.log("All the movies have been deleted!");
//         }
//         else {
//             console.log("incorrect command");
//         }
//         await mongoose.disconnect();
//     } catch (error) {
//         console.log(error);
//         await mongoose.disconnect();
//     }
// }

// app(yargs.argv)