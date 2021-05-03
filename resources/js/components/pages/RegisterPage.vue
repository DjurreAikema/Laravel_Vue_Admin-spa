<template>
    <main class="form-signin">
        <form>
            <h1 class="h3 mb-3 fw-normal">Register</h1>
            <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email Address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPasswordConfirm" placeholder="Confirm Password">
                <label for="floatingPasswordConfirm">Confirm Password</label>
            </div>
            <div class="mb-3">
                <p>
                    Already have an account? <router-link to="/login" class="btn btn-sm btn-outline-primary">Login.</router-link>
                </p>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
        </form>
    </main>
</template>

<script>

</script>

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

    #floatingInput {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    #floatingPassword {
        margin-bottom: -1px;
        border-radius: 0;
    }

    #floatingPasswordConfirm {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>
