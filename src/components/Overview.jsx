import { 
  ShoppingCartIcon, 
  BanknotesIcon, 
  ArchiveBoxIcon, 
  CurrencyDollarIcon 
} from "@heroicons/react/24/outline";

const Overview = () => {
  // Data for the cards; update the values as needed.
  const cardData = [
    {
      title: "Total Sales",
      amount: "GHS 12,400",
      icon: <ShoppingCartIcon className="text-[var(--color-primary)]/80 h-12 w-12" />,
    },
    {
      title: "Total Purchases",
      amount: "GHS 9,800",
      icon: <BanknotesIcon className="text-[var(--color-primary)]/80 h-12 w-12" />,
    },
    {
      title: "Total Products",
      amount: "1240",
      icon: <ArchiveBoxIcon className="text-[var(--color-primary)]/80 h-12 w-12" />,
    },
    {
      title: "Total Profit",
      amount: "GHS 2,300",
      icon: <CurrencyDollarIcon className="text-[var(--color-primary)]/80 h-12 w-12" />,
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-sm p-6 transition-all duration-300"
        >
          <div className="flex items-center space-x-4">
            <div>{card.icon}</div>
            <div>
              <h3 className="text-sm text-gray-500">{card.title}</h3>
              <p className="text-2xl font-bold text-gray-800">{card.amount}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Overview;
