import React from 'react'
import DocumentList from '../components/DocumentList'

const sampleDocuments = [
  { id: 1, title: 'Document 1' },
  { id: 2, title: 'Document 2' },
  { id: 3, title: 'Document 3' },
]

const DocumentsPage: React.FC = () => {
  return <DocumentList documents={sampleDocuments} />
}

export default DocumentsPage
