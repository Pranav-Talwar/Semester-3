import { useEffect } from 'react'
import React, {useContext}  from 'react'
import NoteContext from '../context/Notes/NoteContext'
export default function About() {
  const a = useContext(NoteContext)

  return (
    <div>
      this is about
    </div>
  )
}
