function Login() {
  return (
    <main className="login-page">
      <section className="login-header">
        <h1>Login</h1>
        <p>Access your account</p>
      </section>
      <form className="login-form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}

export default Login;
