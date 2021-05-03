<template>
    <div>
        <nav-component></nav-component>
        <side-component></side-component>

        <main class="mt-5 pt-3">
            <div class="container-fluid">
                <router-view> </router-view>
            </div>
        </main>
    </div>
</template>

<script>
    export default {}
</script>
