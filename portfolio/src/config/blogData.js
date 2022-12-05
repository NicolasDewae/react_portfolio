import monPremierArticle from '../config/articles/monPremierArticle';

const blogData = [
    {
      id: monPremierArticle.id,
      pathway: monPremierArticle.pathway,
      title: monPremierArticle.title,
      picture: monPremierArticle.picture,
      description: monPremierArticle.description,
      blogImages: [
        monPremierArticle.blogImages[0],
        monPremierArticle.blogImages[1],
        monPremierArticle.blogImages[2],
        monPremierArticle.blogImages[3],
        monPremierArticle.blogImages[4],
      ]
      
    },
    {
        id: 2,
        pathway: 'titreDeuxiemeArticle',
        title: 'Titre du second article',
        picture: '/assets/img/street_view-2.jpg',
        description: 'Longue description du second article, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur interdum, nisl nunc consectetur nisi, eget consectetur nisi nisl eget consectetur nisi.',
        blogImages: [
            '/assets/img/street_view-2.jpg',
            '/assets/img/street_view-2.jpg',
            '/assets/img/street_view-2.jpg',
            '/assets/img/street_view-2.jpg',
            '/assets/img/street_view-2.jpg',
        ]
    }
]

export default blogData;