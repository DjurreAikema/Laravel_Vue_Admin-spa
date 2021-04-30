<template>
    <div>
        <div class="row">
            <div class="col-md-12 px-4 my-2">
                <h1>
                    Examples
                    <button class="btn btn-outline-primary btn mx-4" @click="addItemModalVisible = true">
                        <span class="me-2"><i class="bi bi-plus-square"></i></span>
                        <span>Create Example</span>
                    </button>
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
                                            <button class="btn btn-outline-danger btn-sm" @click="confirmDeleteItem(example.id)">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Delete Modal -->
        <Modal :isVisible="deleteItemModalVisible" @cancel="deleteItemModalVisible = false" @confirm="deleteExample(itemToDelete)">
            <h3 slot="header">Delete example</h3>
            <div slot="body">Are you sure you want to delete this Example?</div>
            <button slot="btn-confirm" class="btn btn-outline-danger">Delete example</button>
        </Modal>

        <!-- Add Modal -->
        <Modal :isVisible="addItemModalVisible" @cancel="addItemModalVisible = false" @confirm="addExample()">
            <h3 slot="header">Add Example</h3>
            <div slot="body">
                <form @submit.prevent="addExample">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="example.name">
                    </div>
                    <div class="form-group">
                        <label>Details</label>
                        <input type="text" class="form-control" v-model="example.details">
                    </div>
                </form>
            </div>
            <button type="submit" slot="btn-confirm" class="btn btn-outline-success">Create Example</button>
        </Modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            examples: [],
            example: {},
            deleteItemModalVisible: false,
            addItemModalVisible: false,
            itemToDelete: 0,
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
        getExamples() {
            this.axios
                .get('/api/examples/')
                .then(response => {
                    this.examples = response.data;
                }).catch(err => {
                console.log(err)
            });
        },
        confirmDeleteItem(id){
            this.deleteItemModalVisible = true;
            this.itemToDelete = id;
        },
        deleteExample(id) {
            this.axios
                .delete(`/api/examples/${id}`)
                .then(response => {
                    let i = this.examples.map(data => data.id).indexOf(id);
                    this.examples.splice(i, 1)
                });
            this.deleteItemModalVisible = false;
        },
        addExample() {
            this.axios
                .post('/api/examples', this.example)
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
            this.examples = {}
            this.addItemModalVisible = false;
            this.getExamples()
        },
    }
}
</script>
