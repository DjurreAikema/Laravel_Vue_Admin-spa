<template>
    <div>
        <h1>Profile page</h1>
        <p>Name: {{user.name}}</p>
        <p>E-Mail: {{user.email}}</p>
        <button @click.prevent="logout">Logout</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {}
        }
    },
    methods: {
        logout(){
            axios.post('/api/logout')
                .then(()=> {
                    this.$router.push({name: "login"})
                })
        }
    },
    mounted() {
        axios.get('/api/user')
            .then((res)=>{
            this.user = res.data
        })
    }
}
</script>
