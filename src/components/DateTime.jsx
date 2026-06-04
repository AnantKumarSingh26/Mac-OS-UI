import React, { useState, useEffect } from 'react'

const DateTime = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    // Format the parts manually to get the exact lowercase string
    const weekday = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()
    const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
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