export default {
  name: 'filmProject',
  title: 'Film Project',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
    { name: 'coverImage', type: 'image', title: 'Cover Image' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'videoUrl', type: 'url', title: 'Video URL (YouTube/Vimeo)' },
    { name: 'featured', type: 'boolean', title: 'Featured?' }
  ]
}