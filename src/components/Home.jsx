import React from 'react'
import { useState, useEffect } from 'react'
import "../styles/Home.css"
import Dropdown from "../components/Dropdown.jsx"
import Card from './Card'
import TaskBoard from './TaskBoard'

import Board from './Board'

const Home = () => {

    // defining variables required

    const [isLoading, setIsLoading] = useState(true);
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);

    const [grouping, setGrouping] = useState(
        localStorage.getItem("grouping") || "status"
    );
    const [ordering, setOrdering] = useState(
        localStorage.getItem("ordering") || "priority"
    );



    const url = "https://api.quicksell.co/v1/internal/frontend-assignment";

    // fetching Data from QuickSell Api

    const fetchData = async (url) => {

        try {

            const res = await fetch(url);
            const data = await res.json();

            const { users: fetchedUsers, tickets: fetchedTickets } = data;
            setUsers(fetchedUsers);
            setTickets(fetchedTickets);
            setIsLoading(false);

        } catch (error) {

            console.log(error, "Error while fteching data from API");
            setIsLoading(false);
        }

    }

    useEffect(() => {
        fetchData(url);

    }, []);




    return (
        <div className='home-container'>

            <div className='top-bar-container'>
                <Dropdown setGrouping={setGrouping}
                    setOrdering={setOrdering}
                    grouping={grouping}
                    ordering={ordering} />
            </div>

            {
                isLoading ? null : (
                    <div className='task-container'>
                        <TaskBoard users={users}
                            tickets={tickets}
                            grouping={grouping}
                            ordering={ordering} />
                    </div>
                )
            }








        </div>
    )
}

export default Home