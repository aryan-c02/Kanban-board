import React from 'react';
import '../styles/Avatar.css'

function Avatar({ name }) {

    const getInitials = (name) => {
        let initials = "";
        name.split(" ").forEach((item, len) => {
            if (len < 2) initials += item[0].toUpperCase();
        });
        return initials;
    };


    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };


    const color = getRandomColor();

    return (
        <div className="avatar" style={{ backgroundColor: color }}>
            {getInitials(name)}
        </div>
    );
}

export default Avatar;