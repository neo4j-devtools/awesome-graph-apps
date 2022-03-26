import browserLogo from '../../assets/images/neo4j-browser-logo.svg';
import bloomLogo from '../../assets/images/neo4j-bloom-logo.svg';
import dataImporterLogo from '../../assets/images/neo4j-data-importer-logo.svg'
import graphGalleryLogo from '../../assets/images/graph-gallery.png'
import neodashLogo from '../../assets/images/neodash-icon.png'
import neulerLogo from '../../assets/images/neuler.png'
import chartsLogo from '../../assets/images/charts-logo.png'
import graphXrLogo from '../../assets/images/graphxr.png'
import yworksLogo from '../../assets/images/yworks.png'
import neo4jCommanderLogo from '../../assets/images/commander.png'


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
    feedback?: string;
    changelog?: string;
    twitter?: string;
    homepage?: string;
  }
}

const graphApps: GraphAppItem[] = [
  {
    id: 'neo4j-browser',
    name: 'Neo4j Browser',
    baseUrl: 'https://browser.neo4j.io?connectURL=$url&db=$database',
    author: 'Neo4j, Inc',
    description: 'A browser-based application for exploring Neo4j data.',
    logo: browserLogo,
    links: {
      docs: 'https://neo4j.com/docs/browser-manual',
      twitter: 'https://twitter.com/neo4j',
      homepage: 'https://neo4j.com/product/developer-tools/#browser',
      github: 'https://github.com/neo4j-devtools/neo4j-browser',
      feedback: 'https://neo4j-browser.canny.io/feature-requests',
      changelog: 'https://neo4j-browser.canny.io/changelog',

    }
  },
  {
    id: 'neo4j-bloom',
    name: 'Neo4j Bloom',
    baseUrl: 'https://bloom.neo4j.io?connectURL=$url&db=$database',
    author: 'Neo4j, Inc',
    description: 'Visual no-code graph exploration tool.',
    logo: bloomLogo,
    links: {
      docs: 'https://neo4j.com/docs/bloom-user-guide',
      homepage: 'https://neo4j.com/bloom',
      changelog: 'https://neo4j-bloom.canny.io/changelog',
      feedback: 'https://neo4j-bloom.canny.io/feature-requests',
      github: 'https://github.com/neo4j-devtools/neo4j-bloom'
    }
  },
  {
    id: 'neo4j-data-importer',
    name: 'Neo4j Data Importer',
    baseUrl: 'https://data-importer.neo4j.io?dbms=$url&user=$username&pass=$password',
    author: 'Neo4j, Inc',
    description: 'Model and import data from flat CSV files into Neo4j',
    logo: dataImporterLogo,
    links: {
      changelog: 'https://neo4j-data-importer.canny.io/changelog',
      feedback: 'https://neo4j-data-importer.canny.io/feature-requests',
    }
  },
  {
    id: 'graph-gallery',
    name: 'Graph Gallery',
    baseUrl: 'https://portal.graphgist.org',
    author: 'Neo4j Labs',
    description: 'Interactive Graph Examples',
    logo: graphGalleryLogo,
    links: {
      docs: 'https://medium.com/neo4j/meet-the-graph-gallery-3666a127efee',
      github: 'https://github.com/neo4j-apps/graph-examples'
    }
  },
  {
    id: 'neodash',
    name: 'NeoDash',
    baseUrl: 'https://neodash.graphapp.io?dbms=$url&db=$database&user=$username',
    author: 'Niels De Jong (Neo4j)',
    description: 'Neo4j Dashboard Builder',
    logo: neodashLogo,// 
    links: {
      docs: 'https://github.com/nielsdejong/neodash/blob/master/README.md',
      homepage: 'https://medium.com/neo4j/neodash-2-0-a-brand-new-way-to-visualize-neo4j-ec8dee689e9b',
      github: 'https://github.com/nielsdejong/neodash/',
      feedback: 'https://github.com/nielsdejong/neodash/issues'
    }
  },
  {
    id: 'neuler',
    name: 'Graph Algorithms Playground',
    baseUrl: 'https://neuler.graphapp.io?url=$url&username=$username&accessToken=$password',
    author: 'Neo4j Labs',
    description: 'Playground for Neo4j Graph Data Science',
    logo: neulerLogo,
    links: {
      docs: 'https://neo4j.com/developer/graph-data-science/neuler-no-code-graph-algorithms/',
      homepage: 'https://medium.com/neo4j/introducing-neuler-the-graph-algorithms-playground-d81042cfcd56',
      feedback: 'https://github.com/neo4j-devtools/neuler/issues',
      github: 'https://github.com/neo4j-devtools/neuler'
    }
  },
  {
    id: 'charts',
    name: 'Charts',
    baseUrl: 'https://charts.graphapp.io',
    author: 'Adam Cowley (Neo4j)',
    description: 'Build Charts from your Graphs',
    logo: chartsLogo,
    links: {
      twitter: 'https://twitter.com/adamcowley',
      homepage: 'https://medium.com/neo4j/creating-charts-from-your-graphs-2f5b4e86fd6c',
      feedback: 'https://github.com/neo4j-labs/charts/issues',
      github: 'https://github.com/neo4j-labs/charts'
    }
  },
  {
    id: 'graphxr',
    name: 'GraphXR',
    baseUrl: 'https://graphxr.kineviz.com/',
    author: 'Kineviz',
    description: 'GraphXR is a browser-based visualization tool.',
    logo: graphXrLogo,
    links: {
      homepage: 'https://kineviz.com/',
      docs: 'https://helpcenter.kineviz.com/user-guides/HC/'
    }
  },
  {
    id: 'yfiles-explorer',
    name: 'yFiles Neo4j Explorer',
    baseUrl: 'https://www.yworks.com/neo4j-explorer/',
    author: 'yWorks',
    description: 'Explore your Neo4j database',
    logo: yworksLogo,
    links: {
      homepage: 'https://yworks.com',
      docs: 'https://www.yworks.com/blog/neo4j-node-design'
    }
  },
  {
    id: 'neo4jcommander',
    name: 'Neo4j Commander 3',
    baseUrl: 'https://neo4jcommander.com/',
    author: 'Netbiz Global',
    description: 'Edit, Clone, Merge, Calculate, Undo, Bookmarks, Export and much more',
    logo: neo4jCommanderLogo,
    links: {
      homepage: 'https://netbizltd.com/',
      docs: 'https://medium.com/neo4j/editing-data-in-neo4j-graphs-doesnt-have-to-be-hard-8e9791c731bc'
    }
  },
]

export default graphApps;