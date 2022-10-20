import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/figure";

export class Cell{
    readonly x: number;
    readonly y: number;
    readonly colors: Colors;
    figure: Figure | null;
    hoard: Board;
    available: boolean;
    id: number;

    constructor (board: Board, x: number, y: number, colors: Colors, figure: Figure | null) {
        
    }
}