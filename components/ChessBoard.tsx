
import React from 'react';

const INITIAL_PIECES: Record<string, string> = {
  '0,0': '♜', '0,1': '♞', '0,2': '♝', '0,3': '♛', '0,4': '♚', '0,5': '♝', '0,6': '♞', '0,7': '♜',
  '1,0': '♟', '1,1': '♟', '1,2': '♟', '1,3': '♟', '1,4': '♟', '1,5': '♟', '1,6': '♟', '1,7': '♟',
  '6,0': '♙', '6,1': '♙', '6,2': '♙', '6,3': '♙', '6,4': '♙', '6,5': '♙', '6,6': '♙', '6,7': '♙',
  '7,0': '♖', '7,1': '♘', '7,2': '♗', '7,3': '♕', '7,4': '♔', '7,5': '♗', '7,6': '♘', '7,7': '♖'
};

const ChessBoard: React.FC = () => {
  return (
    <div className="chess-grid w-full rounded-lg overflow-hidden border-4 border-chess-brown/10 shadow-2xl">
      {Array.from({ length: 64 }).map((_, i) => {
        const row = Math.floor(i / 8);
        const col = i % 8;
        const isDark = (row + col) % 2 === 1;
        const piece = INITIAL_PIECES[`${row},${col}`];

        return (
          <div
            key={i}
            className={`flex items-center justify-center text-3xl md:text-4xl select-none ${
              isDark ? 'bg-board-dark' : 'bg-board-light'
            } ${piece ? 'cursor-pointer hover:bg-primary/20' : ''}`}
          >
            {piece && (
              <span className={`${row < 2 ? 'text-black' : 'text-white'} drop-shadow-md`}>
                {piece}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ChessBoard;
