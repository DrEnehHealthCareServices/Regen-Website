// SEO Metadata Configuration for ReGen Care Africa
// Includes titles, descriptions, canonical URLs, Open Graph parameters, and Schema.org structured data.

const SITE_URL = 'https://regencareafrica.com';

const baseSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  'name': 'ReGen Care Africa',
  'image': `${SITE_URL}/assets/1/Group%20of%204%20Objects.png`,
  '@id': `${SITE_URL}/#clinic`,
  'url': SITE_URL,
  'telephone': '+2347060643156',
  'email': 'info@regencareafrica.com',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'At Equity Hospital, 13 Ogbunike Street off Wole Olateju Street, Lekki Phase 1',
    'addressLocality': 'Lekki',
    'addressRegion': 'Lagos',
    'addressCountry': 'NG'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 6.446869,
    'longitude': 3.468754
  },
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday'
    ],
    'opens': '08:00',
    'closes': '17:00'
  }
};

export const routeMeta = {
  '/': {
    title: 'ReGen Care Africa | Regenerative Medicine & Aesthetics Clinic Nigeria',
    description: 'Pioneering regenerative medicine and aesthetics clinic in Nigeria. Advanced stem cell therapy, anti-aging solutions, pain management, and IV drips for cellular restoration.',
    canonical: SITE_URL,
    schema: baseSchema
  },
  '/about': {
    title: 'About ReGen Care Africa | Experts in Regenerative Medicine',
    description: 'Meet our multidisciplinary team of medical experts and discover our global partnerships bringing advanced cellular therapies and personalized care to Nigeria.',
    canonical: `${SITE_URL}/about`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      '@id': `${SITE_URL}/about/#webpage`,
      'url': `${SITE_URL}/about`,
      'name': 'About ReGen Care Africa',
      'description': 'Meet our team and discover our partnership bringing advanced cellular therapies to Nigeria.',
      'isPartOf': { '@id': `${SITE_URL}/#website` },
      'about': { '@id': `${SITE_URL}/#clinic` }
    }
  },
  '/treatment': {
    title: 'Regenerative & Aesthetics Treatments | ReGen Care Africa',
    description: 'Explore our state-of-the-art regenerative treatments. From cellular therapies and pain management to advanced aesthetic procedures designed to restore and heal.',
    canonical: `${SITE_URL}/treatment`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      '@id': `${SITE_URL}/treatment/#webpage`,
      'url': `${SITE_URL}/treatment`,
      'name': 'Regenerative & Aesthetics Treatments',
      'description': 'Explore our state-of-the-art regenerative treatments and non-surgical procedures.',
      'isPartOf': { '@id': `${SITE_URL}/#website` },
      'about': { '@id': `${SITE_URL}/#clinic` }
    }
  },
  '/services': {
    title: 'Advanced Healthcare Services | ReGen Care Africa',
    description: 'Comprehensive cellular, aesthetic, and diagnostic services tailored to your longevity. Reclaim your health, energy, and vitality at our premier clinic.',
    canonical: `${SITE_URL}/services`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      '@id': `${SITE_URL}/services/#webpage`,
      'url': `${SITE_URL}/services`,
      'name': 'Healthcare Services',
      'description': 'Comprehensive cellular, aesthetic, and diagnostic services tailored to your longevity.',
      'isPartOf': { '@id': `${SITE_URL}/#website` },
      'about': { '@id': `${SITE_URL}/#clinic` }
    }
  },
  '/services/cellular-therapy': {
    title: 'Stem Cell & Cellular Therapy | ReGen Care Africa',
    description: 'Advanced cellular therapies including Stem Cells, Exosomes, PRP, and NAD+ to regenerate tissues, boost immunity, and treat age-related conditions.',
    canonical: `${SITE_URL}/services/cellular-therapy`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      '@id': `${SITE_URL}/services/cellular-therapy/#webpage`,
      'url': `${SITE_URL}/services/cellular-therapy`,
      'name': 'Stem Cell & Cellular Therapy',
      'description': 'Advanced cellular therapies including Stem Cells, Exosomes, PRP, and NAD+.',
      'isPartOf': { '@id': `${SITE_URL}/#website` },
      'about': { '@id': `${SITE_URL}/#clinic` }
    }
  },
  '/services/aesthetics-anti-aging': {
    title: 'Aesthetics & Anti-Aging Treatments | ReGen Care Africa',
    description: 'Restore your youthful glow with advanced, non-surgical anti-aging treatments including Botox, medical facials, thread lifting, and skin boosters.',
    canonical: `${SITE_URL}/services/aesthetics-anti-aging`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      '@id': `${SITE_URL}/services/aesthetics-anti-aging/#webpage`,
      'url': `${SITE_URL}/services/aesthetics-anti-aging`,
      'name': 'Aesthetics & Anti-Aging Treatments',
      'description': 'Botox, medical facials, thread lifting, skin boosters, and non-surgical anti-aging treatments.',
      'isPartOf': { '@id': `${SITE_URL}/#website` },
      'about': { '@id': `${SITE_URL}/#clinic` }
    }
  },
  '/services/pain-management': {
    title: 'Regenerative Pain Management | ReGen Care Africa',
    description: 'Relieve chronic pain, arthritis, sports injuries, and spine conditions without surgery. Discover our non-invasive cellular repair therapies.',
    canonical: `${SITE_URL}/services/pain-management`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      '@id': `${SITE_URL}/services/pain-management/#webpage`,
      'url': `${SITE_URL}/services/pain-management`,
      'name': 'Regenerative Pain Management',
      'description': 'Relieve chronic pain, arthritis, sports injuries, and spine conditions without surgery.',
      'isPartOf': { '@id': `${SITE_URL}/#website` },
      'about': { '@id': `${SITE_URL}/#clinic` }
    }
  },
  '/services/hormonal-replacement': {
    title: 'Hormone Replacement Therapy (HRT) | ReGen Care Africa',
    description: 'Balance your hormones, restore vitality, and improve quality of life. Tailored hormone replacement therapy for men and women in Nigeria.',
    canonical: `${SITE_URL}/services/hormonal-replacement`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      '@id': `${SITE_URL}/services/hormonal-replacement/#webpage`,
      'url': `${SITE_URL}/services/hormonal-replacement`,
      'name': 'Hormone Replacement Therapy (HRT)',
      'description': 'Tailored hormone replacement therapy for men and women to restore vitality.',
      'isPartOf': { '@id': `${SITE_URL}/#website` },
      'about': { '@id': `${SITE_URL}/#clinic` }
    }
  },
  '/services/peptide-senolytics': {
    title: 'Peptide Therapy & Senolytic Solutions | ReGen Care Africa',
    description: 'Target aging at the cellular level. Peptide and senolytic therapies to remove senescent cells, boost tissue regeneration, and improve metabolic health.',
    canonical: `${SITE_URL}/services/peptide-senolytics`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      '@id': `${SITE_URL}/services/peptide-senolytics/#webpage`,
      'url': `${SITE_URL}/services/peptide-senolytics`,
      'name': 'Peptide Therapy & Senolytic Solutions',
      'description': 'Peptide and senolytic therapies to remove senescent cells and boost tissue regeneration.',
      'isPartOf': { '@id': `${SITE_URL}/#website` },
      'about': { '@id': `${SITE_URL}/#clinic` }
    }
  },
  '/services/hair-replacement': {
    title: 'Regenerative Hair Restoration & Replacement | ReGen Care Africa',
    description: 'Combat hair loss and thinning. Advanced hair restoration therapies using PRP, growth factors, and cellular stimulation for natural hair growth.',
    canonical: `${SITE_URL}/services/hair-replacement`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      '@id': `${SITE_URL}/services/hair-replacement/#webpage`,
      'url': `${SITE_URL}/services/hair-replacement`,
      'name': 'Regenerative Hair Restoration & Replacement',
      'description': 'PRP, growth factors, and cellular stimulation for natural hair growth and replacement.',
      'isPartOf': { '@id': `${SITE_URL}/#website` },
      'about': { '@id': `${SITE_URL}/#clinic` }
    }
  },
  '/services/other-therapies': {
    title: 'Specialized Wellness & Longevity Therapies | ReGen Care Africa',
    description: 'Discover our range of specialized wellness therapies designed to complement cellular health, detoxify the body, and optimize overall performance.',
    canonical: `${SITE_URL}/services/other-therapies`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      '@id': `${SITE_URL}/services/other-therapies/#webpage`,
      'url': `${SITE_URL}/services/other-therapies`,
      'name': 'Specialized Wellness & Longevity Therapies',
      'description': 'Specialized wellness therapies designed to complement cellular health and optimize performance.',
      'isPartOf': { '@id': `${SITE_URL}/#website` },
      'about': { '@id': `${SITE_URL}/#clinic` }
    }
  },
  '/services/iv-drip': {
    title: 'IV Drip & Nutrient Therapy | ReGen Care Africa',
    description: 'Rehydrate and revitalize with customized IV drip formulations for immunity, energy, detoxtification, beauty, and athletic recovery.',
    canonical: `${SITE_URL}/services/iv-drip`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      '@id': `${SITE_URL}/services/iv-drip/#webpage`,
      'url': `${SITE_URL}/services/iv-drip`,
      'name': 'IV Drip & Nutrient Therapy',
      'description': 'Customized IV drip formulations for immunity, energy, detoxification, beauty, and recovery.',
      'isPartOf': { '@id': `${SITE_URL}/#website` },
      'about': { '@id': `${SITE_URL}/#clinic` }
    }
  },
  '/diagnostics': {
    title: 'Advanced Diagnostic Screenings | ReGen Care Africa',
    description: 'Comprehensive diagnostic testing and screenings to identify underlying causes of disease and create personalized cellular treatment plans.',
    canonical: `${SITE_URL}/diagnostics`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      '@id': `${SITE_URL}/diagnostics/#webpage`,
      'url': `${SITE_URL}/diagnostics`,
      'name': 'Advanced Diagnostic Screenings',
      'description': 'Comprehensive diagnostic testing and screenings to identify underlying causes of disease.',
      'isPartOf': { '@id': `${SITE_URL}/#website` },
      'about': { '@id': `${SITE_URL}/#clinic` }
    }
  },
  '/contact': {
    title: 'Contact ReGen Care Africa | Book Your Consultation',
    description: 'Get in touch with ReGen Care Africa. Schedule your consultation, find our Lagos clinic address, or contact us via phone and WhatsApp.',
    canonical: `${SITE_URL}/contact`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      '@id': `${SITE_URL}/contact/#webpage`,
      'url': `${SITE_URL}/contact`,
      'name': 'Contact ReGen Care Africa',
      'description': 'Schedule your consultation, find our Lagos clinic address, or contact us via phone and WhatsApp.',
      'isPartOf': { '@id': `${SITE_URL}/#website` },
      'about': { '@id': `${SITE_URL}/#clinic` }
    }
  },
  '/privacy-policy': {
    title: 'Privacy Policy | ReGen Care Africa',
    description: 'Read the privacy policy of ReGen Care Africa. Learn how we handle, store, and protect your personal and medical information.',
    canonical: `${SITE_URL}/privacy-policy`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/privacy-policy/#webpage`,
      'url': `${SITE_URL}/privacy-policy`,
      'name': 'Privacy Policy',
      'isPartOf': { '@id': `${SITE_URL}/#website` }
    }
  }
};
