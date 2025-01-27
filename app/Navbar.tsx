import Link from 'next/link';



const Navbar = () => {
    return (
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">
            <Link href="/" legacyBehavior>
              <a>Logo</a>
            </Link>
          </div>
          <div className="space-x-4">
            <Link href="/" legacyBehavior>
              <a className="text-gray-300 hover:text-white">Home</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="text-gray-300 hover:text-white">About</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="text-gray-300 hover:text-white">Contact</a>
            </Link>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;