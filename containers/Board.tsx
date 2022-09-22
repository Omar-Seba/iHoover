import { useState } from "react";
// import {smalltalk} from 'smalltalk/bundle';
import vacuumObject from "./vacuumObject";
const Board = () => {

    // the vacuum can have different orientations : N,E,S,W

    
    // User data 
    let boardSizeX : number = 10; // the size is set by the user 
    let  boardSizeY : number = 10; // the size is set by the user 
    let instructions : string = "DADADADAA";

    // while(boardSizeX === -1){
        boardSizeX = 10 // the size is set by the user 
    // }
    // while(boardSizeY === -1){
        boardSizeY = 10 // the size is set by the user 
    // }
    // while(instructions === ""){
        // window.alert("type the instructions")!
        instructions = "DDDADADADA"// "DADADADAA"
    // }

    // #TODO check the validity of the values


    const initalXPos : number = 0 //parseInt(prompt("enter x pos")!)
    const initalYPos : number =  0 //parseInt(prompt("enter y pos")!)
    const orientation : string = "S" //prompt("enter orientation")!

    let vacuum = new vacuumObject(initalXPos, initalYPos, orientation, boardSizeX);



    let [board, setBoard] = useState(
        new Array(boardSizeX).fill(0).map( row => new Array<number>(boardSizeY).fill(0))
    )
    board[initalXPos][initalYPos] = 1

    
    // console.log(board);
    

    // console.log(board)

    let boardRender = [];
//  board.slice(0).reverse().map((row, rowIdx) => (
    // for (let i = board.length - 1; i >= 0; i--) {
    // for (let i = 0 ; i < board.length ; i++) {
    //     for (let j = 0; j < board[i].length; j++) {
    //         if (board[i][j] === 1)
    //             boardRender.push(<span className={vacuum.image}></span>)
    //         else
    //             boardRender.push(<span className="cell"></span>)
    //     }
        
    // }

    // const exec = () => {
    board = vacuum.execInstructions(instructions, board);
    // }

    const show = () => {

        return (                
                board.slice(0).reverse().map((row, rowIdx) => (
                //  board.map((row, rowIdx) => (
                    <div key={rowIdx} className="row">
                        {
                            row.map((cell, cellIdx) => (
                                <div
                                    key={cellIdx}
                                    className={`cell ${(cell ===  1) ?
                                        vacuum.image : ''}`}> {board.indexOf(row)},{cellIdx}
                                </div>
                            ))
                        }
                    </div>
                ))
        )
    }

    return (
        <div>
           <div className="board">
            
            {show()} 
            </div>
        </div>
    )

}

export default Board;

    
