<template>
    <div class="background">
        <main class="form-signin">
            <form>
                <h1 class="h3 mb-3 fw-normal">Please Register</h1>
                <div class="form-floating">
                    <input v-model="form.name" type="text" name="name"
                           placeholder="Name" id="registerName"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                    <label for="registerName">Name</label>
                    <has-error :form="form" field="name"></has-error>
                </div>
                <div class="form-floating">
                    <input v-model="form.email" type="email" name="email"
                           placeholder="name@example.com" id="registerEmail"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                    <label for="registerEmail">Email Address</label>
                    <has-error :form="form" field="email"></has-error>
                </div>
                <div class="form-floating">
                    <input v-model="form.password" type="password" name="password"
                           placeholder="Password" id="registerPassword"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                    <label for="registerPassword">Password</label>
                    <has-error :form="form" field="password"></has-error>
                </div>
                <div class="form-floating">
                    <input v-model="form.password_confirmation" type="password" name="password_confirmation"
                           placeholder="Confirm Password" id="registerPasswordConfirm"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('password_confirmation') }">
                    <label for="registerPasswordConfirm">Confirm Password</label>
                    <has-error :form="form" field="password_confirmation"></has-error>
                </div>
                <div class="mb-3">
                    <p>
                        Already have an account? <router-link to="/login" class="btn btn-sm btn-outline-primary">Login.</router-link>
                    </p>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit" @click.prevent="registerUser">
                    Sign up
                </button>
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
                    email: '',
                    password: '',
                    password_confirmation: '',
                }),
            }
        },
        methods: {
            registerUser() {
                this.form.post('/api/register')
                    .then(() => {
                        console.log('saved')
                    }).catch(err => console.log(err))
            }
        }
    }
</script>

<style>
    #registerName {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    #registerEmail {
        margin-bottom: -1px;
        border-radius: 0;
    }

    #registerPassword {
        margin-bottom: -1px;
        border-radius: 0;
    }

    #registerPasswordConfirm {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>
