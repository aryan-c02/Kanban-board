import React, { useEffect, useState } from 'react'
import { statusArray, priorityArray, userArray } from '../utils/arrays';
import Board from './Board';
import "../styles/TaskBoard.css"
import { priorityMapping, userMapping } from '../utils/mapping';



const TaskBoard = (props) => {

    const { grouping, ordering, users, tickets } = props;
    const [array, setArray] = useState([]);

    // initilazing array on the basis of grouping value
    const IntializeArray = () => {
        if (grouping == "status") {
            setArray(statusArray);
        }
        else if (grouping == "priority") {
            setArray(priorityArray);
        }
        else if (grouping == "user") {
            setArray(userArray);
        }
    }

    useEffect(() => {
        IntializeArray()
    }, [grouping]);




    const sortedArrays = {};

    if (grouping == "priority") {
        priorityArray.forEach((value) => {
            const subArray = tickets.filter((item) => priorityMapping[item.priority] == value);
            sortedArrays[value] = subArray;
        })
    }
    else if (grouping == "status") {
        statusArray.forEach((value) => {
            const subArray = tickets.filter((item) => item.status == value);
            sortedArrays[value] = subArray;
        })
    }
    else if (grouping == "user") {
        userArray.forEach((value) => {
            const subArray = tickets.filter((item) => userMapping[item.userId] == value);
            sortedArrays[value] = subArray;
        })
    }





    function sortByOrderingValue(data, ordering) {

        const customCompare = (a, b) => {
            if (ordering === 'priority') {
                return -1 * a.priority + b.priority;
            } else if (ordering === 'title') {
                return userMapping[a.userId].localeCompare(userMapping[b.userId]);
            }
        };
        if (data != null) {
            return data.sort(customCompare);
        }
    }




    return (

        <div className='task-board-container' >

            {
                <div className='board-wrapper'>
                    {
                        array && array.map((item, key) => {
                            return (
                                <div >
                                    <Board heading={item} key={key} users={users}
                                        tickets={sortByOrderingValue(sortedArrays[item], ordering)} grouping={grouping}
                                        ordering={ordering} />
                                </div>
                            )
                        })
                    }
                </div>
            }

        </div>



    )
}

export default TaskBoard