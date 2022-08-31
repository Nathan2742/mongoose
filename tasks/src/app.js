console.log(process.argv)
const Movie = require("./utils")

const app = (argsArry) => {
    // return(argsArry)
    try{
        switch (argsArry[2]){
            case'add':
                // console.log("inside add")
                // const movie = argsArry[3]
                // console.log(movie + ' is stored')
                
                
                // const actor = argsArry[4]
                // console.log(actor + ' is stored')
                
                // const moiveArry = [argsArry[3], argsArry[4]]
                // console.log(moiveArry)
                
                const movie =new Movie(argsArry[3], argsArry[4])
                movie.add()
                console.log(movie.list())
                
                break;
            // case 'addMulti':
            //     const movie1 =new Movie([argsArry[3], argsArry[4]]);
            //     const movie2 =new Movie([argsArry[5], argsArry[6]]);
            //     movie1.add()
            //     movie2.add()
            //     console.table(movie1.list());
            //     break;
                
            default:
                console.log("incorrect command")
                break;
        }
    } catch(error) {
        console.log(error)
    
    }
}

app(process.argv)