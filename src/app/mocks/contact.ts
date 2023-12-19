interface contactInfo {
  name: string;
  link: string;
  isFile?: boolean;
}

const contact: contactInfo[] = [
  {
    name: 'Resume',
    link: '/files/CV-IGNACIO_KRUCHOWSKI.pdf',
    isFile: true
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/ignacio-kruchowski/',
    isFile: false
  },
  {
    name: 'Github',
    link: 'https://www.github.com/krushodev',
    isFile: false
  }
];

export default contact;
