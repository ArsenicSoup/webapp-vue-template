<template>
    <b-container fluid>
        <h2 class="capitalize">{{path}}</h2>

        <b-alert variant="info" show>
            <i class='fas fa-info-circle'></i> The <b>{{path}}</b> page is coming soon.
        </b-alert>

    </b-container>
</template>

<script>
export default {
	name: 'home',
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
