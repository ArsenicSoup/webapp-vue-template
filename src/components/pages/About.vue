<template>
    <b-container fluid>
        <h2 class="capitalize">{{path}}</h2>

        <b-alert variant="info" title="Info">
            The <b>{{path}}</b> page is coming soon.
        </b-alert>

    </b-container>
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
