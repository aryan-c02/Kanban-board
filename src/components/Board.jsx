import React from 'react'
import "../styles/Board.css"
import Card from './Card'
import Avatar from './Avatar';

const Board = (props) => {

    const { heading, key, users, tickets, grouping } = props;

    function transformString(heading) {
        const words = heading.split(' ');
        const transformedString = words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('');

        return transformedString;
    }

    console.log(grouping);


    return (
        <div className='board'>

            <div className='board-top'>
                {grouping !== "user" ? (<div className='title-icon-container'>
                    <img className='moreHorizontal-wrapper' src={`/${grouping}-icons/${transformString(heading)}.svg`} alt='icon' />
                </div>) :
                    (
                        <div className='avatar-container'>
                            <Avatar name={heading} />
                        </div>
                    )
                }

                <div className='board-top-title'>{heading}</div>
                <div>
                    <img className='moreHorizontal-wrapper' src="/assests/add.svg" />
                </div>
                <div>
                    <img className='moreHorizontal-wrapper' src="/assests/moreHorizontal.svg" />
                </div>
            </div>


            <div className='board-card-container'>

                <Card />
                <Card />


            </div>

        </div>
    )
}

export default Board