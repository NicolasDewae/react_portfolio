import her from './articles/her';
import monDeuxiemeArticle from '../config/articles/monDeuxiemeArticle';

const blogData = [
    {
      id: her.id,
      pathway: her.pathway,
      title: her.title1,
      picture: her.picture,
      description: her.description,
      blogImages: [
        her.blogImages[0],
        her.blogImages[1],
        her.blogImages[2],
        her.blogImages[3],
        her.blogImages[4],
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