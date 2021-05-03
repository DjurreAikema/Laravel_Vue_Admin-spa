<template>
    <div>
        <div class="row">
            <div class="col-md-12 px-4 my-2">
                <h1>
                    Examples
                    <button class="btn btn-outline-primary btn mx-2" @click="openFormModal()">
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
                                <tr v-for="example in items" :key="example.id">
                                    <td>{{ example.id }}</td>
                                    <td>{{ example.name }}</td>
                                    <td>{{ example.details }}</td>
                                    <td style="text-align: right">
                                        <button data-id="example.id" class="btn btn-outline-success btn-sm"
                                                @click="openFormModal(example)">Edit
                                        </button>
                                        <button class="btn btn-outline-danger btn-sm"
                                                @click="showDelete = true; itemToDelete = example.id">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Edit/add form Modal -->
        <Modal id="formModal" title="edit/add form modal" v-model="showForm">
            <div slot="title">
                <h5 class="modal-title" id="addNewLabel">{{ editMode ? 'Update Example' : 'Add New Example' }}</h5>
            </div>
            <form slot="body" id="modalForm" @submit.prevent="editMode ? updateItem() : createItem()">
                <div class="modal-body">
                    <!-- TODO Turn form items into components? -->
                    <div class="form-group">
                        <label>Name:</label>
                        <input v-model="form.name" type="text" name="name"
                               placeholder="Name"
                               class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                        <has-error :form="form" field="name"></has-error>
                    </div>
                    <div class="form-group pt-2">
                        <label>Details:</label>
                        <input v-model="form.details" type="text" name="details"
                               placeholder="Details"
                               class="form-control" :class="{ 'is-invalid': form.errors.has('details') }">
                        <has-error :form="form" field="details"></has-error>
                    </div>
                </div>
            </form>
            <div slot="btn-confirm">
                <button form="modalForm" type="submit" class="btn"
                        v-bind:class="[this.editMode ? 'btn-outline-primary':'btn-outline-success']">
                    {{ editMode ? 'Update' : 'Create' }}
                </button>
            </div>
        </Modal>

        <!-- Delete Modal -->
        <Modal id="deleteModal" title="Delete modal" v-model="showDelete">
            <h3 slot="header">Delete example</h3>
            <div slot="body">Are you sure you want to delete this Example?</div>
            <button slot="btn-confirm" class="btn btn-outline-danger" @click="deleteItem">Delete example</button>
        </Modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: {},
            editMode: false,
            showForm: false,
            showDelete: false,
            itemToDelete: '',
            url: '/api/examples/',
            form: new Form({
                id: '',
                name: '',
                details: ''
            }),
        }
    },
    created() {
        this.getItems();
    },
    methods: {
        // Open the create/edit form modal, pass item for edit
        openFormModal(item = null) {
            this.form.reset();
            if (item != null) {
                this.form.fill(item)
            }
            this.showForm = true;
        },
        // Get all items from the api
        getItems() {
            this.axios.get(this.url)
                .then(response => {
                    this.items = response.data;
                }).catch(err => {
                console.log(err)
            });
        },
        // Create a new item
        createItem() {
            this.form.post(this.url)
                .then(() => {
                    this.getItems();
                    this.showForm = false;
                }).catch(err => console.log(err))
        },
        // Update an existing item
        updateItem() {
            this.form.put(this.url + this.form.id)
                .then(() => {
                    this.getItems();
                    this.showForm = false;
                }).catch(err => console.log(err))
        },
        // Delete an existing item
        deleteItem() {
            this.axios
                .delete(this.url + this.itemToDelete)
                .then(response => {
                    let i = this.items.map(data => data.id).indexOf(this.itemToDelete);
                    this.items.splice(i, 1)
                });
            this.itemToDelete = '';
            this.showDelete = false;
            this.getItems();
        },
    }
}
</script>
