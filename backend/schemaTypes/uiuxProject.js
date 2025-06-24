export default {
  name: 'uiuxProject',
  title: 'UI/UX Project',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
    { name: 'coverImage', type: 'image', title: 'Cover Image' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'projectLink', type: 'url', title: 'Project Link' },
    { name: 'featured', type: 'boolean', title: 'Featured?' }
  ]
}