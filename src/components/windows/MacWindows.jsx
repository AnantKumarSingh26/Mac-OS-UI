import React from 'react'
import { Rnd } from 'react-rnd'
import './window.scss'


const MacWindows = () => {
    return (
        <Rnd
            className="window"
            default={{
                x: 120,
                y: 120,
                width: 420,
                height: 240,
            }}
            bounds="parent"
            dragHandleClassName="window__titlebar"
        >
            <div className="window__titlebar">
                <span className="window__dot" />
                <span className="window__dot" />
                <span className="window__dot" />
            </div>
            <div className="window__body">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores enim recusandae quod blanditiis corporis, provident dolor perspiciatis consectetur molestias, porro ipsam earum, est exercitationem odit.</p>
            </div>
        </Rnd>
    )
}

export default MacWindows
