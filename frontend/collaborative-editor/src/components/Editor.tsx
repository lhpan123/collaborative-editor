import React, { useState } from 'react'

interface Props {
  initialContent?: string
}

const Editor: React.FC<Props> = ({ initialContent = '' }) => {
  const [content, setContent] = useState(initialContent)

  return (
    <textarea
      className="w-full h-[400px] p-4 border rounded mt-4"
      value={content}
      onChange={(e) => setContent(e.target.value)}
    />
  )
}

export default Editor
