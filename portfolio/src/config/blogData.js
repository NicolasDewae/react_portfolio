import monPremierArticle from '../config/articles/monPremierArticle';
import monDeuxiemeArticle from '../config/articles/monDeuxiemeArticle';

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
      id: monDeuxiemeArticle.id,
      pathway: monDeuxiemeArticle.pathway,
      title: monDeuxiemeArticle.title,
      picture: monDeuxiemeArticle.picture,
      description: monDeuxiemeArticle.description,
      blogImages: [
        monDeuxiemeArticle.blogImages[0],
        monDeuxiemeArticle.blogImages[1],
        monDeuxiemeArticle.blogImages[2],
        monDeuxiemeArticle.blogImages[3],
        monDeuxiemeArticle.blogImages[4],
      ]
    }
]

export default blogData;