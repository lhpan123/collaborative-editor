import React from 'react'
import { useParams } from 'react-router-dom'
import Editor from '../components/Editor'

const EditorPage: React.FC = () => {
  const { id } = useParams()
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Editing Document ID: {id}</h2>
      <Editor />
    </div>
  )
}

export default EditorPage
