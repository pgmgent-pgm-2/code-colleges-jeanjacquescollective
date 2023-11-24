let id = Symbol('Unique id');
let id2 = Symbol('Unique id');
console.log(id == id2)

console.log(id)
console.log(id.toString())
console.log(id.description)
console.log(id.valueOf())

// unieke waarden toekennen
let statuses = {
    BEGINNER: Symbol('beginner'),
    BIG_IN_JAPAN: Symbol('big in japan'),
    WORLD_FAMOUS: Symbol('world famous')
}

const artist = {
    name: 'Ice Spice',
    state: statuses.BEGINNER,
    setState(state) {
        this.state = state;
    }
}

artist.setState(statuses.WORLD_FAMOUS);

console.log(artist)
