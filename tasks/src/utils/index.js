const movieArry =[] 

class Movie {
    constructor(title, actor='Not specified'){
        this.title = title
        this.actor = actor
    }
    add(){
    movieArry.push(this)
    }
    list(){
        return movieArry
    }
}

module.exports = Movie