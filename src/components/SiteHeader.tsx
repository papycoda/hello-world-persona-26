const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800/80 bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/80">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <a href="#home" className="font-bold text-white tracking-tight hover:text-green-400 transition-colors">
          Yemi &apos;Banwo
        </a>

        <nav aria-label="Primary navigation" className="overflow-x-auto">
          <ul className="flex items-center gap-5 md:gap-7 whitespace-nowrap">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
