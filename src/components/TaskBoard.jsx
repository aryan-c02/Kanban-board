import React, { useEffect, useState } from 'react'
import { statusArray, priorityArray, userArray } from '../utils/arrays';
import Board from './Board';
import "../styles/TaskBoard.css"
import Avatar from './Avatar';

const TaskBoard = (props) => {

    const { grouping, ordering, users, tickets } = props;
    const [array, setArray] = useState([]);

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



    console.log(grouping);

    return (

        <div >

            {

                <div className='board-wrapper'>
                    {
                        array && array.map((item, key) => {
                            return (
                                <div >

                                    <Board heading={item}
                                        key={key}
                                        users={users}
                                        tickets={tickets}
                                        grouping={grouping} />

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