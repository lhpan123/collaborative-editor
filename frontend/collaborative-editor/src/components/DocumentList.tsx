import React from 'react'
import { Link } from 'react-router-dom'

interface Document {
  id: number
  title: string
}

interface Props {
  documents: Document[]
}

const DocumentList: React.FC<Props> = ({ documents }) => {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Documents</h2>
      <ul className="space-y-2">
        {documents.map((doc) => (
          <li key={doc.id} className="p-4 bg-white rounded shadow flex justify-between items-center">
            <span>{doc.title}</span>
            <Link to={`/editor/${doc.id}`} className="text-blue-500 hover:underline">
              Edit
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DocumentList
