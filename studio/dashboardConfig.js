export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6230776191804a26bdefb185',
                  title: 'Sanity Studio',
                  name: 'reducare-studio-xsfo1aqr',
                  apiId: '29d7b15b-c442-4e43-8cec-1e3ec0ad3223'
                },
                {
                  buildHookId: '62307761587d4327c49c31b8',
                  title: 'Landing pages Website',
                  name: 'reducare-web',
                  apiId: 'd0305884-c026-45a9-86e5-af8a3cc0c621'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/manimul/reducare',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://reducare-web.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
