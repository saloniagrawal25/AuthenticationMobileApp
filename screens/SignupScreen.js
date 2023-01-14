import { useState } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { authenticate } from '../util/auth';

function SignupScreen() {

  const [isLoading, setIsLoading] = useState(false)

  async function signupHandler({ email, password }) {
    setIsLoading(true);
    try { await authenticate("signUp", email, password) }
    catch (e) {
      Alert.alert("Authentication failed!!!", "Could not create user, please check your input or try again later!!")
    }
    setIsLoading(false);
  }

  if (isLoading)
    return <LoadingOverlay message={"Creating User..."} />

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
