import her from './articles/her';
import monDeuxiemeArticle from '../config/articles/monDeuxiemeArticle';

const blogData = [
    {
      id: her.id,
      pathway: her.pathway,
      title: her.title1,
      picture: her.picture.img1,
      description: her.description,
    },
    {
      id: monDeuxiemeArticle.id,
      pathway: monDeuxiemeArticle.pathway,
      title: monDeuxiemeArticle.title,
      picture: monDeuxiemeArticle.picture,
      description: monDeuxiemeArticle.description,
    }
]

export default blogData;