<template>
    <div>
        <h3 class="text-center">Create Example</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addExample">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="example.name">
                    </div>
                    <div class="form-group">
                        <label>Details</label>
                        <input type="text" class="form-control" v-model="example.details">
                    </div>
                    <button type="submit" class="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            example: {}
        }
    },
    methods: {
        addExample() {
            this.axios
                .post('/api/examples', this.example)
                .then(response => (
                    this.$router.push({ name: 'AllExamples' })
                ))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        }
    }
}
</script>
