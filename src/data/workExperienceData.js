const workExperience = [
  {
    id: 'we-01',
    date: '1995 - 1997',
    title: 'Co-owner and technical director',
    subtitle: 'St. Petersburg, Russia',
    description: 'Co-owner and technical director of a computer store',
    tasks: [
      'Purchase of computer components',
      'Computer assembly and testing',
      'Warranty and post-warranty repairs',
    ],
  },
  {
    id: 'we-02',
    date: '1999 - 2000',
    title: 'Network administrator',
    subtitle: 'bfb Leipzig, Germany',
    description:
      'Network administrator with the function of consulting of internal clients',
    tasks: [
      'Installation and user-related configuration of new PCs',
      "Repair and maintenance work (PC's and peripherals)",
      'Setup, configuration and administration of networks',
      'Customer consulting',
    ],
  },
  {
    id: 'we-03',
    date: '2002 - 2006',
    title: 'IT Consultant',
    subtitle: 'Mentaltec GbR Leipzig, Germany',
    description:
      'IT consultant in project as external employee in the EDI team at T-Systems CSM GmbH in Darmstadt, Germany, ZRZ DP',
    tasks: [
      'Administration of UNIX and Windows server systems',
      'Securing systems in the EDI area',
      'Application support/optimization in the EDI area',
      'Errorhandling, -eskalation, -analysys',
      'Script development',
      'Optimizing and planning process flows',
      'Monitoring to ensure operation',
      'Creating documentation',
    ],
  },
  {
    id: 'we-04',
    date: '2007 - 2009',
    title: 'IT Consultant',
    subtitle: 'CSB-System AG Geilenkirchen, Germany',
    description: 'Food industry ERP-Software IT Concultant',
    projects: [
      'Project Manager at Klaipedos Mesine, Lithuania - Concept Development, Procurement, Warehouse, Sales, EDI, M-ERP',
      'Subproject manager at Agaras, Lithuania - Warehouse, Sales, Cutting, EDI, M-ERP',
      'Subproject manager at Specialty Meats, Russia - Concept development, Warehouse, Sales, EDI, M-ERP',
      'Subproject manager at Jupiter, Russia - Concept development, EDI',
    ],
    tasks: [
      'Consulting in areas: Procurement, Warehouse, Sales, EDI, M-ERP',
      'Technical support and hotline service',
      'Creating documentation and training materials',
      'Organization and implementation of trainings and presentations',
      'Translation and interpretation function',
    ],
  },
  {
    id: 'we-05',
    date: '2009 - dato',
    title: 'Co-owner and CEO',
    subtitle: 'Reprosystems Ltd. St. Petersburg, Russia',
    description:
      'Co-owner and CEO for a company providing engineering printing services (drawings, engineering documentation, etc) - 10 employees.',
    tasks: [
      'Registration of a company, completion of all necessary formalities',
      'Finding and renting office space',
      'Procurement, installation and configuration - general hardware',
      'Procurement, installation and configuration - Special printing and postpress equipment (plotters, etc.)',
      'Setup and configuration of an internal network',
      'Human resource management',
      'Purchasing (technical equipment, consumables)',
      'Production management',
      'Sales (customer acquisition, price negotiations, framework agreements)',
      'Support for major customers',
    ],
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => resolve(workExperience));
  });

// eslint-disable-next-line
export default {
  fetchAll,
};
