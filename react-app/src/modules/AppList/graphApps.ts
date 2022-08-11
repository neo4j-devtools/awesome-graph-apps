import browserLogo from '../../assets/images/neo4j-browser-logo.svg';
import bloomLogo from '../../assets/images/neo4j-bloom-logo.svg';
import dataImporterLogo from '../../assets/images/neo4j-data-importer-logo.svg'
import graphqlToolboxLogo from '../../assets/images/neo4j-graphql-toolbox-logo.png'
import graphGalleryLogo from '../../assets/images/graph-gallery.png'
import neodashLogo from '../../assets/images/neodash-icon.png'
import neulerLogo from '../../assets/images/neuler.png'
import chartsLogo from '../../assets/images/charts-logo.png'
import n10sLogo from '../../assets/images/neosemantics-icon.png'
import graphXrLogo from '../../assets/images/graphxr.png'
import yworksLogo from '../../assets/images/yworks.png'
import neo4jCommanderLogo from '../../assets/images/commander.png'
import queryAnalyzerLogo from '../../assets/images/qloganalyzer_icon.png'
import dbAnalyzerLogo from '../../assets/images/dbcountreport_icon.png'

export type GraphAppItem = {
  id: string;
  name: string;
  description: string;
  author: string;
  logo: string;
  baseUrl: string;
  unsecureBaseUrl?: string;
  links: {
    github?: string;
    docs?: string;
    feedback?: string;
    changelog?: string;
    twitter?: string;
    homepage?: string;
  }
}

const colonSlash = encodeURIComponent('://');
const colon = encodeURIComponent(':');
const at = encodeURIComponent('@');

export const neo4jApps: GraphAppItem[] = [
  {
    id: 'neo4j-browser',
    name: 'Neo4j Browser',
    baseUrl: `$appUrlProtocol://browser.neo4j.io?dbms=$protocol${colonSlash}$username${at}$hostname${colon}$port&db=$database`,
    unsecureBaseUrl: `$appUrlProtocol://browser.graphapp.io?dbms=$protocol${colonSlash}$username${at}$hostname${colon}$port&db=$database`,
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
    baseUrl: `https://bloom.neo4j.io?connectURL=$protocol${colonSlash}$username${at}$hostname${colon}$port&db=$database`,
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
    baseUrl: '$appUrlProtocol://data-importer.neo4j.io?dbms=$url&user=$username',
    unsecureBaseUrl: '$appUrlProtocol://data-importer.graphapp.io?dbms=$url&user=$username',
    author: 'Neo4j, Inc',
    description: 'Model and import data from flat CSV files into Neo4j',
    logo: dataImporterLogo,
    links: {
      changelog: 'https://neo4j-data-importer.canny.io/changelog',
      feedback: 'https://neo4j-data-importer.canny.io/feature-requests',
    }
  },
  {
    id: 'neo4j-graphql-toolbox',
    name: 'Neo4j GraphQL Toolbox',
    baseUrl: `https://graphql-toolbox.neo4j.io?connectURL=$protocol${colonSlash}$username${at}$hostname${colon}$port&db=$database`,
    author: 'Neo4j, Inc',
    description: 'Build (Generate) and Query Neo4j Backed GraphQL APIs in your Browser',
    logo: graphqlToolboxLogo,
    links: {
      github: 'https://github.com/neo4j/graphql/tree/dev/packages/graphql-toolbox',
      docs: 'https://neo4j.com/docs/graphql-manual/current/toolbox/',
      changelog: 'https://github.com/neo4j/graphql/releases',
      feedback: 'https://feedback.neo4j.com/graphql',
    }
  },
]

export const ecosystemApps: GraphAppItem[] = [

  {
    id: 'graph-gallery',
    name: 'Graph Gallery',
    baseUrl: '$appUrlProtocol://portal.graphgist.org',
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
    baseUrl: `$appUrlProtocol://neodash.graphapp.io?share&credentials=$protocol${colonSlash}$username${at}$database${colon}$hostname${colon}$port`,
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
    baseUrl: '$appUrlProtocol://neuler.graphapp.io?url=$url&username=$username',
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
    id: 'neosemantics',
    name: 'Neosemantics UI',
    baseUrl: '$appUrlProtocol://n10s.graphapp.io/?url=$url&user=$username&database=$database',
    author: 'Jesus Barrasa (Neo4j)',
    description: 'RDF, Ontologies, Linked Data Toolkit',
    logo: n10sLogo,
    links: {
      twitter: 'https://twitter.com/barrasadv',
      homepage: 'https://neo4j.com/labs/neosemantics/',
      feedback: 'https://github.com/neo4j-labs/neosemantics/issues',
      docs: 'https://neo4j.com/labs/neosemantics/4.3/',
      github: 'https://github.com/neo4j-labs/neosemantics'
    }
  },
  {
    id: 'query-analyzer',
    name: 'Query Log Analyzer',
    baseUrl: '$appUrlProtocol://queryloganalyzer.graphapp.io?url=$url&user=$username&database=$database',
    author: 'Kees Vegter (Neo4j)',
    description: 'Analyze and Visualize your Query Log Files',
    logo: queryAnalyzerLogo,
    links: {
      twitter: 'https://medium.com/@kees.vegter',
      homepage: 'https://medium.com/neo4j/neo4j-4-x-query-logging-enhancements-7943d7f4ac7f',
      feedback: 'https://github.com/kvegter/query-analyzer-app/issues',
      github: 'https://github.com/kvegter/query-analyzer-app'
    }
  },
  {
    id: 'db-analyzer',
    name: 'Database Analyzer',
    baseUrl: '$appUrlProtocol://databaseanalyzer.graphapp.io/?url=$url&user=$username&database=$database',
    author: 'Kees Vegter (Neo4j)',
    description: 'Analyze and Visualize your Graph Data Model',
    logo: dbAnalyzerLogo,
    links: {
      twitter: 'https://medium.com/@kees.vegter',
      homepage: 'https://medium.com/neo4j/neo4j-query-log-analyzer-and-db-analyzer-update-for-neo4j-4-0-with-new-features-181081a464a7',
      feedback: 'https://github.com/kvegter/dbreportapp/issues',
      github: 'https://github.com/kvegter/dbreportapp'
    }
  },
  {
    id: 'charts',
    name: 'Charts',
    baseUrl: '$appUrlProtocol://charts.graphapp.io?url=$url&user=$username&database=$database',
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
    baseUrl: '$appUrlProtocol://graphxr.kineviz.com/',
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
    baseUrl: '$appUrlProtocol://www.yworks.com/neo4j-explorer/',
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
    baseUrl: '$appUrlProtocol://neo4jcommander.com/',
    author: 'Netbiz Global',
    description: 'Edit, Clone, Merge, Calculate, Undo, Bookmarks, Export and much more',
    logo: neo4jCommanderLogo,
    links: {
      homepage: 'https://netbizltd.com/',
      docs: 'https://medium.com/neo4j/editing-data-in-neo4j-graphs-doesnt-have-to-be-hard-8e9791c731bc'
    }
  },
]