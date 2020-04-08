export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '5e8dd98c624aca887431a550',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-f4jj4ue5',
                  apiId: '57837985-fc01-4bb3-9ed0-afe04bfb819b'
                },
                {
                  buildHookId: '5e8dd98c415bb3861531d430',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-f5i94d1d',
                  apiId: 'effdbd1c-91f3-4ac7-acf4-282e25ad556f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/evanzummeren/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-f5i94d1d.netlify.com', category: 'apps'}
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
