<template>
    <div>
        <h3 class="text-center">Edit Example</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateExample">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="example.name">
                    </div>
                    <div class="form-group">
                        <label>Details</label>
                        <input type="text" class="form-control" v-model="example.details">
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
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
    created() {
        this.axios
            .get(`/api/examples/${this.$route.params.id}`)
            .then((res) => {
                this.example = res.data;
            });
    },
    methods: {
        updateExample() {
            this.axios
                .patch(`/api/examples/${this.$route.params.id}`, this.example)
                .then((res) => {
                    this.$router.push({ name: 'AllExamples' });
                });
        }
    }
}
</script>
