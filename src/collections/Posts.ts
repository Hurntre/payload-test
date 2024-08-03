import { CollectionConfig } from 'payload/types'

const Posts: CollectionConfig = {
  slug: 'posts',
  auth: false,
  fields: [
    {
        name: 'title',
        label: 'Title',
        type: 'text',
        required: true,
    },
    {
        name: 'body',
        label: 'Body',
        type: 'richText',
        required: true,
    },
    {
        name: 'image',
        label: 'Hero Image',
        type: 'relationship',
        relationTo: 'media',
        hasMany: false,
    }
  ],
}

export default Posts
