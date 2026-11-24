// Single source for every link and identity string on the site.
// Edit here; nothing else needs touching to change a URL.
export const site = {
  name: 'Sai Prannav Murali',
  short: 'Prannav',
  url: 'https://sai-prannav.github.io',
  tagline: 'I build robot hardware and the machine learning around it.',
  description:
    'Mechanical engineering student at Kennesaw State. Robot hardware, sensing and machine learning research.',
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
  { href: '/research/', label: 'Research' },
  { href: '/projects/', label: 'Projects' },
  { href: '/about/', label: 'About' },
  { href: '/resume/', label: 'Resume' },
];

// The "Now" strip on the home page.
export const now = [
  { label: 'HeartBridge v2', text: 'Rebuilding the post-discharge agent as v2.' },
  { label: 'AMIR Lab', text: 'Making the flexible joints for the next robot revision.' },
  { label: 'DynaGence', text: 'Adding load cells to the thrust rig.' },
];

export const skills = [
  {
    group: 'Mechanical & Fabrication',
    items: ['SolidWorks', '3D printing / rapid prototyping', 'Bench assembly', 'Load-cell instrumentation (Arduino, HX711)'],
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
