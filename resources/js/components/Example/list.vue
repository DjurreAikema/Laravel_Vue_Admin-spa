<template>
    <div>
        <div class="row">
            <div class="col-md-12 mb-3">
                <div class="card m-4">
                    <div class="card-header">
                        <span><i class="bi bi-table me-2"></i></span> Examples List
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table
                                id="example"
                                class="table table-striped data-table"
                                style="width: 100%"
                            >
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Details</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="example in examples" :key="example.id">
                                        <td>{{ example.id }}</td>
                                        <td>{{ example.name }}</td>
                                        <td>{{ example.details }}</td>
                                        <td>
                                            <div class="btn-group" role="group">
                                                <router-link :to="{name: 'EditExample', params: { id: example.id }}" class="btn btn-success">Edit</router-link>
                                                <button class="btn btn-danger" @click="deleteExample(example.id)">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            examples: []
        }
    },
    created() {
        this.axios
            .get('/api/examples/')
            .then(response => {
                this.examples = response.data;
            }).catch(err => {
                console.log(err)
            });
    },
    methods: {
        deleteExample(id) {
            this.axios
                .delete(`/api/examples/${id}`)
                .then(response => {
                    let i = this.examples.map(data => data.id).indexOf(id);
                    this.examples.splice(i, 1)
                });
        }
    }
}
</script>
