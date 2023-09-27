// components/Header.tsx
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <div>
            <Link href="/">
              <p className="text-white font-bold text-xl">Logo</p>
            </Link>
          </div>
          <div>
            <Link href="/#features">
              <p className="text-white mr-4">Recursos</p>
            </Link>
            <Link href="/#contact">
              <p className="text-white">Contato</p>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
