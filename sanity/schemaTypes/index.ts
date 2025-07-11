import { type SchemaTypeDefinition } from 'sanity'

// Import both schemas
import { postType } from './postType'
import { project } from './project'  // make sure you exported it properly

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, project],
}
