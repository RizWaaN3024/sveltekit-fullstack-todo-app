<script>
  let email = "";
  let password = "";
  let confirmPass = "";
  let error = false;
  let register = false;

  function handleAuthenticate() {
    if (!email || !password || (register && !confirmPass)) {
        error = true;
        return;
    }
  }

  function handleRegister() {
    register = !register;
  }
</script>

<div class="authContainer">
  <form action="">
    <h1>{register ? "Register" : "Login"}</h1>
    {#if error}
    <p class="error">The information you have entered is not correct</p>
    {/if}
    <label>
        <p class={email ? " above" : " center"}>Email</p>
      <input
        bind:value={email}
        type="email"
        placeholder="Email"
        name=""
        id=""
      />
    </label>
    <label>
        <p class={password ? " above" : " center"}>Password</p>
      <input
        bind:value={password}
        type="password"
        placeholder="Password"
        name=""
        id=""
      />
    </label>
    {#if register}
    <label>
        <p class={confirmPass ? " above" : " center"}>Confirm Password</p>
      <input
        bind:value={confirmPass}
        type="password"
        placeholder="Confirm Password"
        name=""
        id=""
      />
    </label>
    {/if}
    <button type="button">Submit</button>
  </form>
  <div class="options">
    <p>or</p>
    {#if register}
    <div><p>Already have an account?</p>
        <p on:click={handleRegister} on:keydown={() => {}}>Login</p>
    </div>
    {:else}
    <div>
        <p>Don't have an account?</p>
        <p on:click={handleRegister} on:keydown={() => {}}>Register</p>
    </div>
    {/if}
  </div>
</div>

<style>
  .authContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 24px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  form, 
  .options {
    width: 400px;
    max-width: 100%;
    margin: 0 auto;
  }

  form input {
    width: 100%;
  }

  h1 {
    text-align: center;
    font-size: 3rem;
  }

  form label {
    position: relative;
    border: 1px solid navy;
    border-radius: 5px;
  }
  form input {
    border: none;
    background: transparent;
    color: white;
    padding: 14px;
  }

  form input:focus {
    border: none;
    outline: none;
  }

  form label:focus-within {
    border-color: blue;
  }

  form button {
    background: navy;
    color: white;
    border: none;
    padding: 14px 0;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }

  form button:hover {
    background: blue;
  }

  .above, 
  .center {
    position: absolute;
    transform: translateY(-50%);
    pointer-events: none;
    color: white;
    border-radius: 4px;
    padding: 0 6px;
    font-size: 0.8rem;
  }

  .above {
    top: 0;
    left: 24px;
    background: navy;
    border: 1px solid blue;
    font-size: 0.7rem;
  }

  .center {
    top: 50%;
    left: 6px;
    border: 1px solid transparent;
    opacity: 0;
  }

  .error {
    color: coral;
    font-size: 0.9rem;
  }

  .options {
    padding: 14px 0;
    overflow: hidden;
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .options > p{
    position: relative;
    text-align: center;
    width: fit-content;
    margin: 0 auto;
    padding: 0 8px;
  }

  .options > p::after,
  .options > p::before {
    position: absolute;
    content: '';
    top: 50%;
    transform: translateY(-50%);
    width: 100vw;
    height: 1.5px;
    background: white;
  }

  .options > p::after {
    right: 100%;
  }

  .options > p::before {
    left: 100%;
  }

  .options div {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
  }

  .options div p:last-of-type {
    color: cyan;
    cursor: pointer;
  }
</style>
