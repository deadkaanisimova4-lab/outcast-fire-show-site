import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const BlogHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-primary/20">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
          <Icon name="Flame" size={32} />
          <span>OUTCAST Fire Show</span>
        </Link>
        
        <div className="flex gap-3">
          <Link to="/blog">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
              <Icon name="BookOpen" size={18} className="mr-2" />
              Блог
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
              <Icon name="Home" size={18} className="mr-2" />
              Главная
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default BlogHeader;
