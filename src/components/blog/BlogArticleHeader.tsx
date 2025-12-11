import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

interface BlogArticleHeaderProps {
  title: string;
  date: string;
  readTime: string;
}

const BlogArticleHeader = ({ title, date, readTime }: BlogArticleHeaderProps) => {
  return (
    <div className="mb-8">
      <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
        <Icon name="ArrowLeft" size={18} className="mr-2" />
        Назад к статьям
      </Link>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-yellow-500 to-orange-600 text-transparent bg-clip-text">
        {title}
      </h1>
      
      <div className="flex items-center gap-6 text-gray-400 mb-8">
        <span className="flex items-center gap-2">
          <Icon name="Calendar" size={16} />
          {date}
        </span>
        <span className="flex items-center gap-2">
          <Icon name="Clock" size={16} />
          {readTime}
        </span>
      </div>
    </div>
  );
};

export default BlogArticleHeader;
