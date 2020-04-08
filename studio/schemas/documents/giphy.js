import React from 'react'

const GiphyPreview = ({value}) => {
  if(!value.id) {
    return <div>Can't find Giphy</div>
  }

  return (
    <iframe 
      title="Giphy Embed"
      src={`https://giphy.com/embed/${value.id}`}
      width="480" 
      height="270" 
      frameBorder="0">
    </iframe>
)}

export default {
  name: 'giphy',
  type: 'object',
  title: 'Giphy',
  fields: [
    {
      name: 'id',
      type: 'string',
      title: 'ID'
    }
  ],
  preview: {
    select: {
      id: 'id'
    },
    component: GiphyPreview
  }
}