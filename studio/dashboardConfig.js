export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6044113d4813f7deb260ff84',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-auhvwbfp',
                  apiId: '82fe7220-3bf3-47d5-9ec7-dad893cf8f3c'
                },
                {
                  buildHookId: '6044113ebc9af9ec2b35e7c7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1je663fn',
                  apiId: '6f476ea8-71b6-4d28-960d-1ac1b3cb7053'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adamaragon/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1je663fn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
