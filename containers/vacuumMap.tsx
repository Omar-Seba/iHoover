class vacuumMap{

    tileSize : number;
    x : number = 1;
    y : number = 1;
    
    constructor(tileSize : number, x : number, y : number){
        this.tileSize = tileSize;
        this.x = x;
        this.y = y;
    }
}

export default vacuumMap;