<template>
    <main class="form-signin">
        <form>
            <h1 class="h3 mb-3 fw-normal">Please Sign In</h1>
            <div class="form-floating">
                <input type="email" class="form-control" id="emailLogin" placeholder="name@example.com">
                <label for="emailLogin">Email Address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="passwordLogin" placeholder="Password">
                <label for="passwordLogin">Password</label>
            </div>
            <div class="mb-3">
                <p>
                    Don't have an account yet? <button class="btn btn-sm btn-outline-primary">Sign Up.</button>
                </p>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    </main>
</template>

<style>
    html,
    body {
        height: 100vh;
    }

    body {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: #f5f5f5;
    }

    .form-signin {
        width: 100vw;
        max-width: 330px;
        padding: 15px;
        margin: auto;
    }

    .form-signin .form-floating:focus-within {
        z-index: 2;
    }

    #emailLogin {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    #passwordLogin {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>
