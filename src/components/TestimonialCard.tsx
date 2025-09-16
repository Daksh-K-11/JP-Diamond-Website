import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({ name, role, company, content, rating }: TestimonialCardProps) => {
  return (
    <div className="card-gold p-6 h-full">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-primary fill-current' : 'text-muted-foreground'
            }`}
          />
        ))}
      </div>
      
      <blockquote className="text-foreground/90 mb-6 leading-relaxed">
        "{content}"
      </blockquote>
      
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-yellow-400 rounded-full flex items-center justify-center text-white font-semibold text-lg">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;