import React from 'react'
import { Rnd } from 'react-rnd'
import './window.scss'


const MacWindows = ({ children }) => {
    return (
        <Rnd
            className="window_frame"
            default={{
                x: 120,
                y: 60,
                width: 820,
                height: 520,
            }}
            bounds="window"
            dragHandleClassName="window_titlebar"
        >
            <div className="window">
                <div className="window_titlebar">
                    <span className="window_dot red_dot" />
                    <span className="window_dot yellow_dot" />
                    <span className="window_dot green_dot" />
                    <span className='text'>Anant-Dir-SSA</span>
                </div>
                <div className="window_body">
                    {children}
                </div>
            </div>
        </Rnd>
    );
};

export default MacWindows;
