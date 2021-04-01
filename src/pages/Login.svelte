<script>
    let username = "";
    let password = "";

    const handleSubmit = () => {
        alert("Username: " + username + "\nPassword: " + password);

        submit({email, password})
    }

    export let submit;
</script>

<form on:submit="{handleSubmit}">
    <h3>
        <label>Username</label>
        <input name = "username" bind:value={username} />
        <label>Password</label>
        <input name = "password" bind:value={password} />
    </h3>

    <button>Login</button>
</form>

<style>
    form {
    background: #fff;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }

    button {
    margin-top: 20px;
    background: grey;
    color: white;
    padding: 10px 0;
    width: 200px;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    }

    button:hover {
        background: darkgrey;
    }
</style>