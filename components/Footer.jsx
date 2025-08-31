const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground border-t border-border backdrop-blur-md py-5 text-center">
      <div className="mt-2 text-sm text-copy">
        &copy; {currentYear} schoolHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
