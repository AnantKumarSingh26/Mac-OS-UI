import React from 'react'
import MacWindows from './MacWindows'
import './Spotify.scss'

const Spotify = () => {
    return (
        <MacWindows>

            <div className="Spotify">
                    <iframe data-testid="embed-iframe" style={{borderRadius : "12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZEVXbMWDif5SCBJq?utm_source=generator&theme=0&si=eb46806a3f8e4835" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </MacWindows>
    )
}

export default Spotify