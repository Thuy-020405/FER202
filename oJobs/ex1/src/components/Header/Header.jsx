import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Left */}
      <div className="header-left">
        <span className="logo">Jobs</span>
      </div>

      {/* Center */}
      <nav className="header-center">
        <a href="/">Trang chủ</a>
        <a href="/jobs">Việc làm</a>
        <a href="/community">Cộng đồng</a>
      </nav>

      {/* Right */}
      <div className="header-right">
        <a href="/login" className="login-btn">Đăng nhập</a>
        <button className="signup-btn">Đăng ký</button>
      </div>
    </header>
  );
};

export default Header;
