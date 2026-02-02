import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <button
        className="portfolio-btn"
        onClick={() => navigate("/")}
      >
        MyPortfolio
      </button>
    </div>
  );
}

export default Header;