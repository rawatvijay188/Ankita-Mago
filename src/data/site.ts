/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
 *
 *  Values are tagged with where they came from:
 *
 *    [confirm]   — sourced from a public directory or her Instagram, but
 *                  NOT verified with Dr. Mago. Public directory listings are
 *                  self-reported and often years out of date. Every one of
 *                  these must be confirmed before launch.
 *    [CONFLICT]  — sources disagree. Ask her which is right.
 *    [TODO]      — nothing found; she has to supply it.
 *
 *  Anything still carrying a tag is highlighted in yellow on the page, so
 *  unconfirmed content is impossible to miss during a walkthrough.
 *  Nothing here is invented.
 *
 *  Sources: instagram.com/doctor_ovary · lybrate.com profile ·
 *           practo.com listing (via search results)
 * ─────────────────────────────────────────────────────────────────────────
 */

export const doctor = {
  name: 'Dr. Ankita Mago',
  title: 'Fertility Specialist, Obstetrician & Gynaecologist',
  // Instagram bio lists: IVF specialist, gynecologist & obstetrician,
  // laparoscopic surgeon. Lybrate adds robotic gynaecologist.
  qualifications: 'MBBS · DNB (Obs & Gyn) · Fellowship in Reproductive Medicine [confirm]',
  registration: 'Delhi Medical Council — Reg. No. [TODO: she must supply]',
  // Lybrate says 15 years, Practo says 14. Neither is verified.
  yearsExperience: '14 [CONFLICT: Lybrate says 15]',
  // Not published anywhere. These are the two strongest numbers on the
  // page — leave them out entirely rather than guess.
  babiesDelivered: '[TODO: ask her]',
  patientsCared: '[TODO: ask her]',
  instagramFollowers: '228K',

  // The big line in the hero. Keep it short — it is set very large.
  headline: 'The doctor you already trust on Instagram',
  // Supporting line. Written for someone who just tapped the bio link.
  tagline:
    'Fertility, pregnancy and gynaecological care in North Delhi — from the doctor behind @doctor_ovary.',
  intro:
    '[Placeholder bio — replace with Dr. Mago’s own words.] I started sharing on Instagram because the same questions kept coming up in my clinic, and there was never enough time in a consultation to answer them properly. Nearly a quarter of a million women follow along now. In the clinic, I look after couples trying to conceive, women through pregnancy and delivery, and the gynaecological problems too many women are told to simply live with.',
  photo: '/images/doctor.jpg', // TODO: add a real professional photo here
};

export const social = {
  instagram: 'https://www.instagram.com/doctor_ovary/',
  instagramHandle: '@doctor_ovary',
  threads: 'https://www.threads.net/@doctor_ovary',
  // Her IG story highlights include a YouTube section.
  youtube: '[TODO: get channel URL]',
};

export const contact = {
  phone: '[TODO: not published anywhere public]',
  phoneHref: 'tel:+9100000000000', // TODO: real number, digits only
  whatsapp: '[TODO]',
  whatsappHref: 'https://wa.me/9100000000000', // TODO: real number
  email: '[TODO]',
  bookingUrl: '#book', // TODO: swap for Practo / clinic booking system
  clinicName: 'Dr. Ankita Mago Clinic [confirm]',
  // Lybrate says Pitampura, Practo says Rohini. Both are North Delhi —
  // she may hold clinics at both, or one listing is stale.
  addressLines: [
    '[CONFLICT: Pitampura (Lybrate) vs Rohini (Practo)]',
    'North Delhi [confirm]',
  ],
  mapsUrl: 'https://maps.google.com/?q=Dr+Ankita+Mago+Clinic+Delhi', // TODO: real pin
  hours: [
    { days: 'Monday – Friday', time: '[TODO: ask her]' },
    { days: 'Saturday', time: '[TODO]' },
    { days: 'Sunday', time: '[TODO]' },
  ],
  // Practo lists her as offering video/audio consults — worth featuring
  // prominently given the audience is nationwide, not just Delhi.
  teleconsult: 'Online video & audio consultations available [confirm]',
  emergencyNote: '[TODO: after-hours policy — which number, which hospital]',
};

/**
 * Order matters. Fertility leads because it is her stated specialty, the
 * highest-value patient, and the reason most of the 228K follow her.
 */
export const services = [
  {
    title: 'Fertility & IVF',
    blurb:
      'For couples who have been trying, and for anyone who has been told to "just wait and see" for too long. Honest assessment of where you actually are, and what each option is realistically worth.',
    points: [
      'Fertility evaluation for both partners',
      'Ovulation induction & IUI',
      'IVF [confirm: performed by her, or referred?]',
      'Recurrent miscarriage',
    ],
    icon: 'spark',
    featured: true,
  },
  {
    title: 'Laparoscopic & Hysteroscopic Surgery',
    blurb:
      'Keyhole surgery — smaller scars, shorter stays, faster recovery. Diploma in Minimal Access Surgery, World Laparoscopy Hospital [confirm].',
    points: [
      'Diagnostic & operative laparoscopy',
      'Hysteroscopy',
      'Fibroid & ovarian cyst removal [confirm]',
      'Endometriosis surgery [confirm]',
    ],
    icon: 'plus',
    featured: true,
  },
  {
    title: 'Pregnancy & Antenatal Care',
    blurb:
      'Month-by-month care through your pregnancy, with the same doctor at every visit — and the same straight answers you get on her feed.',
    points: ['Antenatal check-ups', 'Growth & anomaly scans', 'High-risk pregnancy care', 'Birth planning'],
    icon: 'heart',
  },
  {
    title: 'Delivery',
    blurb:
      'Support for the birth you want, and honest guidance when plans need to change. [TODO: which hospitals does she deliver at?]',
    points: ['Normal delivery', 'Painless (epidural) delivery', 'Caesarean section', 'Post-delivery recovery'],
    icon: 'baby',
  },
  {
    title: 'PCOS & Gynaecological Care',
    blurb:
      'For the concerns women are too often told to live with — irregular periods, pain, hormonal problems and infections.',
    points: ['PCOS management', 'Irregular or painful periods', 'Infections & screening', 'Menopause care'],
    icon: 'shield',
  },
  {
    title: 'Preventive & Adolescent Health',
    blurb: 'A calm first experience of a gynaecologist — for young women, and for anyone due a routine check.',
    points: ['First consultations', 'Pap smear & HPV vaccination', 'Contraception counselling', 'Annual well-woman check'],
    icon: 'leaf',
  },
];

export const credentials = {
  // All dates below are from public directory listings and disagree with
  // each other. Treat the whole block as unconfirmed.
  education: [
    {
      year: '2011 [CONFLICT: Practo says 2012]',
      title: 'MBBS',
      place: 'Kasturba Medical College, Mangalore (MAHE) [confirm]',
    },
    {
      year: '2016 [CONFLICT: Practo says 2017]',
      title: 'DNB — Obstetrics & Gynaecology',
      place: 'National Board of Examinations, India [confirm]',
    },
    {
      year: '2018 [confirm]',
      title: 'Diploma in Minimal Access Surgery',
      place: 'World Laparoscopy Hospital, Gurgaon [confirm]',
    },
    {
      year: '2022 [confirm]',
      title: 'Fellowship in Assisted Reproductive Technology',
      place: 'ICEAT Academy, Delhi [confirm]',
    },
    {
      year: '2022 [confirm]',
      title: 'Certificate Course in Ultrasound',
      place: 'FOGSI [confirm]',
    },
  ],
  experience: [
    {
      year: '[TODO: dates]',
      title: 'Consultant — Dr. Ankita Mago Clinic [confirm]',
      place: 'North Delhi [confirm exact location]',
    },
    { year: '[TODO]', title: '[TODO: previous hospital roles]', place: '[TODO]' },
  ],
  memberships: [
    'Delhi Medical Council (DMC) [confirm]',
    'NARCHI [confirm]',
    'Indian Fertility Society (IFS) [confirm]',
    'FOGSI [confirm]',
  ],
  languages: ['English [confirm]', 'Hindi [confirm]'],
};

/**
 * The topics she already covers on Instagram, restated as clinic answers.
 * This section is the SEO engine: it turns content she is already making
 * into pages Google can index, which her Instagram feed cannot be.
 * Topics below are taken from her actual recent post themes.
 */
export const answers = [
  {
    q: 'Are ultrasounds safe during pregnancy?',
    teaser: '[Draft from her own post — she should approve the wording.]',
  },
  {
    q: 'How much weight should I gain in pregnancy?',
    teaser: '[Draft from her own post — she should approve the wording.]',
  },
  {
    q: 'Normal delivery or caesarean — how is it decided?',
    teaser: '[Draft from her own post — she should approve the wording.]',
  },
  {
    q: 'Third-trimester warning signs you should not ignore',
    teaser: '[Draft from her own post — she should approve the wording.]',
  },
  {
    q: 'Looking after a newborn through a Delhi summer',
    teaser: '[Draft from her own post — she should approve the wording.]',
  },
  {
    q: 'Your pregnancy, month by month',
    teaser: '[Draft from her own post — she should approve the wording.]',
  },
];

/**
 * Testimonials are the highest-risk content on a medical site.
 * Do NOT publish until they are real, consented, and checked against the
 * advertising rules her council applies. Her Instagram highlights
 * ("mothers love", "new moms love") are full of real ones she already has
 * permission-adjacent access to — ask her to pull the best and get consent.
 */
export const testimonials = [
  {
    quote:
      '[Placeholder — replace with a real, consented quote. Her IG highlights are the obvious source.] She never made me feel like my questions were silly. I left every appointment actually understanding what was happening.',
    author: '[Patient initials]',
    context: '[Fertility treatment, 2025]',
  },
  {
    quote:
      '[Placeholder — replace with a real, consented quote.] After years of being told my pain was normal, she was the first doctor who took the time to investigate properly.',
    author: '[Patient initials]',
    context: '[Laparoscopic surgery, 2025]',
  },
  {
    quote:
      '[Placeholder — replace with a real, consented quote.] I found her on Instagram, flew in for a consultation, and it was the first time in four years anyone explained our options clearly.',
    author: '[Patient initials]',
    context: '[Antenatal care, 2024]',
  },
];

export const faqs = [
  {
    q: 'I follow you on Instagram but I do not live in Delhi. Can I still consult you?',
    a: 'Yes — online video and audio consultations are available [confirm platform and fee]. For anything needing an examination, scan or procedure, you would need to be seen in clinic.',
  },
  {
    q: 'What should I bring to my first fertility appointment?',
    a: '[Confirm.] Any previous test results and scan reports for both partners, details of treatments already tried, and a note of your cycle dates. Both partners should come if possible.',
  },
  {
    q: 'How long is a consultation?',
    a: '[Confirm — likely 20–30 minutes for a first visit.]',
  },
  {
    q: 'Which insurance or payment options are accepted?',
    a: '[Confirm — cashless panels, cards / UPI, consultation fee.]',
  },
  {
    q: 'Can I bring my partner or a family member?',
    a: 'Yes. You are welcome to bring someone with you to any appointment.',
  },
  {
    q: 'What happens in an emergency?',
    a: '[Confirm policy — after-hours number, which hospital to go to, and when to go straight to emergency rather than calling.]',
  },
];

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Answers', href: '#answers' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Patients', href: '#testimonials' },
  { label: 'Visit', href: '#visit' },
];
