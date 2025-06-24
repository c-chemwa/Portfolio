export default {
  name: 'musicProject',
  title: 'Music Project',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
    { name: 'coverImage', type: 'image', title: 'Cover Image' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'spotifyLink', type: 'url', title: 'Spotify Link' },
    { name: 'appleMusicLink', type: 'url', title: 'Apple Music Link' },
    { name: 'featured', type: 'boolean', title: 'Featured?' }
  ]
}