import React, { useState, useEffect } from 'react'

const DateTime = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    // Standard casing (e.g., Wed Jan 7) to match macOS style
    const weekday = date.toLocaleDateString('en-US', { weekday: 'short' })
    const month = date.toLocaleDateString('en-US', { month: 'short' })
    const day = date.getDate()
    const time = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    })

    return (
        <p>{`${weekday} ${month} ${day} ${time}`}</p>
    )
}

export default DateTime