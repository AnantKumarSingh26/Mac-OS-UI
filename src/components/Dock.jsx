import React from 'react'
import './dock.scss'

const Dock = () => {
    return (
        <footer className='dock'>
            <div className="icon github"><img src="public\doc-icon\github.png" alt="" /></div>
            <div className="icon note"><img src="public\doc-icon\note.png" alt="" /></div>
            <div className="icon pdf"><img src="public\doc-icon\pdf.png" alt="" /></div>
            <div className="icon calender"><img src="public\doc-icon\calender.png" alt="" /></div>
            <div className="icon spotify"><img src="public\doc-icon\spotify.png" alt="" /></div>
            <div className="icon mail"><img src="public\doc-icon\mail.png" alt="" /></div>
            <div className="icon link"><img src="public\doc-icon\link.png" alt="" /></div>
            <div className="icon cli"><img src="public\doc-icon\cli.png" alt="" /></div>
        </footer>
    )
}

export default Dock