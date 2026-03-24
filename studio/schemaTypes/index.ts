// Documents
import {landingPage} from './documents/landingPage'
import {siteSettings} from './documents/siteSettings'

// Hero
import {heroSection} from './objects/heroSection'

// Sections
import {introSection} from './objects/sections/introSection'
import {featureGridSection} from './objects/sections/featureGridSection'
import {imageTextSection} from './objects/sections/imageTextSection'
import {statsSection} from './objects/sections/statsSection'
import {gallerySection} from './objects/sections/gallerySection'
import {testimonialSection} from './objects/sections/testimonialSection'
import {faqSection} from './objects/sections/faqSection'
import {ctaSection} from './objects/sections/ctaSection'
import {contactSection} from './objects/sections/contactSection'

// Primitives
import {ctaLink} from './objects/primitives/ctaLink'
import {imageWithAlt} from './objects/primitives/imageWithAlt'
import {seo} from './objects/primitives/seo'
import {statItem} from './objects/primitives/statItem'
import {faqItem} from './objects/primitives/faqItem'
import {testimonialItem} from './objects/primitives/testimonialItem'
import {contactItem} from './objects/primitives/contactItem'
import {featureCard} from './objects/primitives/featureCard'
import {socialLink} from './objects/primitives/socialLink'

// Legacy
import {postType} from './postType'

export const schemaTypes = [
  // Documents
  landingPage,
  siteSettings,

  // Hero
  heroSection,

  // Sections
  introSection,
  featureGridSection,
  imageTextSection,
  statsSection,
  gallerySection,
  testimonialSection,
  faqSection,
  ctaSection,
  contactSection,

  // Primitives
  ctaLink,
  imageWithAlt,
  seo,
  statItem,
  faqItem,
  testimonialItem,
  contactItem,
  featureCard,
  socialLink,

  // Legacy
  postType,
]
