<template>
    <div class="background">
        <main class="form-signin">
            <form>
                <h1 class="h3 mb-3 fw-normal">Please Sign In</h1>
                <div class="form-floating">
                    <input v-model="form.email" type="email" name="email"
                           placeholder="name@example.com" id="emailLogin"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                    <label for="emailLogin">Email Address</label>
                    <has-error :form="form" field="email"></has-error>
                </div>
                <div class="form-floating">
                    <input v-model="form.password" type="password" name="password"
                           placeholder="Password" id="passwordLogin"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                    <label for="passwordLogin">Password</label>
                    <has-error :form="form" field="password"></has-error>
                </div>
                <div class="mb-3">
                    <p>
                        Don't have an account yet? <router-link to="/register" class="btn btn-sm btn-outline-primary">Sign Up.</router-link>
                    </p>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit" @click.prevent="loginUser">Sign in</button>
                <button class="w-100 btn btn-outline-success my-3" type="submit" @click.prevent="loginAsAdmin">Sign in as admin</button>
            </form>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: new Form({
                name: '',
                password: '',
            }),
        }
    },
    methods: {
        loginUser() {
            this.form.post('/api/login')
                .then(() => {
                    this.$router.push({name: "admin_examples"});
                }).catch(err => console.log(err))
        },
        loginAsAdmin() {
            axios.post('/api/login', {
                email: 'admin@admin.com',
                password: 'password'
            }).then(() => {
                this.$router.push({name: "admin_examples"});
            }).catch(err => console.log(err))
        }
    }
}
</script>

<style>
    .background {
        height: 100vh;
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
