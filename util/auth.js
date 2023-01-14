import axios from "axios";

const API_KEY = "AIzaSyBPCCpusgKqXm0mMiPA9shjJwFbtXWW-OU";

export async function authenticate(mode, email, password) {
  const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`, {
    email: email,
    password: password,
    returnSecureToken: true
  })
}