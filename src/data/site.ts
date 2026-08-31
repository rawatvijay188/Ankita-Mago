/**
 * ─────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
 *  Everything in [square brackets] is a PLACEHOLDER — confirm
 *  each one with Dr. Mago and replace before the site goes live.
 *  Nothing here has been invented as fact.
 * ─────────────────────────────────────────────────────────────
 */

export const doctor = {
  name: 'Dr. Ankita Mago',
  title: 'Obstetrician & Gynaecologist',
  qualifications: '[MBBS, MS (Obstetrics & Gynaecology) — confirm exact degrees]',
  registration: '[Medical Council Reg. No. — confirm]',
  yearsExperience: '[12]',
  babiesDelivered: '[2,000]',
  patientsCared: '[15,000]',
  // The big line in the hero. Keep it short — it is set very large.
  headline: 'Care for every stage of a woman’s life',
  // The supporting line patients read before deciding to call.
  tagline:
    'Compassionate care for every stage of a woman’s life — from your first consultation to the day you hold your baby.',
  intro:
    '[Placeholder bio — replace with Dr. Mago’s own words.] For over [12] years I have cared for women through pregnancy, fertility concerns, and every gynaecological question in between. I believe no woman should feel rushed, dismissed, or unheard in a consulting room. You will always have the time to ask everything you came to ask.',
  photo: '/images/doctor.jpg', // TODO: add a real professional photo here
};

export const contact = {
  phone: '[+91 98XXX XXXXX]',
  phoneHref: 'tel:+9198XXXXXXXX', // TODO: real number, digits only
  whatsapp: '[+91 98XXX XXXXX]',
  whatsappHref: 'https://wa.me/9198XXXXXXXX', // TODO: real number
  email: '[appointments@example.com]',
  bookingUrl: '#book', // TODO: swap for Practo / clinic booking link
  clinicName: '[Name of Clinic / Hospital]',
  addressLines: ['[Building & street]', '[Area, City — PIN]'],
  mapsUrl: 'https://maps.google.com/?q=clinic+address', // TODO
  hours: [
    { days: 'Monday – Friday', time: '[10:00 AM – 1:00 PM  •  5:00 PM – 8:00 PM]' },
    { days: 'Saturday', time: '[10:00 AM – 2:00 PM]' },
    { days: 'Sunday', time: 'Closed — [emergencies on call]' },
  ],
  emergencyNote:
    '[For obstetric emergencies, call the clinic line at any hour — confirm policy]',
};

export const services = [
  {
    title: 'Pregnancy & Antenatal Care',
    blurb:
      'Month-by-month care through your pregnancy — scans, screening, nutrition and birth planning, with the same doctor at every visit.',
    points: ['Antenatal check-ups', 'Growth & anomaly scans', 'High-risk pregnancy care', 'Birth planning'],
    icon: 'heart',
  },
  {
    title: 'Normal & Caesarean Delivery',
    blurb:
      'Support for the birth you want, and honest guidance when plans need to change. [Delivering at — hospital affiliations to confirm.]',
    points: ['Normal delivery', 'Painless (epidural) delivery', 'Caesarean section', 'Post-delivery recovery'],
    icon: 'baby',
  },
  {
    title: 'Fertility & Conception Support',
    blurb:
      'Investigation and treatment for couples trying to conceive, with clear explanations of what each test and each option actually means.',
    points: ['Fertility evaluation', 'Ovulation tracking', 'PCOS management', '[IUI / IVF referral — confirm]'],
    icon: 'spark',
  },
  {
    title: 'Gynaecological Care',
    blurb:
      'For the concerns women are too often told to live with — irregular periods, pain, infections, and everything in between.',
    points: ['Irregular or painful periods', 'PCOS & hormonal issues', 'Infections & screening', 'Menopause care'],
    icon: 'shield',
  },
  {
    title: 'Adolescent & Preventive Health',
    blurb: 'A calm first experience of a gynaecologist — for young women, and for anyone due a routine check.',
    points: ['First consultations', 'Pap smear & HPV vaccination', 'Contraception counselling', 'Annual well-woman check'],
    icon: 'leaf',
  },
  {
    title: 'Surgical Procedures',
    blurb:
      '[Placeholder — confirm which procedures Dr. Mago performs and where.] Minimally invasive options discussed wherever they are appropriate.',
    points: ['[Laparoscopy]', '[Hysteroscopy]', '[Ovarian cyst removal]', '[Hysterectomy]'],
    icon: 'plus',
  },
];

export const credentials = {
  education: [
    { year: '[20XX]', title: '[MBBS]', place: '[College / University name]' },
    { year: '[20XX]', title: '[MS — Obstetrics & Gynaecology]', place: '[College / University name]' },
    { year: '[20XX]', title: '[Fellowship / Diploma, if any]', place: '[Institution name]' },
  ],
  experience: [
    { year: '[20XX – present]', title: '[Consultant Obstetrician & Gynaecologist]', place: '[Current hospital / clinic]' },
    { year: '[20XX – 20XX]', title: '[Senior Resident]', place: '[Hospital name]' },
    { year: '[20XX – 20XX]', title: '[Junior Resident]', place: '[Hospital name]' },
  ],
  memberships: [
    '[Federation of Obstetric & Gynaecological Societies of India (FOGSI)]',
    '[Indian Medical Association (IMA)]',
    '[State Medical Council]',
  ],
  languages: ['[English]', '[Hindi]', '[+ any others]'],
};

/**
 * Testimonials are the highest-risk content on a medical site.
 * Do NOT publish these until they are real, consented, and
 * anonymised in line with the clinic policy.
 */
export const testimonials = [
  {
    quote:
      '[Placeholder testimonial — replace with a real, consented patient quote.] She never made me feel like my questions were silly. I left every appointment actually understanding what was happening.',
    author: '[Patient initials]',
    context: '[Antenatal care, 2024]',
  },
  {
    quote:
      '[Placeholder testimonial — replace with a real, consented patient quote.] After years of being told my pain was normal, she was the first doctor who took the time to investigate properly.',
    author: '[Patient initials]',
    context: '[Gynaecology consultation, 2024]',
  },
  {
    quote:
      '[Placeholder testimonial — replace with a real, consented patient quote.] Calm, honest, and completely present — through a long labour and a difficult decision.',
    author: '[Patient initials]',
    context: '[Delivery, 2023]',
  },
];

export const faqs = [
  {
    q: 'What should I bring to my first appointment?',
    a: '[Confirm with clinic.] Any previous prescriptions, scan reports and blood test results, a note of your last period date, and a list of the questions you want to ask. Nothing else is required for a first visit.',
  },
  {
    q: 'How long is a consultation?',
    a: '[Confirm.] A first consultation is usually around [20–30 minutes] so there is time to take a full history and answer your questions without rushing.',
  },
  {
    q: 'Do you consult online?',
    a: '[Confirm whether teleconsultation is offered, on which platform, and at what fee.]',
  },
  {
    q: 'Which insurance or payment options are accepted?',
    a: '[Confirm — cashless insurance panels, accepted cards / UPI, consultation fee.]',
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
  { label: 'Credentials', href: '#credentials' },
  { label: 'Patients', href: '#testimonials' },
  { label: 'Visit', href: '#visit' },
  { label: 'FAQ', href: '#faq' },
];
