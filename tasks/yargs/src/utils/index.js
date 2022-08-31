const movieArray =[] 

class Movie {
    constructor(title, actor){
        this.title = title
        this.actor = actor
    }
    add(){
    movieArray.push(this)
    }
    list(){
        return movieArray
    }
}

module.exports = Movie