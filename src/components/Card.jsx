import React from 'react'
import "../styles/Card.css"

const Card = (props) => {

    const grouping = ""


    return (
        <div className='card-container'>

            <div className='id-and-avatar-container'>

                <div className='id-container'>

                    CAM-11


                </div>

                {
                    grouping !== "user" ? (
                        <div className='avatar-container'>
                            <img className='avatar-image-tag' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARcAAAC1CAMAAABCrku3AAAAk1BMVEX///8Al+Xn6Onv7+/7+/sAleUAkeX09PQAjuMAk+Tx7ekAkOTp6enr7O3l5uju6+nL5fhvteeAvOfy+v5+v+76/f+WyvEuoefY6/rI4/g+pebN3elPquZst+222vWTw+fr9f200uiJxO+mzOjD2ei83faezvJCqemp0/QOm+abzvLH2uja5Ol0uOe51Ojj8fwAieK73aEhAAAHs0lEQVR4nO2da3eiOhRAg/IKIOlrpFq12ofVGVvn//+6m4BKgkfLrAbIDWd/mLXaqoQ9J6+TBAlBEASxm6DrAhjKsOsCGAp6gUEvMOgFBr3AoBcY9AKDXmDQCwx6gUEvMOgFBr3AoBcY9AKDXmDQCwx6gUEvMOgFBr3AoBcY9AKDXmDQC4wlXhLdH9iYF+0lbfdyTXlpWQshA70f15AXzaVs/5LNeOlAi+aLNuKlEy16624TXlpvWxq4cANeOtOiM1D1e+moEmm+uHYvnWrRF6y6vXSsRZsYV8/HHOlcS6fN20WMKJMRhVAwIFoEpokxRItpYozRYpYYg7SYJMackuToL879ZP0wn88f1je//uFdRkWLQK+Y+3UW+pR6nkdpHH9s6qoxTotWMfcPMfWcEs+nL7XMGKhFo5hxTJ0qlG6+f6ORWnSJWWb+mRVB/PFdyBjW5JboKNijUoNkPGd59Z2GRovg52IewwtWhBi6vPJOg7X8/DjeY3xZCxezvVyVrD4IeHNVCxcz67qEnXBzVomqbU38u+sydsBE1UJ9Zzqb8rGLImbZdSlbR9Xi0c+nKGIR+3Mr99vevOtito2qhX7sWDIQJNFTJoVMfN91QdtlojS5/m1UWMnNsFkphq67LmmrvIcVLQOJhGVlRcq6LmqbXNXCxTyVbUzYo4q0ULV8HrWMRofaFM1PPbY/6bq0rVHRcldoGRZrSu5QBMzXKWD608CAWkblSpsrgubkxXvosKhtAmpR12VHg2h78tKTEUwNLXyiHmU98/JYRwtxmdMvL78cRcsLrIWQ3WnYR1/aL2X7PMizwvj5khayOL2uTqL3f88+rKeFTPs1fpl79bS8l7OneNR2IdtnGVa1JGA+clnWNm8WtV3K9hmX9+vnWtgX9LKl3DS/WnLE4hqZHAZiGvQaOufNx1JOZ3qJ5V4e9+S+bDX8HR/ss1f+i7A6zl96khZ6x6zO/JPJXzn9T0VmIVnlzY0/VVZDlmryezDQvEXRLBbhlpDNqXnxv3i4BMeqIi8TKdHixCuWdlfo5tmE3ofc7PJqlAanzljKye2VYBHTBJu76U2YL5G9lIPYZBDIPx7nQKoWKhpni5sXMYUW0z9JhAgDaU4QFr3SXlk7olPG+6yOy94gm9ApllTlekTk5sZxtuKFVS1JYmC4BMMa1Okr1sUgN5NF0Heijn79NZG78ZOWi+HiBjVooitz61Djc34f7t6T++kiqXIrxQf/M5EbFzoT62zp5StoKl5XjI9BES/JsFz9iPcij5uVJnweQQ9eRQs8qbSB36e64k9IMC3DY8prapJK8cLbn3df0pInw7suflOsyyaEvpDgWVpfnZPhgK3KCOIVaRmrWozdQPdTxnIaakuCnbRVId64fOJYRlD8SAjtR7S8KB3M333A5JbW/yVmjmXXvSCHZel+aQkXxB3IAeMvAnkhmq4Jm4mG15/3SUv8yn81YM+lGN7g8Nun0o+B8OLPI6u1jCtamCvWEVnZNYsFkEEie3G5F9u1qDs54tdIjEV4xdmVDcqGD2FSX9Y082zXsoyrWvIhfTpgb0cT+Q6xP6UXrimzXYu0/iMMrMTdijH9kHdBb0Xmyb8Tr5OmknzAG35armURK1pEB5PmM2OxBrAT+wr92zxxK71qT/bPlmshW0mLL2nhLYzYPvcZi61jQ2XhZBvk4WS1Fnl/u6KFkHyjWPQm9jEM5dfR20D0V1ZrkZdbK1r42K7Yccn/cR/lUd5b4cVmLUSaHuYbXFIp6+amh02GTDlMkkXCS2q1FumGt6yi5RgxUoddhFXCu6vU2nxLjpSvfGZVLSTvlAbsSzkGMI0GLnGNS+bqpcz7+0/JuRbe76Sqlvx1HRS0ZcpmlzJIC6eihYeV3VUop/SyjWAtN9VTE9cy3NYgewG1qGds8kmRtTlLic9ycxx4uxPg1EQPwkUa3Yuk7RnQYRKrxy1HFnKy6Yz3s7bl6vqZRTxJ056zE9BQtMCNs3VE5X2f7WIHT2T1oI8WBJ/lBCkeK38CT2T1onHhDP9ITUgs7ysc1zo1YStBJKcx6fb98PuJ+kiTvmkhQfKm9jnefLwez534bPNcr7QQN43m6iOAPEqrz3npn5Y8kbB1rhP3UAsZKiegIfwrh0nsxU0HbHXlSUBXz9jYzOiw+R+1qIjkNvu68Egtz1/1VEuxEsR2Myhk/OmO9VVLkdtOoq/M9yqxkq3yR5rYPVW8fHPFMlHCvmbUP9Qnj/r+bMXyYPmxFqO1Xks+BsX6WRKlq7tZ5lAnm92tdofH32iIFoPXD67nZIPjwmLCWCRgLDk8xkRLJTJWzHep6sPCIoCeSmBoqrxGsUYpZGWkK2lpZMTU+t9yk3MtGltMA8XUDeJAiZl0pLcfMU7Mv9TtYDgq6s9Qf+dqmBhzmjyjxJijxSgxJmkxSIxZWowRY5oWQ8SYp8WIMmkqgubkS+di8PvVmr28Xd/Hpy9crfr+Rvy+z8Yv3ETSu6OIwe8TbuGi1nz/NH5fOQh+v307l2tssbHzke/P6Oci7PegFxj0AoNeYNALDHqBQS8w6AUGvcCgFxj0AoNeYNALDHqBQS8w6AUGvcCgFxj0AoNeYNALDHqBQS8w6AUGvcCgFwRBkH7zH9NwWHfFyapFAAAAAElFTkSuQmCC" alt='avatar' />
                        </div>

                    ) :
                        (<div>

                        </div>)
                }



            </div>


            <div className='status-and-title-container'>



                {
                    grouping !== "status" ? (
                        <div className='status-icon-container'>
                            <img className='status-image-tag' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARcAAAC1CAMAAABCrku3AAAAk1BMVEX///8Al+Xn6Onv7+/7+/sAleUAkeX09PQAjuMAk+Tx7ekAkOTp6enr7O3l5uju6+nL5fhvteeAvOfy+v5+v+76/f+WyvEuoefY6/rI4/g+pebN3elPquZst+222vWTw+fr9f200uiJxO+mzOjD2ei83faezvJCqemp0/QOm+abzvLH2uja5Ol0uOe51Ojj8fwAieK73aEhAAAHs0lEQVR4nO2da3eiOhRAg/IKIOlrpFq12ofVGVvn//+6m4BKgkfLrAbIDWd/mLXaqoQ9J6+TBAlBEASxm6DrAhjKsOsCGAp6gUEvMOgFBr3AoBcY9AKDXmDQCwx6gUEvMOgFBr3AoBcY9AKDXmDQCwx6gUEvMOgFBr3AoBcY9AKDXmDQC4wlXhLdH9iYF+0lbfdyTXlpWQshA70f15AXzaVs/5LNeOlAi+aLNuKlEy16624TXlpvWxq4cANeOtOiM1D1e+moEmm+uHYvnWrRF6y6vXSsRZsYV8/HHOlcS6fN20WMKJMRhVAwIFoEpokxRItpYozRYpYYg7SYJMackuToL879ZP0wn88f1je//uFdRkWLQK+Y+3UW+pR6nkdpHH9s6qoxTotWMfcPMfWcEs+nL7XMGKhFo5hxTJ0qlG6+f6ORWnSJWWb+mRVB/PFdyBjW5JboKNijUoNkPGd59Z2GRovg52IewwtWhBi6vPJOg7X8/DjeY3xZCxezvVyVrD4IeHNVCxcz67qEnXBzVomqbU38u+sydsBE1UJ9Zzqb8rGLImbZdSlbR9Xi0c+nKGIR+3Mr99vevOtito2qhX7sWDIQJNFTJoVMfN91QdtlojS5/m1UWMnNsFkphq67LmmrvIcVLQOJhGVlRcq6LmqbXNXCxTyVbUzYo4q0ULV8HrWMRofaFM1PPbY/6bq0rVHRcldoGRZrSu5QBMzXKWD608CAWkblSpsrgubkxXvosKhtAmpR12VHg2h78tKTEUwNLXyiHmU98/JYRwtxmdMvL78cRcsLrIWQ3WnYR1/aL2X7PMizwvj5khayOL2uTqL3f88+rKeFTPs1fpl79bS8l7OneNR2IdtnGVa1JGA+clnWNm8WtV3K9hmX9+vnWtgX9LKl3DS/WnLE4hqZHAZiGvQaOufNx1JOZ3qJ5V4e9+S+bDX8HR/ss1f+i7A6zl96khZ6x6zO/JPJXzn9T0VmIVnlzY0/VVZDlmryezDQvEXRLBbhlpDNqXnxv3i4BMeqIi8TKdHixCuWdlfo5tmE3ofc7PJqlAanzljKye2VYBHTBJu76U2YL5G9lIPYZBDIPx7nQKoWKhpni5sXMYUW0z9JhAgDaU4QFr3SXlk7olPG+6yOy94gm9ApllTlekTk5sZxtuKFVS1JYmC4BMMa1Okr1sUgN5NF0Heijn79NZG78ZOWi+HiBjVooitz61Djc34f7t6T++kiqXIrxQf/M5EbFzoT62zp5StoKl5XjI9BES/JsFz9iPcij5uVJnweQQ9eRQs8qbSB36e64k9IMC3DY8prapJK8cLbn3df0pInw7suflOsyyaEvpDgWVpfnZPhgK3KCOIVaRmrWozdQPdTxnIaakuCnbRVId64fOJYRlD8SAjtR7S8KB3M333A5JbW/yVmjmXXvSCHZel+aQkXxB3IAeMvAnkhmq4Jm4mG15/3SUv8yn81YM+lGN7g8Nun0o+B8OLPI6u1jCtamCvWEVnZNYsFkEEie3G5F9u1qDs54tdIjEV4xdmVDcqGD2FSX9Y082zXsoyrWvIhfTpgb0cT+Q6xP6UXrimzXYu0/iMMrMTdijH9kHdBb0Xmyb8Tr5OmknzAG35armURK1pEB5PmM2OxBrAT+wr92zxxK71qT/bPlmshW0mLL2nhLYzYPvcZi61jQ2XhZBvk4WS1Fnl/u6KFkHyjWPQm9jEM5dfR20D0V1ZrkZdbK1r42K7Yccn/cR/lUd5b4cVmLUSaHuYbXFIp6+amh02GTDlMkkXCS2q1FumGt6yi5RgxUoddhFXCu6vU2nxLjpSvfGZVLSTvlAbsSzkGMI0GLnGNS+bqpcz7+0/JuRbe76Sqlvx1HRS0ZcpmlzJIC6eihYeV3VUop/SyjWAtN9VTE9cy3NYgewG1qGds8kmRtTlLic9ycxx4uxPg1EQPwkUa3Yuk7RnQYRKrxy1HFnKy6Yz3s7bl6vqZRTxJ056zE9BQtMCNs3VE5X2f7WIHT2T1oI8WBJ/lBCkeK38CT2T1onHhDP9ITUgs7ysc1zo1YStBJKcx6fb98PuJ+kiTvmkhQfKm9jnefLwez534bPNcr7QQN43m6iOAPEqrz3npn5Y8kbB1rhP3UAsZKiegIfwrh0nsxU0HbHXlSUBXz9jYzOiw+R+1qIjkNvu68Egtz1/1VEuxEsR2Myhk/OmO9VVLkdtOoq/M9yqxkq3yR5rYPVW8fHPFMlHCvmbUP9Qnj/r+bMXyYPmxFqO1Xks+BsX6WRKlq7tZ5lAnm92tdofH32iIFoPXD67nZIPjwmLCWCRgLDk8xkRLJTJWzHep6sPCIoCeSmBoqrxGsUYpZGWkK2lpZMTU+t9yk3MtGltMA8XUDeJAiZl0pLcfMU7Mv9TtYDgq6s9Qf+dqmBhzmjyjxJijxSgxJmkxSIxZWowRY5oWQ8SYp8WIMmkqgubkS+di8PvVmr28Xd/Hpy9crfr+Rvy+z8Yv3ETSu6OIwe8TbuGi1nz/NH5fOQh+v307l2tssbHzke/P6Oci7PegFxj0AoNeYNALDHqBQS8w6AUGvcCgFxj0AoNeYNALDHqBQS8w6AUGvcCgFxj0AoNeYNALDHqBQS8w6AUGvcCgFwRBkH7zH9NwWHfFyapFAAAAAElFTkSuQmCC" alt='avatar' />
                        </div>

                    ) :
                        (<div>

                        </div>)
                }





                <div className='title-container'>
                    Add Multi-Language Support- Enable
                </div>

            </div>

            <div className='priority-and-featureRequest-container'>

                {
                    grouping !== "priority" ? (
                        <div className='priority-icon-container'>

                            <img className='priority-image-tag' src="data:image/png;base64,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" alt='avatar' />



                        </div>

                    ) :
                        null
                }


                <div className='feature-request-container'>

                    <div className='feature-request-icon-container'>

                    </div>

                    <div className='feature-request-text-wrapper'>
                        Feature Request
                    </div>

                </div>



            </div>

        </div>
    )
}

export default Card