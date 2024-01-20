const urlData = [
    { name: 'index',        abbreviation: 'idx',    subdirectory: '/pages/',     path: 'idx',    brief: 'n/a',  tags: [],   subRoutes: [], isAuthNeeded: false},
    { name: 'home',         abbreviation: 'hme',    subdirectory: '/pages/',     path: 'hme',    brief: 'n/a',  tags: [],   subRoutes: [], isAuthNeeded: false},
    { name: 'gallery',      abbreviation: 'glr',    subdirectory: '/pages/',     path: 'glr',    brief: 'n/a',  tags: [],   subRoutes: [
        { name: 'asset',      subdirectory: '/pages/glr/',     path: 'asset/:id',    brief: 'n/a',   subRoutes: [], isAuthNeeded: true},
        { name: 'enhance',    subdirectory: '/pages/glr/',     path: 'enhance/:id',  brief: 'n/a',   subRoutes: [], isAuthNeeded: true},
        { name: 'process',    subdirectory: '/pages/glr/',     path: 'process/:id',  brief: 'n/a',   subRoutes: [], isAuthNeeded: true},    
    ], isAuthNeeded: true},
    { name: 'nexus',        abbreviation: 'nxs',    subdirectory: '/pages/',     path: 'nxs',    brief: 'n/a',  tags: [],   subRoutes: [], isAuthNeeded: false},
    { name: 'shop',         abbreviation: 'shp',    subdirectory: '/pages/',     path: 'shp',    brief: 'n/a',  tags: [],   subRoutes: [], isAuthNeeded: true},
    { name: 'changelog',    abbreviation: 'clg',    subdirectory: '/pages/',     path: 'clg',    brief: 'n/a',  tags: [],   subRoutes: [], isAuthNeeded: false},
    { name: 'about',        abbreviation: 'abt',    subdirectory: '/pages/',     path: 'abt',    brief: 'n/a',  tags: [],   subRoutes: [], isAuthNeeded: false},
];
export default urlData;