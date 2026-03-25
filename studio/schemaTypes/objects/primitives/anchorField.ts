import {defineField} from 'sanity'
import {NavLinkSelect} from '../../../components/NavLinkSelect'

export const fragmentField = defineField({
  name: 'fragment',
  title: 'Navigation fragment',
  type: 'string',
  description: 'Links this section to a navigation link from Site Settings',
  components: {input: NavLinkSelect},
})
