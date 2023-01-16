import {useContext, useState} from 'react';
import {Alert} from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import {AuthContext} from '../store/auth-context';
import {authenticate} from '../util/auth';

function LoginScreen() {
  const AuthCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  async function loginHandler({email, password}) {
    setIsLoading(true);
    try {
      const token = await authenticate('signInWithPassword', email, password);
      AuthCtx.authenticate(token);
    } catch (e) {
      Alert.alert(
        'Authentication failed!!!',
        'Could not log you in, please check your credentials',
      );
      setIsLoading(false);
    }
  }

  if (isLoading) return <LoadingOverlay message={'Creating User...'} />;
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
