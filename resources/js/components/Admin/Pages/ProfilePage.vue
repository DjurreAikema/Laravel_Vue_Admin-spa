<template>
    <div>
        <h1>Profile page</h1>
        <p>Name: {{currentUser.name}}</p>
        <p>E-Mail: {{currentUser.email}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {}
        }
    },
    mounted() {
        axios.get('/api/user')
            .then((res)=>{
            this.user = res.data
        })
    },
    computed: {
        currentUser: {
            get() {
                return this.$store.state.currentUser.user;
            }
        }
    }
}
</script>
