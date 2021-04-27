<template>
    <div>
        <div class="row">
            <div class="col-md-12 px-4 my-2">
                <h1>
                    Examples
                    <router-link to="/examples/create" class="btn btn-outline-primary btn-lg mx-4">
                        <span class="me-2"><i class="bi bi-plus-square"></i></span>
                        <span>Create Example</span>
                    </router-link>
                </h1>
            </div>
            <div class="col-md-12 mb-3 px-4 my-1">
                <div class="card">
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
                                    <th style="text-align: right">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="example in examples" :key="example.id">
                                    <td>{{ example.id }}</td>
                                    <td>{{ example.name }}</td>
                                    <td>{{ example.details }}</td>
                                    <td style="text-align: right">
                                        <router-link :to="{name: 'EditExample', params: { id: example.id }}" class="btn btn-outline-success btn-sm">Edit</router-link>
                                        <button class="btn btn-outline-danger btn-sm" @click="deleteExample(example.id)">Delete</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <b-button v-b-modal.modal-1>Launch demo modal</b-button>

                <b-modal id="modal-1" title="BootstrapVue">
                    <p class="my-4">Hello from modal!</p>
                </b-modal>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            examples: [],
            editData: {
                name: '',
                details: ''
            },
            isAdding: false,
            addModal: false,
            editModal: false,
            deleteModal: false,
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
        updateExample() {
            this.axios
                .patch(`/api/examples`, this.editData);
        },
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
