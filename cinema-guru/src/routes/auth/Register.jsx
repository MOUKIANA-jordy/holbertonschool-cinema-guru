import './auth.css';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';

function Register({
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

      <Button label="Register" onClick={() => {}} />
    </div>
  );
}

export default Register;
