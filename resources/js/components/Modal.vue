<template>
    <div class="modal fade" :id="modalId" tabindex="-1" :aria-labelledby="modalCssTitle" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" :id="modalId">
                        <slot name="title">{{ title }}</slot>
                    </h5>
                    <button type="button" class="btn btn-close" data-bs-dismiss="modal" aria-label="Close" @click="hideModal()"></button>
                </div>
                <div class="modal-body">
                    <slot name="body">default body</slot>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" @click="hideModal()">Close</button>
                    <slot name="btn-confirm">
                        <button class="btn btn-outline-primary">Confirm</button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BootstrapModal",

    computed: {
        modalId() {return this.id},
        modalCssTitle() {return this.modalId + "-title";},
    },

    methods: {
        toggleModal() {
            if (this.show)
                $("#" + this.modalId).modal("show")
            else
                $("#" + this.modalId).modal("hide")
        },
        hideModal() {
            $("#" + this.modalId).modal("hide")
        }
    },

    model: {
        prop: 'show',
        event: 'close'
    },

    mounted() {
        $("#" + this.modalId).on("hidden.bs.modal", () => this.$emit("close", false))
        this.toggleModal()
    },

    props: {
        title: {
            type: String,
            required: true
        },
        id: {
            type: String,
        },
        show: {
            type: Boolean,
            required: true
        }
    },

    watch: {
        show: {
            handler: 'toggleModal',
            immediate: true
        }
    },
};
</script>
