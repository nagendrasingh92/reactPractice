function LoginPage() {
    return (
        <div className="loginPageWrap">
            <div className="pageContent">
                <div className="loginHeader">
                    <div className="iconWrap">
                        <i class="fa-solid fa-lock"></i>
                    </div>
                    Sign in
                </div>
                <div className="userNameWrap">
                    <input placeholder="Type UserName" />
                </div>
                <div className="passwordWrap">
                    <input placeholder="Type Password" />

                </div>
                <div className="rememberFunction">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    Remember Me.
                </div>
                <div className="signInbttn">
                    <button type="button"> SIGN IN</button>

                </div>
                <div className="singUp">
                <a href="url">Don't have an account? Sign Up</a>

                </div>
            </div>
        </div>

    )
}

export default LoginPage;