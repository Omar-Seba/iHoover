class vacuumObject {
    xPos : number;
    yPos : number;
    direction: string;
    boardSize : number;
    image : string;
    orientationVacuum : string[] = ["N","E","S","W"]
    imageVacuum : string[] = ["vacuum-cellN","vacuum-cellE","vacuum-cellS","vacuum-cellW"]

    constructor(x : number ,y : number ,direction : string, boardSize : number){
        this.xPos = x;
        this.yPos = y;
        this.direction = direction;
        this.boardSize = boardSize;
        this.image = this.imageVacuum.at(this.orientationVacuum.indexOf(this.direction))!
    }

    // the vacuum can have different orientations : N,E,W,S

    execInstructions = (instructions : string, board : number[][]) =>{

        // console.log(this);

        for(let inst of instructions){

            // console.log(inst + "_____________________________________________________");

            
            if (inst === 'A')
                board = this.moveForward(board)
            if (inst === 'D' || inst === 'G')
                this.rotation(inst)

            // console.log(this);
        }
        return board
            
    }

    moveForward = (board : number[][]) => {

        const oldX = this.xPos;
        const oldY = this.yPos;
        console.log(this.xPos);
        console.log(this.yPos);
        
        switch (this.direction) {
            case "W":
                if (this.yPos - 1 >= 0)
                    this.yPos -= 1;
                else
                    console.log("can't move W")
                break;

            case "S":
                if (this.xPos + 1 < this.boardSize)
                    this.xPos += 1;
                else
                    console.log("can't move S")
                break;

            case "N":
                if (this.xPos - 1 >= 0)
                    this.xPos -= 1;
                else
                    console.log("can't move N")
                break;

            case "E":
                if (this.yPos + 1 < this.boardSize)
                    this.yPos += 1;
                else
                    console.log("can't move E")
                break;
        }
        board[oldX][oldY] = 0;
        board[this.xPos][this.yPos] = 1;
        return board
    }


    rotation = (way : string) => {

        let newDirectionIndex : number = 0 // 1 if the roation is to the right, -1 to the left
        if (way === 'D'){
            newDirectionIndex = (this.orientationVacuum.indexOf(this.direction) + 1 )% 4
            const newDirection = this.orientationVacuum.at(newDirectionIndex)
            if (newDirection){
                this.direction = newDirection
                this.image = this.imageVacuum.at(newDirectionIndex)!
            }
            else
                throw new Error ("undefined direction")
        }
        else {
            newDirectionIndex = (this.orientationVacuum.indexOf(this.direction) - 1 )% 4
            const newDirection = this.orientationVacuum.at(newDirectionIndex)
            if (newDirection){
                this.direction = newDirection
                this.image = this.imageVacuum.at(newDirectionIndex)!
            }
            else
                throw new Error ("undefined direction")
        }
    }



}

export default vacuumObject;