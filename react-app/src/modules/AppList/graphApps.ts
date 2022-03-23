import logo from '../../assets/images/cloud-icon.png';
import browserLogo from '../../assets/images/neo4j-browser-logo.svg';
import bloomLogo from '../../assets/images/neo4j-bloom-logo.svg';

export type GraphAppItem = {
  id: string;
  name: string;
  description: string;
  author: string;
  logo: string;
  baseUrl: string;
  links: {
    github?: string;
    docs?: string;
    twitter?: string;
    homepage?: string;
  }
}

const graphApps: GraphAppItem[] = [
  {
    id: 'neo4j-browser',
    name: 'Neo4j Browser',
    baseUrl: 'https://browser.neo4j.io',
    author: 'Neo4j, Inc',
    description: 'A browser-based application for exploring Neo4j data.',
    logo: browserLogo,
    links: {
      github: '',
      docs: 'https://neo4j.com/docs/neo4j-browser/current/',
      twitter: 'https://twitter.com/neo4j',
      homepage: 'https://neo4j.com/',
    }
  },
  {
    id: 'neo4j-bloom',
    name: 'Neo4j Bloom',
    baseUrl: 'https://browser.neo4j.io',
    author: 'Neo4j, Inc',
    description: 'A browser-based application for exploring Neo4j data.',
    logo: bloomLogo,
    links: {
      github: '',
      docs: 'https://neo4j.com/docs/neo4j-browser/current/',
      twitter: 'https://twitter.com/neo4j',
      homepage: 'https://neo4j.com/',
    }
  },
  {
    id: 'cello',
    name: 'Neo4j Browser',
    baseUrl: 'https://browser.neo4j.io',
    author: 'Neo4j, Inc',
    description: 'A browser-based application for exploring Neo4j data.',
    logo: logo,
    links: {
      github: '',
      docs: 'https://neo4j.com/docs/neo4j-browser/current/',
      twitter: 'https://twitter.com/neo4j',
      homepage: 'https://neo4j.com/',

    }
  }
]

export default graphApps;