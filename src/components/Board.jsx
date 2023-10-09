import React from 'react'
import "../styles/Board.css"
import Card from './Card'
import Avatar from './Avatar';
import transFormString from "../utils/transformString.js"
import { useState, useEffect } from 'react';
import { statusArray, priorityArray } from '../utils/arrays';
import { priorityMapping, userMapping } from '../utils/mapping';

const Board = (props) => {

    const { heading, key, users, tickets, grouping, ordering } = props;

    let sortedData = {};


    if (tickets != null) {

        function sortByOrderingValue(data, ordering) {

            const customCompare = (a, b) => {
                if (ordering === 'priority') {
                    return -1 * a.priority + b.priority;
                } else if (ordering === 'title') {
                    return userMapping[a.userId].localeCompare(userMapping[b.userId]);
                }

            };
            return data.sort(customCompare);
        }


        sortedData = sortByOrderingValue(tickets, ordering);
    }


    console.log(sortedData);



    function sortByPriorityDescending(data) {
        return data.sort((a, b) => b.priority - a.priority);
    }


    return (
        <div className='board'>

            <div className='board-top'>
                {grouping !== "user" ? (<div className='title-icon-container'>
                    <img className='moreHorizontal-wrapper' src={`/${grouping}-icons/${transFormString(heading)}.svg`} alt='icon' />
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









            {

                tickets && tickets.map((item) => (
                    <div className='board-card-container' key={item.id}>
                        <Card title={item.title} id={item.id}
                            grouping={grouping} name={item.userId}
                            priority={item.priority} status={item.status}
                            tag={item.tag} />
                    </div>
                ))

            }









        </div >
    )
}

export default Board