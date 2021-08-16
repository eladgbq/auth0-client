import { useAuth0 } from "@auth0/auth0-react"

function Login() {

    const { loginWithRedirect } = useAuth0();

    return (
        <button style={{ marginTop: '10%', marginLeft: '3%' }} onClick={() => loginWithRedirect()}>LOGIN</button>
    );
}

export default Login;
