<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Example Table</h3>
                        <div class="card-tools">
                            <button class="btn btn-success" @click="openModalWindow">
                                Add New Example <i class="fas fa-user-plus fa-fw"></i>
                            </button>
                        </div>
                    </div>

                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Details</th>
                                    <th>Created At</th>
                                    <th style="text-align: right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="example in examples" :key="example.id">
                                    <td>{{ example.id }}</td>
                                    <td>{{ example.name }}</td>
                                    <td>{{ example.details }}</td>
                                    <td>{{ example.created_at}}</td>
                                    <td>
                                        <a href="#" data-id="example.id" @click="editModalWindow(example)">
                                            Edit
                                        </a>
                                        |
                                        <a href="#" @click="deleteExample(example.id)">
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <Bs-Modal id="formModal" title="edit/add form modal" v-model="showForm">
            <div slot="title">
                <h5 v-show="!editMode" class="modal-title" id="addNewLabel">Add New Example</h5>
                <h5 v-show="editMode" class="modal-title" id="addNewLabel">Update Example</h5>
            </div>

            <form slot="body" id="modalForm" @submit.prevent="editMode ? updateExample() : createExample()">
                <div class="modal-body">
                    <div class="form-group">
                        <input v-model="form.name" type="text" name="name"
                               placeholder="Name"
                               class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                        <has-error :form="form" field="name"></has-error>
                    </div>
                    <div class="form-group">
                        <input v-model="form.details" type="text" name="details"
                               placeholder="Details"
                               class="form-control" :class="{ 'is-invalid': form.errors.has('details') }">
                        <has-error :form="form" field="details"></has-error>
                    </div>
                </div>
            </form>

            <div slot="btn-confirm">
                <button form="modalForm" v-show="editMode" type="submit" class="btn btn-outline-primary">Update</button>
                <button form="modalForm" v-show="!editMode" type="submit" class="btn btn-outline-success">Create</button>
            </div>
        </Bs-Modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            editMode: false,
            examples: {},
            form: new Form({
                id: '',
                name: '',
                details: ''
            }),
            showForm: false,
        }
    },
    methods: {
        editModalWindow(example) {
            this.form.clear();
            this.editMode = true
            this.form.reset();
            this.showForm = true;
            this.form.fill(example)
        },
        updateExample() {
            this.form.put('api/examples/' + this.form.id)
                .then(() => {
                    this.loadExamples();
                    this.showForm = false;
                }).catch(err => console.log(err))
        },
        openModalWindow() {
            this.editMode = false
            this.form.reset();
            this.showForm = true;
        },
        loadExamples() {
            this.axios.get('/api/examples/')
                .then(response => {
                    this.examples = response.data;
                }).catch(err => console.log(err))
        },
        createExample() {
            this.form.post('api/examples/')
                .then(() => {
                    this.loadExamples();
                    this.showForm = false;
                }).catch(err => console.log(err))
        },
        deleteExample(id) {

        }
    },

    created() {
        this.loadExamples();
    }
}
</script>
