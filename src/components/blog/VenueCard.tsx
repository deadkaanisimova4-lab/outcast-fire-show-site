import Icon from '@/components/ui/icon';

interface VenueCardProps {
  number: number;
  title: string;
  info: {
    address: string;
    capacity: string;
    price: string;
    phone: string;
  };
  features: string[];
  experience: string;
}

const VenueCard = ({ number, title, info, features, experience }: VenueCardProps) => {
  return (
    <>
      <h2 className="text-3xl font-bold text-primary mb-6 mt-12 flex items-center gap-3">
        <span className="bg-gradient-to-r from-primary to-orange-500 text-black rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold">
          {number}
        </span>
        {title}
      </h2>

      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div>
            <h4 className="text-lg font-bold text-white mb-3">Информация:</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={18} className="text-primary mt-1 flex-shrink-0" />
                <span>Адрес: {info.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Users" size={18} className="text-primary mt-1 flex-shrink-0" />
                <span>Вместимость: {info.capacity}</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="DollarSign" size={18} className="text-primary mt-1 flex-shrink-0" />
                <span>{info.price}</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Phone" size={18} className="text-primary mt-1 flex-shrink-0" />
                <span>{info.phone}</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-3">Почему подходит:</h4>
            <ul className="space-y-2 text-gray-300">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Icon name="Flame" size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-primary/10 rounded-lg p-4 mt-4">
          <p className="text-gray-300">
            <strong className="text-white">Наш опыт:</strong> {experience}
          </p>
        </div>
      </div>
    </>
  );
};

export default VenueCard;
