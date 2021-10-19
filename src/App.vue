<style src="./styles/global.scss" lang="scss"></style>

<template>
    <div id="app">  
        <b-row class="mx-0">
            <b-col md="2" lg="3">
                <side-nav-bar/>
            </b-col>
            <b-col class="mx-0 px-0">
                <router-view class='page-content'></router-view> 
            </b-col>
        </b-row>
    </div>
</template>

<script>
import SideNavBar from './components/navigation/SidBarNav.vue';

export default {
	name: 'app',
	components: {
        SideNavBar
    },
    data(){
        return {
        }
    },
    async mounted() {
        // TODO: Do setup stuff here
        // await this.$store.dispatch('setup');
    }
};
</script>

