

function Footer() {
  return (
    <footer className="bg-black border-t-2 border-blue-500 text-white py-4 text-center text-sm font-semibold bottom-0 w-full">
      <div className="container mx-auto">
        <h3 className="text-2xl font-semibold">StarDust 🌟</h3>
        <div className="copyright mt-4 text-gray-500">
          <p>
            &copy; <span className="text-blue-500">2023</span> StarDust
            . All Rights Reserved.
          </p>
          <a
            href="https://github.com/StarDust130"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline flex items-center justify-center mt-2"
          >
            <img
              className="w-5 h-5 mr-1 bg-gray-500 rounded-full"
              src="https://img.icons8.com/ios-filled/50/000000/github.png"
              alt="GitHub"
            />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
