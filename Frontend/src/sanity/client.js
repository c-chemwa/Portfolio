import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'kxeoaq0n',
  dataset: 'production',
  apiVersion: '2025-06-24',
  useCdn: true
});