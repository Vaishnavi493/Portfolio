const navLinks = [
  { name: 'About', path: '#about' },
  { name: 'Skills', path: '#skills' },
  { name: 'Projects', path: '#projects' },
  { name: 'Contact', path: '#contact' },
];

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="flex justify-center items-center gap-8 px-4 py-4 text-xl font-small">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.path}
            className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;