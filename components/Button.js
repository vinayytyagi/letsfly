import Link from 'next/link';

const Button = ({ href, onClick, children, className }) => {
  const commonClasses = `bg-[#d5e880] text-black font-bold py-3 px-8 rounded-br-lg hover:bg-[#0d3a48] hover:text-white hover:rounded-lg transition-all duration-300 ${className || ''}`;

  if (href) {
    return (
      <Link href={href} className={commonClasses}>
          {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={commonClasses}>
      {children}
    </button>
  );
};

export default Button;
