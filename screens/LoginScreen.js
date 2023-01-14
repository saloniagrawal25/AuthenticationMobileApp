import { useState } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { authenticate } from '../util/auth';

function LoginScreen() {

  const [isLoading, setIsLoading] = useState(false)

  async function loginHandler({ email, password }) {
    setIsLoading(true);
    try { await authenticate("signInWithPassword", email, password) }
    catch (e) {
      Alert.alert("Authentication failed!!!", "Could not log you in, please check your credentials")
    }
    setIsLoading(false);
  }

  if (isLoading)
    return <LoadingOverlay message={"Creating User..."} />
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
