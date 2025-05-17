import React, { useState } from "react";
import { Container, LogoutBtn, Logo } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu, X } from "lucide-react";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  const handleNavigate = (slug) => {
    navigate(slug);
    setMenuOpen(false);
  };

  return (
    <header className="bg-gray-100 shadow-md sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo width="80px" />
          </Link>

          {/* Hamburger Menu (mobile) */}
          <div className="lg:hidden">
            <button
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Nav Items */}
          <ul
            className={`flex-col lg:flex-row lg:flex gap-6 items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none transition-all duration-300 ${
              menuOpen ? "flex p-6 z-40" : "hidden"
            }`}
          >
            {navItems.map(
              (item, index) =>
                item.active && (
                  <li key={index}>
                    <button
                      onClick={() => handleNavigate(item.slug)}
                      className="text-gray-800 font-medium hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
