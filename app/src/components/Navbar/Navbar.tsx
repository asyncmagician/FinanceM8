export const Navbar: React.FC = () => {
  return (
    <header className="bg-pink-950 px-4 py-3 flex items-center justify-between">
      <h1 className="text-white text-xl">FinanceMate</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-pink-400">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/settings" className="text-white hover:text-pink-400">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
