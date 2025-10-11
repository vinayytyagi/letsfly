import Link from 'next/link';

const Button = ({ href, onClick, children, className }) => {
  const commonClasses = `bg-[#d5e880] text-[#0d3a48] py-3 px-8 rounded-br-3xl rounded-md hover:bg-[#0d3a48] hover:text-white hover:rounded-lg transition-all duration-500 cursor-pointer ${className || ''}`;

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
