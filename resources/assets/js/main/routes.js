export default [
    {
        path: '/',
        name: 'index',
        component: resolve => require(['./pages/index.vue'], resolve)
    }, {
        path: '/todo',
        name: 'todo',
        meta: { slide: false },
        component: resolve => require(['./pages/todo.vue'], resolve)
    }, {
        path: '/project',
        name: 'project',
        meta: { slide: false },
        component: resolve => require(['./pages/project.vue'], resolve)
    }, {
        path: '/project/panel/:projectid',
        name: 'project-panel',
        meta: { slide: false },
        component: resolve => require(['./pages/project/panel.vue'], resolve)
    }, {
        path: '/docs',
        name: 'docs',
        meta: { slide: false },
        component: resolve => require(['./pages/docs.vue'], resolve)
    }, {
        path: '/team',
        name: 'team',
        meta: { slide: false },
        component: resolve => require(['./pages/team.vue'], resolve)
    }
]
