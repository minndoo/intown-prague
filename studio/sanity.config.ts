import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import type {StructureResolver} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {DocumentIcon, CogIcon} from '@sanity/icons'
import {schemaTypes} from './schemaTypes'

const SINGLETONS = ['landingPage', 'siteSettings']

const structure: StructureResolver = (S) =>
  S.list()
    .title('InTown')
    .items([
      S.listItem()
        .title('Landing Page')
        .icon(DocumentIcon)
        .child(S.document().schemaType('landingPage').documentId('landingPage')),
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !SINGLETONS.includes(item.getId() as string),
      ),
    ])

export default defineConfig({
  name: 'default',
  title: 'InTown',

  projectId: 'hqky80t4',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
