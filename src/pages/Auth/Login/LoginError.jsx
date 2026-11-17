import { Link } from "react-router-dom";
import "./LoginError.css"; // optional styling

const LoginError = () => (
  <div className="login-error">
    <h2>Login Failed</h2>
    <p>We couldn’t find an account with those credentials.</p>
    <p>
      If you’re a visitor, you don’t need to log in — you can check our
      available services and make an enquiry directly.
    </p>
    <Link to="/content" className="content-link">
      Explorer Services
    </Link>
  </div>
);

export default LoginError;
