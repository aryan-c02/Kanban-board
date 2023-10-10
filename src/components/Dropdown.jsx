import React from 'react'
import { useState, useEffect, useRef } from 'react'
import "../styles/Dropdown.css"


const Dropdown = (props) => {

    const { grouping, ordering, setGrouping, setOrdering } = props;
    const [isActive, setIsActive] = useState(false);
    const buttonRef = useRef(null);
    const divRef = useRef(null);




    const buttonClickHandler = () => setIsActive(!isActive);


    const groupingChangeHandler = (e) => {

        localStorage.setItem(
            'grouping',
            e.target.value
        );
        setGrouping(e.target.value);

    }

    const orderingChangeHandler = (e) => {

        localStorage.setItem(
            'ordering',
            e.target.value
        );
        setOrdering(e.target.value);

    }


    useEffect(() => {

        const handleClickOutside = (event) => {
            if (
                isActive && divRef.current &&
                !divRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsActive(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isActive]);




    return (
        <div className='dropdown-container'>

            <div className='button-container'>
                <button ref={buttonRef} onClick={buttonClickHandler} className='display-button' >

                    <div className='icon-one-container' >
                        <img className='icon-one-wrapper' src="/assests/filter-icon.png" alt='icon' />
                    </div>

                    <div className='display-text-wrapper' >
                        Display
                    </div>

                    <div className={isActive ? 'active-class' : 'inactive-class'} >
                        <img className="arrow-icon-container" src='/assests/arrowDown.png' alt='icon' />
                    </div>

                </button>
            </div>


            {
                isActive ? (<div ref={divRef} className='filter-container'>

                    <div className='grouping-container'>

                        <div className='grouping-text-wrapper'>
                            Grouping
                        </div>


                        <div className='grouping-select-wrapper' >
                            <select className='grouping-drop-list' value={grouping}
                                onChange={(e) => groupingChangeHandler(e)} >

                                <option value='status'>Status</option>
                                <option value='user'>User</option>
                                <option value='priority'>Priority</option>

                            </select>
                        </div>

                    </div>


                    <div className='ordering-container'>


                        <div className='ordering-text-wrapper'>
                            Ordering
                        </div>


                        <div className='ordering-select-wrapper' >
                            <select className='ordering-drop-list' value={ordering}
                                onChange={(e) => orderingChangeHandler(e)}>

                                <option value='priority'>Priority</option>
                                <option value='title'>Title</option>

                            </select>
                        </div>


                    </div>



                </div>) :
                    (<div />)
            }

        </div>
    )
}

export default Dropdown