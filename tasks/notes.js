// console.log("hello world")

// console.log(process.argv)

// if (process.argv[2] === 'Alex') {
//     console.log("Its Alex")
// } else {
//     console.log("Not Alex")
// }


const app = (argv) => {
    
    switch(argv[2]) {
        case 'Alex':
            const name = argv[2]
            console.log(name + ' its stored in  a const')
            // console.log("Its Alex")
            break;

        case'Steve':
        const steve = argv[2]
            console.log(steve + ' its stored in  a const')
            // console.log("Steve")
            break;

        default:
            console.log("No name")
            // console.log("Not a name")
    }
    
    
    // if (process.argv[2] === 'Alex') {
    //     console.log("Its Alex")
    // } else {
    //     console.log("Not Alex")
    // }
}

app(process.argv)