import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
}

const ServiceCard = ({ image, title, description, onClick }: ServiceCardProps) => {
  return (
    <div className="card-gold group cursor-pointer overflow-hidden" onClick={onClick}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>
        <Button 
          variant="ghost" 
          className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-yellow-400"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;