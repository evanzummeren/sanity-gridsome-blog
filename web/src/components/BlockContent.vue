<template>
  <portable-text
    :blocks="blocks"
    :serializers="serializers"
    :projectId="$static.metadata.sanityOptions.projectId"
    :dataset="$static.metadata.sanityOptions.dataset"
  />
</template>

<script>
import PortableText from 'sanity-blocks-vue-component'
import getYouTubeID from 'get-youtube-id'

export default {
  props: {
    blocks: Array
  },
  components: {
    PortableText
  },
  data() {
    return {
      serializers: {
        types: {
          mainImage: ({ node }) => (
            <figure>
              <img
                src={this.$urlForImage(node, this.$static.metadata.sanityOptions)
                  .auto('format')
                  .url()}
                alt={node.alt}
              />
              <figcaption>{node.caption}</figcaption>
            </figure>
          ),
          youtube: ({ node }) => {
            const id = getYouTubeID(node.url);
            const url = `https://www.youtube.com/embed/${id}`
            if(!id) { 
              return <div>Missing YouTube url</div>
            }

            return (
              <iframe 
                width="100%" 
                height="400" 
                src={ url }
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
            )
          },
          giphy: ({ node }) => {
            if(!node.id) { 
              return <div>Invalid Giphy Id</div>
            }

            return (
              <iframe 
                title="Giphy Embed"
                src={`https://giphy.com/embed/${node.id}`}
                width="100%" 
                height="400" 
                frameBorder="0">
              </iframe>
            )
          }
        }
      }
    }
  }
}
</script>

<static-query>
  {
    metadata{
    sanityOptions{
      projectId
      dataset
    }
  }
}
</static-query>
