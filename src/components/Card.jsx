import React from 'react'
import "../styles/Card.css"
import Avatar from './Avatar';
import transFormString from "../utils/transformString.js"
import { priorityMapping } from '../utils/mapping';
import { userMapping } from '../utils/mapping';

const Card = (props) => {


    const { grouping, title, id, name, priority, status, tag } = props;





    return (
        <div className='card-container'>

            <div className='id-and-avatar-container'>

                <div className='id-container'>
                    {id}
                </div>

                {
                    grouping !== "user" ? (
                        <div className='avatar-container'>
                            <Avatar name={userMapping[name]} />
                        </div>

                    ) : null

                }



            </div>


            <div className='status-and-title-container'>



                {
                    grouping !== "status" ? (
                        <div className='status-icon-container'>
                            <img className='status-image-tag' src={`/status-icons/${transFormString(status)}.svg`} alt='icon' />
                        </div>

                    ) : null

                }





                <div className='title-container'>
                    {title}
                </div>

            </div>

            <div className='priority-and-featureRequest-container'>

                {
                    grouping !== "priority" ? (
                        <div className='priority-icon-container'>

                            <img className='priority-image-tag' src={`/priority-icons/${transFormString(priorityMapping[priority])}.svg`} alt='icon' />

                        </div>

                    ) : null

                }


                <div className='feature-request-container'>

                    <div className='feature-request-icon-container' />

                    <div className='feature-request-text-wrapper'>
                        {tag[0]}
                    </div>

                </div>



            </div>

        </div>
    )
}

export default Card