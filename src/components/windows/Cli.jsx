import React from 'react'
import MacWindows from './MacWindows'
import Terminal from 'react-console-emulator'
import './cli.scss'

const commands = {
    about: {
        description: 'Show a short intro about this portfolio.',
        usage: 'about',
        fn: () => 'Hi, I am Anant Kumar Singh. This is my portfolio space built like a Mac terminal.'
    },
    projects: {
        description: 'List featured portfolio projects.',
        usage: 'projects',
        fn: () => 'Featured projects: Mac-OS UI portfolio, GitHub cards showcase, notes viewer, and more UI experiments.'
    },
    skills: {
        description: 'Show core tools and technologies.',
        usage: 'skills',
        fn: () => 'Skills: React, Vite, JavaScript, SCSS, API integration, UI building, and responsive layouts.'
    },
    contact: {
        description: 'Show contact details.',
        usage: 'contact',
        fn: () => 'Contact: email, GitHub, and social links are available in the portfolio sections.'
    },
    resume: {
        description: 'Open a short resume summary.',
        usage: 'resume',
        fn: () => 'Resume: Frontend developer focused on clean interfaces, smooth interactions, and practical UI systems.'
    },
    socials: {
        description: 'Show social profile hints.',
        usage: 'socials',
        fn: () => 'Socials: GitHub, LinkedIn, and other profile links can be wired here as real links later.'
    },
    funfact: {
        description: 'Show a fun portfolio fact.',
        usage: 'funfact',
        fn: () => 'Fun fact: this portfolio is styled like a desktop OS to make browsing feel playful.'
    },
    echo: {
        description: 'Echo a passed string.',
        usage: 'echo <string>',
        fn: (...args) => args.join(' ')
    }
}

const welcomeMessage = [
    'Welcome to Anant OS.',
    'Type help to list all available commands.',
    'Available commands:',
    'about - Show a short intro about this portfolio.',
    'projects - List featured portfolio projects.',
    'skills - Show core tools and technologies.',
    'contact - Show contact details.',
    'resume - Open a short resume summary.',
    'socials - Show social profile hints.',
    'funfact - Show a fun portfolio fact.',
    'echo - Echo a passed string.',
    'Built-in commands: help, clear'
]

const Cli = () => {
    return (
        <MacWindows>
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'anant@portfolio'}
                    promptLabelStyle={{ color: 'green' }}
                />
            </div>
        </MacWindows>
    )
}

export default Cli
