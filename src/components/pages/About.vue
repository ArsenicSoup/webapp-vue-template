<template>
    <us-container fluid>
        <h2 class="capitalize">{{path}}</h2>

        <us-alert variant="info" title="Info">
            The <b>{{path}}</b> page is coming soon.
        </us-alert>

    </us-container>
</template>

<script>
export default {
	name: 'about',
    data(){
        return {
            error: null
        }
    },
    computed: {
        path() {
            return this.$route.name
        }
    },      
};
</script>

<style lang="scss">

</style>
