import './auth.css';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';

function Login({
  username,
  password,
  setUsername,
  setPassword,
}) {
  return (
    <div>
      <Input
        label="Username"
        value={username}
        setValue={setUsername}
      />

      <Input
        label="Password"
        type="password"
        value={password}
        setValue={setPassword}
      />

      <Button label="Login" onClick={() => {}} />
    </div>
  );
}

export default Login;
