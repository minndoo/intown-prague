import { defineQuery } from "next-sanity";

export const landingPageQuery = defineQuery(`
  *[_id == "landingPage"][0]{
    _id,
    title,
    slug,
    heroSection {
      tagline,
      subtitle,
      backgroundImage {
        image {
          asset->{_id, url, metadata {dimensions}},
          hotspot,
          crop
        },
        alt
      },
    },
    sections[] {
      _key,
      _type,
      heading,
      fragment,
      // introSection
      _type == "introSection" => {
        body,
        image {
          image {
            asset->{_id, url, metadata {dimensions}},
            hotspot,
            crop
          },
          alt
        }
      },
      // featureGridSection
      _type == "featureGridSection" => {
        subtitle,
        features[] {
          _key,
          title,
          description,
          image {
            image {
              asset->{_id, url, metadata {dimensions}},
              hotspot,
              crop
            },
            alt
          }
        }
      },
      // imageTextSection
      _type == "imageTextSection" => {
        body,
        image {
          image {
            asset->{_id, url, metadata {dimensions}},
            hotspot,
            crop
          },
          alt
        },
        imagePosition
      },
      // statsSection
      _type == "statsSection" => {
        stats[] {
          _key,
          value,
          label
        }
      },
      // gallerySection
      _type == "gallerySection" => {
        images[] {
          _key,
          image {
            asset->{_id, url, metadata {dimensions}},
            hotspot,
            crop
          },
          alt
        }
      },
      // testimonialSection
      _type == "testimonialSection" => {
        testimonials[] {
          _key,
          quote,
          author,
          role,
          avatar {
            asset->{_id, url, metadata {dimensions}},
            hotspot,
            crop
          }
        }
      },
      // faqSection
      _type == "faqSection" => {
        items[] {
          _key,
          question,
          answer
        }
      },
      // ctaSection
      _type == "ctaSection" => {
        body,
        cta {
          label,
          linkType,
          href,
          path,
          fragment
        },
        backgroundImage {
          image {
            asset->{_id, url, metadata {dimensions}},
            hotspot,
            crop
          },
          alt
        }
      },
      // contactSection
      _type == "contactSection" => {
        locations[] {
          _key,
          locationName,
          address,
          phone,
          email,
          openingHours,
          googleMapsUrl
        }
      },
      // menuSection
      _type == "menuSection" => {
        image {
          image {
            asset->{_id, url, metadata {dimensions}},
            hotspot,
            crop
          },
          alt
        },
        categories[] {
          _key,
          title,
          items[] {
            _key,
            name,
            price,
            badge
          }
        }
      }
    },
    seo {
      metaTitle,
      metaDescription,
      ogImage {
        asset->{_id, url, metadata {dimensions}},
        hotspot,
        crop
      }
    }
  }
`);

export const siteSettingsQuery = defineQuery(`
  *[_id == "siteSettings"][0]{
    _id,
    siteTitle,
    logo {
      image {
        asset->{_id, url, metadata {dimensions}},
        hotspot,
        crop
      },
      alt
    },
    logoWithText {
      image {
        asset->{_id, url, metadata {dimensions}},
        hotspot,
        crop
      },
      alt
    },
    logoLight {
      image {
        asset->{_id, url, metadata {dimensions}},
        hotspot,
        crop
      },
      alt
    },
    copyrightText,
    navLinks[] {
      _key,
      label,
      linkType,
      href,
      path,
      fragment
    },
    reservationLink {
      label,
      linkType,
      href,
      path,
      fragment
    },
    socialLinks[] {
      _key,
      platform,
      url
    },
    defaultSeo {
      metaTitle,
      metaDescription,
      ogImage {
        asset->{_id, url, metadata {dimensions}},
        hotspot,
        crop
      }
    }
  }
`);
