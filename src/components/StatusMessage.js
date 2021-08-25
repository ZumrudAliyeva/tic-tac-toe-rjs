import React from 'react'

const StatusMessage = ({winner, current}) => {

// const message = winner ? `Winner is ${winner}` :
// `Next player is ${current.isXNext ? 'x' : 'o'}`
const noMoveLeft = current.board.every((el)=> el !==null)

    return (<h2>
    {winner && `Winner is ${winner}`}
    {!winner && !noMoveLeft && `Next player is ${current.isXNext ? 'x' : 'o'}`}
    {!winner && noMoveLeft && 'x and o tied'}
    </h2>)
}

export default StatusMessage
