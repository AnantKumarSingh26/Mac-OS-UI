import React from 'react'
import MacWindows from './MacWindows'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierLakesideDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import notesText from '../../assets/notes.txt?raw'
import './notes.scss'
const Notes = () => {
  return (
    <MacWindows>
      <div className="note-window">
        <SyntaxHighlighter language='typescript' style={atelierLakesideDark}>
          {notesText}
        </SyntaxHighlighter>
      </div>
    </MacWindows>
  )
}

export default Notes
