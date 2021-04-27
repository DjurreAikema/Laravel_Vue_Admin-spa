<!--<template>-->
<!--    <transition name="modal">-->
<!--        <div v-if="isVisible">-->
<!--            <div class="card">-->
<!--                <div class="card-body">-->
<!--                    <h5 class="card-title">Special title treatment</h5>-->
<!--                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>-->
<!--                    <a href="#" class="btn btn-primary" @click="emitCancel">Cancel</a>-->
<!--                    <a href="#" class="btn btn-primary" @click="emitConfirm">Confirm</a>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </transition>-->
<!--</template>-->

<!--<template>-->
<!--    <transition name="modal">-->
<!--        <div v-if="isVisible">-->
<!--            <div class="modal-mask">-->
<!--                <div class="modal-wrapper">-->
<!--                    <div class="modal-container">-->
<!--                        <div class="modal-header">-->
<!--                            <slot name="header">default header</slot>-->
<!--                        </div>-->

<!--                        <div class="modal-body">-->
<!--                            <slot name="body">default body</slot>-->
<!--                        </div>-->

<!--                        <div class="modal-footer">-->
<!--                            <slot name="footer">-->
<!--                                <button class="btn btn-outline-secondary" @click="emitCancel">Close</button>-->
<!--                                <button class="btn btn-outline-danger" @click="emitConfirm">Confirm</button>-->
<!--                            </slot>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </transition>-->
<!--</template>-->

<template>
    <transition name="modal">
        <div v-if="isVisible">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <slot name="header">default header</slot>
                                <button type="button" class="btn btn-outline-secondary" @click="emitCancel">
                                    <span aria-hidden="true">x</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <slot name="body">default body</slot>
                            </div>
                            <div class="modal-footer">
                                <slot name="footer">
                                    <button class="btn btn-outline-secondary" @click="emitCancel">Close</button>
                                    <div @click="emitConfirm">
                                        <slot name="btn-confirm">
                                            <button class="btn btn-outline-primary">Confirm</button>
                                        </slot>
                                    </div>
                                </slot>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </transition>
</template>


<script>
    export default {
        props: {
            isVisible: Boolean,
        },
        methods: {
            emitCancel() {
                this.$emit('cancel');
            },
            emitConfirm() {
                this.$emit('confirm');
            }
        }
    }
</script>

<style>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        display: table;
        transition: opacity 0.3s ease;
    }
    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }
</style>
