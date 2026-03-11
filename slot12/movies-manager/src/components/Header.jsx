import { Navbar, Container, Button } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Movie System</Navbar.Brand>
        {user && (
          <div className="text-white">
            Xin chào {user.username}
            <Button size="sm" className="ms-3" onClick={logout}>
              Logout
            </Button>
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;