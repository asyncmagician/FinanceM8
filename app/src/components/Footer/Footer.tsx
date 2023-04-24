const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 mt-8">
      <p className="text-center text-black text-sm">
        &copy; {currentYear} - FinanceMate
      </p>
    </footer>
  );
};

export default Footer;
