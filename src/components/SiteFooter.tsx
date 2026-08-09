const SiteFooter = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-sm text-gray-400">
        <p>© 2026 Yemi &apos;Banwo. Backend Engineer.</p>
        <div className="flex gap-5">
          <a href="https://github.com/papycoda" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">GitHub</a>
          <a href="mailto:opeyemi655@gmail.com" className="hover:text-green-400 transition-colors">Email</a>
          <a href="#home" className="hover:text-green-400 transition-colors">Back to top</a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
