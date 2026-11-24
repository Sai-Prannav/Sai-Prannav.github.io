// Single source for every link and identity string on the site.
// Edit here; nothing else needs touching to change a URL.
export const site = {
  name: 'Sai Prannav Murali',
  short: 'Prannav',
  url: 'https://sai-prannav.github.io',
  label: 'Mechanical Engineering · Kennesaw State · Robotics',
  tagline: 'I build robots, and the software that runs them.',
  sub: 'Mechanical engineering at Kennesaw State. I make soft surgical-robot joints, a thrust-test rig for a fish robot, and LiDAR and thermal drone detection.',
  description:
    'Mechanical engineering student at Kennesaw State building robots: soft surgical-robot joints, a fish-robot thrust-test rig, and LiDAR and thermal drone detection.',
  location: 'Atlanta, GA',
};

export const links = {
  github: 'https://github.com/Sai-Prannav',
  linkedin: 'https://www.linkedin.com/in/saiprannavmurali/',
  // Primary contact (personal); the school address is shown as a secondary option.
  email: 'saiprannav29@gmail.com',
  emailSchool: 'smurali1@students.kennesaw.edu',
  resume: '/resume.pdf',
  // Project repos (published 2026-11-24).
  repos: {
    published: true,
    heartbridge: 'https://github.com/Sai-Prannav/heartbridge',
    stocksnap: 'https://github.com/Sai-Prannav/stocksnap',
  },
  // KSU Digital Commons poster pages (link these instead of PDFs).
  posters: {
    smarterSignals: 'https://digitalcommons.kennesaw.edu/undergradsymposiumksu/fall2025/fall2025/7/',
    uavSensors: 'https://digitalcommons.kennesaw.edu/undergradsymposiumksu/spring2026/posters/8/',
    pedestrian: 'https://digitalcommons.kennesaw.edu/undergradsymposiumksu/fall2025/fall2025/169/',
  },
};

export const nav = [
  { href: '/projects/', label: 'Work' },
  { href: '/research/', label: 'Research' },
  { href: '/about/', label: 'About' },
  { href: '/resume/', label: 'Resume' },
];

// Hero media. Swap the schematic for a real photo or clip by changing these three fields.
//   type: 'schematic' | 'image' | 'video'
//   src:  '/media/dynagence/rig.jpg' or '/media/dynagence/rig.mp4' (ignored for 'schematic')
//   alt:  describe what the picture shows
// For 'video', also set poster (a still shown first, and for reduced-motion users).
export const heroMedia: {
  type: 'schematic' | 'image' | 'video';
  src: string;
  poster?: string;
  alt: string;
  caption: string;
} = {
  type: 'schematic',
  src: '',
  alt: 'Line drawing of a thrust-test rig: an aquarium tank under an aluminum-profile frame, a 3D-printed mount holding a fish robot through two load cells, wired to two HX711 amplifiers and an Arduino.',
  caption: 'Thrust-test rig, DynaGence Lab. Illustration of the signal chain. Not measured data.',
};

// Headshot for the About page. Leave src empty to show the placeholder frame.
export const headshot = { src: '', alt: 'Sai Prannav Murali' };

// The spec strip under the hero. True facts only.
export const specStrip = [
  { n: '2', label: 'TFEC 2027 papers accepted' },
  { n: '1', label: 'AIAA SciTech 2027 paper accepted' },
  { n: '4', label: 'research labs' },
  { n: '3', label: 'AI/ML internships' },
];

// The short "now" block on the home page.
export const now = [
  { label: 'AMIR Lab', text: 'Fabricating the flexible joints for the next robot revision.' },
  { label: 'DynaGence', text: 'Load-cell readout on the thrust rig: in progress.' },
  { label: 'HeartBridge v2', text: 'Rebuilding the post-discharge agent, solo.' },
];

// Labels for the links a case study can show.
export const linkLabels = {
  smarterSignals: 'Poster: Smarter Signals (KSU Digital Commons)',
  uavSensors: 'Poster: LiDAR, RGB and thermal sensors (KSU Digital Commons)',
  pedestrian: 'Poster: pedestrian identification with drones (KSU Digital Commons)',
} as const;

export const skills = [
  {
    group: 'Mechanical & Fabrication',
    items: ['SolidWorks', '3D printing / rapid prototyping', 'Bench assembly', 'Load-cell instrumentation (Arduino, HX711): in progress'],
  },
  {
    group: 'Software & ML',
    items: ['Python', 'MATLAB', 'PyTorch', 'TensorFlow', 'Computer vision (YOLO)', 'LLMs & RAG', 'FastAPI', 'React/TypeScript', 'SQL'],
  },
  {
    group: 'Sensing & Data',
    items: ['LiDAR', 'Thermal imaging', 'Sensor fusion', 'Signal processing', 'Time-series forecasting (LightGBM, LSTM)'],
  },
];
