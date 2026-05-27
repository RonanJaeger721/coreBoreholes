import { Service, Testimonial, FAQItem, Stat, Project, ProcessStep } from './types';

export const SERVICES: Service[] = [
  {
    id: 'drilling',
    title: 'Borehole Drilling',
    description: 'Professional precision drilling services for residential estates, commercial hubs, and agricultural properties across Zimbabwe.',
    longDescription: 'Our core service utilizes state-of-the-art DTH (Down-the-Hole) and rotary mud drilling rigs. No matter the terrain—from the hard granite rocks of Harare and Mashonaland to the sandy soils of Matabeleland—our drilling experts ensure a secure borehole lined with high-class Class 9/10 casing, capped and ready for casing testing.',
    iconName: 'Drill',
    features: [
      'High-capacity truck-mounted DTH rigs',
      'Standard casing (Class 9 / PVC)',
      'Submersible pump pairing options',
      'Professional casing lining & capping',
      'Drilling depths from 40m up to 150m+'
    ],
    imageSrc: '/src/assets/images/drilling_rig_1779875838701.png'
  },
  {
    id: 'surveys',
    title: 'Water Surveys',
    description: 'Scientific hydrological water surveys and site assessments to accurately pinpoint underground aquifers before drilling begins.',
    longDescription: 'Avoid dry holes. We conduct visual structural analyses, geopolitical profiling, and geophysical surveys using advanced electrical resistivity and magnetic meters. Our licensed hydrologists find the absolute optimal drilling coordinates for maximum yield, structural stability, and water safety.',
    iconName: 'Locate',
    features: [
      'Geophysical electrical resistivity tests',
      'Siting report & official drilling permits assistance',
      'Experienced licensed hydrologists',
      'Minimizes dry-hole financial risk',
      'Eco-hydrological safety site clearance'
    ],
    imageSrc: '/src/assets/images/clean_water_flow_1779875893843.png'
  },
  {
    id: 'tanks',
    title: 'Water Tank Installations',
    description: 'Professional setup and installation of durable water storage tanks (JoJo/Safari) on strong elevated steel structures.',
    longDescription: 'Reliable water security requires secure storage. We provide full setup of heavy-duty, UV-resistant water storage tanks ranging from 2,500L to 10,000L+. We engineer custom elevated stands (from 3 meters up to 9 meters high) to guarantee strong gravitational pressure and direct seamless pipe connections.',
    iconName: 'Database',
    features: [
      'Premium JoJo & Safari tanks with warranties',
      'Heavy-duty elevated steel stands (3m, 6m, 9m)',
      'Gravitational pressure piping systems',
      'Automatic float-switch water level control',
      'Robust brick-base booster setups'
    ],
    imageSrc: '/src/assets/images/water_tank_1779875875582.png'
  },
  {
    id: 'solar',
    title: 'Solar Water Pump Installations',
    description: 'Energy-efficient, eco-friendly solar-powered submersible water pumping systems tailored for farm grids and suburban homes.',
    longDescription: 'Defeat power outages and load shedding. Our solar pump installations use high-efficiency DC submersible pumps paired with smart solar controllers and premium PV panels. Get reliable automated water pumping with zero ongoing fuel or grid electrical costs during daylight hours.',
    iconName: 'Sun',
    features: [
      'High-efficiency DC solar submersible pumps',
      'Polycrystalline/Monocrystalline solar arrays',
      'Intelligent dry-run protection controllers',
      'Zero utility bills — fully off-grid solution',
      'Seamless manual/automatic mains bypass'
    ],
    imageSrc: '/src/assets/images/solar_pump_1779875857068.png'
  },
  {
    id: 'repairs',
    title: 'Repairs & Maintenance',
    description: 'Reliable troubleshooting, pump replacement, casing repairs, and long-term maintenance of existing boreholes.',
    longDescription: 'Is your borehole pump stuck, sounding noisy, or delivering muddy water? Our rapid-response technicians troubleshoot electrical faults, clean out silted boreholes, replace failing submersible motors, and provide comprehensive water safety test assessments to maintain crystal-clear flow.',
    iconName: 'Wrench',
    features: [
      'Fast-response diagnostic visits',
      'Submersible motor & pump replacements',
      'Borehole flushing, cleaning & desilting',
      'Electrical control box repairs & upgrades',
      'Pressure tank membrane replacement'
    ],
    imageSrc: '/src/assets/images/drilling_rig_1779875838701.png'
  },
  {
    id: 'systems',
    title: 'Water System Solutions',
    description: 'Complete integrated water piping, purification filtration systems, and main domestic water line link-ups.',
    longDescription: 'We connect your borehole system from source to tap. This includes configuring inline sediment filters, activated carbon systems, or UV sterilisers to ensure the mineral water is perfect for direct consumption. We complete full residential lockouts, linking borehole tanks straight to main household plumbing.',
    iconName: 'Layers',
    features: [
      'Household pipeline linkage and integration',
      'Multi-stage filtration (sediment & carbon)',
      'UV sterilization purification units',
      'Booster pump alignment and configuration',
      'High-grade brass valves and manifold builds'
    ],
    imageSrc: '/src/assets/images/clean_water_flow_1779875893843.png'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Consultation & Site Assessment',
    duration: '1-2 Days',
    description: 'We discuss your specific water volume specifications (domestic, irrigation, livestock, or commercial) and inspect the property layout.',
    details: [
      'Review landscape and access roads for drilling rigs',
      'Discuss budget, requirements, and package setups',
      'Advise on spacing guidelines near structures and septic tanks'
    ]
  },
  {
    stepNumber: 2,
    title: 'Hydrological Water Survey',
    duration: '1 Day',
    description: 'Using advanced electronic geophysical testing, our hydrologist sites the exact coordinates of maximum aquifer potential.',
    details: [
      'Perform electrical resistivity checking',
      'Deliver detailed borehole siting report document',
      'Prepare paperwork for local sub-catchment council approval'
    ]
  },
  {
    stepNumber: 3,
    title: 'Borehole Drilling',
    duration: '1-2 Days',
    description: 'Our heavy-duty rotary-mud or DTH rig arrives at your Zimbabwean property to drill to the targeted water depth safely and securely.',
    details: [
      'Drill through hard granite or sand formations',
      'Install Class 9/10 heavy-duty casing to secure the walls',
      'Evaluate yield rate to confirm water volume capacity (L/hour)'
    ]
  },
  {
    stepNumber: 4,
    title: 'Installation & Testing',
    duration: '1-2 Days',
    description: 'We install the selected submersible pump, set up your solar panel array or electrical line, mount the storage tank, and configure piping.',
    details: [
      'Install high-grade solar/electric submersible pump',
      'Erect elevated steel stand and durable JoJo tank',
      'Configure automatic controls, level switches, and booster system'
    ]
  },
  {
    stepNumber: 5,
    title: 'Maintenance & Support',
    duration: 'Continuous',
    description: 'We provide after-sales support, periodic water checks, system flushes, and rapid pump repair services to guarantee lifetime water supply.',
    details: [
      'Post-installation quality check and pressure testing',
      '12-Month technical service warranty coverage',
      'Rapid diagnostics support via our direct helpline line'
    ]
  }
];

export const STATS: Stat[] = [
  { id: '1', value: '450+', label: 'Boreholes Drilled', description: 'Successful drinking & irrigation water points across Zimbabwe.' },
  { id: '2', value: '100%', label: 'Water Siting Success', description: 'Relying on scientific geological and hydrological surveys.' },
  { id: '3', value: '380+', label: 'Solar Pumps Mounted', description: 'Clean off-grid power solutions running without electrical utility bills.' },
  { id: '4', value: '10+', label: 'Years Experience', description: 'Engineering-focused team with certified drillers and mechanics.' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Mr. Admire Moyo',
    role: 'Commercial Farm Owner',
    location: 'Chegutu, Mashonaland West',
    content: 'We contracted Core Borehole Drilling for our 15-hectare crop farm. They performed the survey, drilled to 85 meters, and installed a 10-horsepower solar water pump system with a 10,000L tank. Our irrigation has been running with zero interruptions. Brilliant engineering!',
    rating: 5
  },
  {
    id: 't2',
    name: 'Mrs. Chiedza Mpofu',
    role: 'Homeowner',
    location: 'Borrowdale, Harare',
    content: 'Municipal water cuts had made family life difficult. Core Borehole Drilling was fantastic—responsive, tidy, and finished the drilling and plumbing setup in just 3 days. Now we have automatic borehole water connected straight to our taps!',
    rating: 5
  },
  {
    id: 't3',
    name: 'Pastor Thomas Ndlovu',
    role: 'Community School Administrator',
    location: 'Inyathi, Matebeleland North',
    content: 'Providing sanitary clean water for over 600 students was our main concern. Core Borehole Drilling brought their large truck rig and drilled through deep rock layer to hit a magnificent aquifer. Their crew is polite, highly skilled, and respectful. God bless you!',
    rating: 5
  },
  {
    id: 't4',
    name: 'Engineer Farai Chigovera',
    role: 'Project Manager',
    location: 'Chinhoyi, Mashonaland West',
    content: 'As a civil contractor, I value adherence to specifications. Core Borehole Drilling Zimbabwe uses thick Class 9 casings, doesn’t cut corners, and handles the geological permit paperwork flawlessly. They are the most reliable drilling company in the country.',
    rating: 5
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'High-Yield Farm Solar Irrigation Hub',
    category: 'solar',
    location: 'Mazowe, Mashonaland Central',
    imageSrc: '/src/assets/images/solar_pump_1779875857068.png',
    description: 'Fully integrated solar-powered agricultural pumping grid designed for continuous overhead crop irrigation.',
    specs: ['Depth: 90 meters', 'Pump Size: 7.5HP DC Solar System', 'Tank Size: 2x 10,000L Storage Tanks', 'Yield: 6,800 Litres/Hour']
  },
  {
    id: 'p2',
    title: 'Harare Residential Solar Borehole System',
    category: 'comprehensive',
    location: 'Greystone Park, Harare',
    imageSrc: '/src/assets/images/water_tank_1779875875582.png',
    description: 'Complete borehole development including geophysical siting, drilling, elevated water stand erection, and main municipal household bypass integration.',
    specs: ['Depth: 60 meters', 'Stand Height: 6m Elevated Steel', 'Tank: 5,000L JoJo Tank', 'Purification: Inline UV Filter System']
  },
  {
    id: 'p3',
    title: 'Heavy-Duty Drilling in Extreme Rock',
    category: 'drilling',
    location: 'Zvishavane, Midlands Province',
    imageSrc: '/src/assets/images/drilling_rig_1779875838701.png',
    description: 'Drilling project tackling hard igneous rock sheets to secure fresh, uncontaminated borehole water for a rural clinic and housing complex.',
    specs: ['Depth: 110 meters', 'Method: High-Compressed Air DTH Rig', 'Casing: Reinforced Class 10 PVC', 'Yield: 4,500 Litres/Hour']
  },
  {
    id: 'p4',
    title: 'Schools Clean Drinking Water Initiative',
    category: 'comprehensive',
    location: 'Murewa, Mashonaland East',
    imageSrc: '/src/assets/images/clean_water_flow_1779875893843.png',
    description: 'Solar-pumped community sanitation center built at a primary school, delivering drinking water and washroom connection.',
    specs: ['Depth: 75 meters', 'Power: 4x 350W Solar Panels', 'Storage: 5,000L Anti-Algae Tank', 'Outlets: 6-Tap Drinking Station']
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'How much does it cost to drill a borehole in Zimbabwe?',
    answer: 'The cost depends on factors such as location (rock vs. sand formations), total depth required (typically 40m to 100m to hit stable water columns), and finishing styles (manual, electrical submersible, or solar submersible, plus optional steel stands & JoJo tanks). Contact our sales team using our quote form or via WhatsApp for a tailored, fully transparent cost estimate with no hidden fees.',
    category: 'Pricing'
  },
  {
    id: 'faq2',
    question: 'Why is conducting a water survey/siting necessary?',
    answer: 'A professional water survey is critical to map underground hydro-structures and locate accurate water-bearing gravels or rock fractures. Skipping siting significantly increases the risk of drilling a dry or low-yield hole. In Zimbabwe, sub-catchment authorities require an official hydrolist siting report to grant structural drilling permits.',
    category: 'Survey'
  },
  {
    id: 'faq3',
    question: 'How long does the drilling and pump installation take?',
    answer: 'Our process is highly streamlined. Siting takes 1 day, actual borehole drilling takes 1 to 2 days, and pump/tank system installation requires an additional 1 to 2 days. From your initial booking, you can have fully operational, high-pressure clean water flowing in less than 5 working days.',
    category: 'Process'
  },
  {
    id: 'faq4',
    question: 'Which areas in Zimbabwe do you cover?',
    answer: 'We provide borehole drilling and water systems construction all across Zimbabwe. We regularly service Greater Harare (including suburbs like Borrowdale, Glen Lorne, Mt Pleasant, Ruwa, Chitungwiza), Bulawayo, Mutare, Gweru, Masvingo, Chinhoyi, Kwekwe, Marondera, Bindura, and prominent agricultural farm areas.',
    category: 'Coverage'
  },
  {
    id: 'faq5',
    question: 'What is the standard warranty on your pumps and drilling?',
    answer: 'We provide a 1-year operational warranty on solar and electrical submersible motor pump units installed by our team, alongside a physical integrity guarantee on our casing installations. We deliver top-quality, heavy-duty pumps with thermal and dry-run sensors for maximum durability.',
    category: 'Support'
  }
];

export const REGIONS = [
  { name: 'Mashonaland Central', hubs: ['Bindura', 'Mazowe', 'Guruve', 'Mt Darwin'] },
  { name: 'Mashonaland East', hubs: ['Harare Suburbs', 'Marondera', 'Murewa', 'Goromonzi'] },
  { name: 'Mashonaland West', hubs: ['Chinhoyi', 'Chegutu', 'Karoi', 'Kadoma'] },
  { name: 'Midlands Province', hubs: ['Gweru', 'Kwekwe', 'Zvishavane', 'Shurugwi'] },
  { name: 'Matebeleland North & South', hubs: ['Bulawayo', 'Plumtree', 'Lupane', 'Gwanda'] },
  { name: 'Manicaland & Masvingo', hubs: ['Mutare', 'Rusape', 'Nyanga', 'Masvingo City'] }
];

export const SECTORS = [
  { name: 'Residential Properties', desc: 'Secure independent, high-pressure water connected directly to household taps and lush ornamental lawns, completely resolving water outages.' },
  { name: 'Agricultural Farms', desc: 'Sustain large crop irrigation, livestock water troughs, and farm operations with uninterrupted solar-powered pumping grids.' },
  { name: 'Schools & Clinics', desc: 'Establish safe, healthy, and hygienic water supply for dormitories, classrooms, clinics, and clean sanitary garden projects.' },
  { name: 'Commercial & Construction', desc: 'Support hotel layouts, manufacturing facilities, housing estates, and concrete mixing with continuous bulk water supplies.' }
];
