import React from 'react'
import getYouTubeID from 'get-youtube-id'

const YouTubePreview = ({value}) => {
  const id = getYouTubeID(value.url);
  const url = `https://www.youtube.com/embed/${id}`
  if(!id) { 
    return <div>Missing YouTube url</div>
  }
  return (
    <iframe 
      title="YouTube preview"
      width="420"
      height="236" 
      src={url}
      frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
    </iframe>
)}

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL'
    }
  ],
  preview: {
    select: {
      url: 'url'
    },
    component: YouTubePreview
  }
}