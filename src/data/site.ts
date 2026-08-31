/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
 *
 *  Values are tagged with where they came from:
 *
 *    [confirm]   — sourced from a public directory or her Instagram, but
 *                  NOT verified with Dr. Mago. Directory listings are
 *                  self-reported and often years out of date.
 *    [CONFLICT]  — sources disagree. Ask her which is right.
 *    [TODO]      — nothing found; she has to supply it.
 *
 *  Anything still tagged is highlighted on the page while SHOW_TAGS is on
 *  (src/config.ts). Nothing here is invented.
 *
 *  Sources: instagram.com/doctor_ovary · lybrate.com profile ·
 *           practo.com listing (via search results)
 * ─────────────────────────────────────────────────────────────────────────
 */

export const doctor = {
  name: 'Dr. Ankita Mago',
  title: 'Fertility Specialist, Obstetrician & Gynaecologist',
  eyebrow: 'Fertility · Pregnancy · Gynaecology',
  qualifications: 'MBBS · DNB (Obs & Gyn) [confirm]',
  registration: '[TODO: Delhi Medical Council reg. no.]',
  // Lybrate says 15 years, Practo says 14. Neither is verified.
  yearsExperience: '14 [Lybrate: 15]',
  babiesDelivered: '[ask her]',
  instagramFollowers: '228K',

  // Headline. Short on purpose — it is set very large.
  headline: 'The doctor you already trust on',
  headlineAccent: 'Instagram',
  tagline:
    'Fertility, pregnancy and gynaecological care in North Delhi — from the doctor behind @doctor_ovary.',

  // Pull quote. Her voice, first person — replace with her actual words.
  quote:
    '“I started sharing on Instagram because the same questions kept coming up in my clinic, and there was never enough time in a consultation to answer them properly.”',
  intro:
    '[Placeholder bio — her own words.] Nearly a quarter of a million women follow along now. In the clinic, I look after couples trying to conceive, women through pregnancy and delivery, and the gynaecological problems too many women are told to simply live with.',

  photo: '/images/doctor.jpg', // TODO: professional headshot, ~800×1000
};

export const social = {
  instagram: 'https://www.instagram.com/doctor_ovary/',
  instagramHandle: '@doctor_ovary',
  threads: 'https://www.threads.net/@doctor_ovary',
  youtube: '[TODO: get channel URL]',
};

export const contact = {
  phone: '[TODO: not published anywhere public]',
  phoneHref: 'tel:+9100000000000', // TODO: real number, digits only
  whatsappHref: 'https://wa.me/9100000000000', // TODO: real number
  email: '[TODO]',
  clinicName: 'Dr. Ankita Mago Clinic [confirm]',
  // Lybrate says Pitampura, Practo says Rohini. Both North Delhi — she may
  // hold clinics at both, or one listing is stale.
  addressLine: 'Pitampura (Lybrate) vs Rohini (Practo) — North Delhi',
  mapsUrl: 'https://maps.google.com/?q=Dr+Ankita+Mago+Clinic+Delhi', // TODO
  hours: [
    { days: 'Mon – Fri', time: '[ask her]' },
    { days: 'Saturday', time: '[TODO]' },
    { days: 'Sunday', time: '[TODO]' },
  ],
  // Her audience is nationwide, so this is a headline feature, not a footnote.
  teleconsult: 'Online video & audio consultations available [confirm]',
  emergencyNote: '[TODO: after-hours policy — which number, which hospital]',
};

/**
 * Order matters. Fertility leads because it is her stated specialty, the
 * highest-value patient, and the reason most of the 228K follow her.
 * `featured` renders as the full-width dark card; the rest collapse.
 */
export const services = [
  {
    title: 'Fertility & IVF',
    blurb:
      'For couples who have been trying, and for anyone told to “just wait and see” for too long.',
    points: [
      'Evaluation, both partners',
      'Ovulation induction & IUI',
      'IVF [confirm]',
      'Recurrent miscarriage',
    ],
    icon: 'spark',
    featured: true,
  },
  {
    title: 'Laparoscopic surgery',
    blurb:
      'Keyhole surgery — smaller scars, shorter stays, faster recovery. Diploma in Minimal Access Surgery [confirm].',
    points: ['Diagnostic & operative', 'Hysteroscopy', 'Fibroids & cysts [confirm]'],
    icon: 'plus',
  },
  {
    title: 'Pregnancy & antenatal',
    blurb:
      'Month-by-month care with the same doctor at every visit — and the same straight answers you get on her feed.',
    points: ['Check-ups', 'Growth & anomaly scans', 'High-risk care', 'Birth planning'],
    icon: 'heart',
  },
  {
    title: 'Delivery',
    blurb:
      'Support for the birth you want, and honest guidance when plans need to change. [TODO: which hospitals?]',
    points: ['Normal delivery', 'Painless (epidural)', 'Caesarean'],
    icon: 'baby',
  },
  {
    title: 'PCOS & gynaecology',
    blurb:
      'For the concerns women are too often told to live with — periods, pain, hormones, infections.',
    points: ['PCOS management', 'Painful periods', 'Menopause care'],
    icon: 'shield',
  },
  {
    title: 'Preventive & adolescent',
    blurb:
      'A calm first experience of a gynaecologist — and a routine check that is actually thorough.',
    points: ['First consultations', 'Pap smear & HPV', 'Contraception'],
    icon: 'leaf',
  },
];

export const credentials = {
  // Every line came from a public directory. The sources disagree on dates.
  education: [
    { year: '2011', title: 'MBBS', place: 'KMC Mangalore (MAHE) [confirm]' },
    {
      year: '2016',
      title: 'DNB — Obs & Gyn',
      place: 'National Board of Examinations [confirm]',
    },
    {
      year: '2018',
      title: 'Diploma, Minimal Access Surgery',
      place: 'World Laparoscopy Hospital [confirm]',
    },
    { year: '2022', title: 'Fellowship in ART', place: 'ICEAT Academy, Delhi [confirm]' },
    { year: '2022', title: 'Certificate in Ultrasound', place: 'FOGSI [confirm]' },
  ],
  memberships: ['DMC', 'NARCHI', 'IFS', 'FOGSI'],
  languages: ['English [confirm]', 'Hindi [confirm]'],
};

/**
 * The topics she already covers on Instagram, restated as clinic answers.
 * This is the SEO engine: Instagram is invisible to Google, so the same
 * content here is permanent and indexable. Each should become its own page
 * at /answers/<slug> once she approves the wording.
 */
export const answers = [
  'Are ultrasounds safe during pregnancy?',
  'How much weight should I gain in pregnancy?',
  'Normal delivery or caesarean — how is it decided?',
  'Third-trimester warning signs',
  'A newborn through a Delhi summer',
  'Your pregnancy, month by month',
];

/**
 * Testimonials are the highest-risk content on a medical site.
 * Do NOT publish until real, consented, and checked against the advertising
 * rules her council applies. Her Instagram highlights ("mothers love",
 * "new moms love") are the obvious source — ask her to pull the best.
 */
export const testimonials = [
  {
    quote:
      '“She never made me feel like my questions were silly. I left every appointment actually understanding what was happening.”',
    context: '[Fertility, 2025]',
  },
  {
    quote:
      '“After years of being told my pain was normal, she was the first doctor who took the time to investigate properly.”',
    context: '[Surgery, 2025]',
  },
  {
    quote:
      '“I found her on Instagram, flew in for a consultation, and it was the first time in four years anyone explained our options clearly.”',
    context: '[Antenatal, 2024]',
  },
];

export const values = [
  {
    icon: 'chat',
    title: 'You will be listened to',
    body: 'No question is too small, and nothing you are worried about is dismissed as normal without being looked at.',
  },
  {
    icon: 'shield',
    title: 'Complete privacy',
    body: 'Every consultation is confidential. What you share stays between you and your doctor.',
  },
  {
    icon: 'check',
    title: 'Honest guidance',
    body: 'Clear explanations of your options — including when the right answer is to wait, or to see someone else.',
  },
];

/** Booking is four taps, not a wall of text fields. */
export const booking = {
  reasons: [
    'Fertility / trying to conceive',
    'Pregnancy',
    'PCOS / periods',
    'Surgery',
    'Routine check',
    'Something else',
  ],
  modes: ['In clinic', 'Online video'],
  times: ['Weekday morning', 'Weekday evening', 'Saturday', 'Any time'],
};

export const faqs = [
  {
    q: 'I follow you but do not live in Delhi. Can I still consult you?',
    a: 'Yes — online video and audio consultations are available [confirm platform and fee]. Anything needing an examination, scan or procedure is seen in clinic.',
  },
  {
    q: 'What should I bring to my first fertility appointment?',
    a: '[Confirm.] Previous test results and scan reports for both partners, treatments already tried, and your cycle dates. Both partners should come if possible.',
  },
  {
    q: 'How long is a consultation?',
    a: '[Confirm — likely 20–30 minutes for a first visit.]',
  },
  {
    q: 'Which payment options are accepted?',
    a: '[Confirm — cashless panels, cards / UPI, consultation fee.]',
  },
  {
    q: 'What happens in an emergency?',
    a: '[Confirm policy — after-hours number, which hospital, and when to go straight to emergency.]',
  },
];

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Care', href: '#services' },
  { label: 'Answers', href: '#answers' },
  { label: 'Visit', href: '#visit' },
];

export const footerNav = [
  { label: 'About', href: '#about' },
  { label: 'Care', href: '#services' },
  { label: 'Answers', href: '#answers' },
  { label: 'Patients', href: '#testimonials' },
  { label: 'Visit', href: '#visit' },
  { label: 'FAQ', href: '#faq' },
];
