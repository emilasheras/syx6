const urlData = [
    { name: 'index',        abbreviation: 'idx',    subdirectory: '/pages/',     path: 'idx',    brief: 'n/a',  tags: [],   subRoutes: []},
    { name: 'home',         abbreviation: 'hme',    subdirectory: '/pages/',     path: 'hme',    brief: 'n/a',  tags: [],   subRoutes: []},
    { name: 'gallery',      abbreviation: 'glr',    subdirectory: '/pages/',     path: 'glr',    brief: 'n/a',  tags: [],   subRoutes: [
        { name: 'asset',      subdirectory: '/pages/glr/',     path: 'asset/:id',    brief: 'n/a',   subRoutes: []},
        { name: 'enhance',    subdirectory: '/pages/glr/',     path: 'enhance/:id',  brief: 'n/a',   subRoutes: []},
        { name: 'process',    subdirectory: '/pages/glr/',     path: 'process/:id',  brief: 'n/a',   subRoutes: []},    
    ]},
    { name: 'nexus',        abbreviation: 'nxs',    subdirectory: '/pages/',     path: 'nxs',    brief: 'n/a',  tags: [],   subRoutes: []},
    { name: 'shop',         abbreviation: 'shp',    subdirectory: '/pages/',     path: 'shp',    brief: 'n/a',  tags: [],   subRoutes: []},
    { name: 'changelog',    abbreviation: 'clg',    subdirectory: '/pages/',     path: 'clg',    brief: 'n/a',  tags: [],   subRoutes: []},
    { name: 'about',        abbreviation: 'abt',    subdirectory: '/pages/',     path: 'abt',    brief: 'n/a',  tags: [],   subRoutes: []}
];
export default urlData;