<style src="./styles/global.scss" lang="scss"></style>

<template>
    <div id="app">  
        <us-row class="mx-0">
            <us-col md="2" lg="3">
                <side-nav-bar class="mt-4 ml-4"/>
            </us-col>
            <us-col class="mx-0 px-0">
                <router-view class='page-content'></router-view> 
            </us-col>
        </us-row>
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
<style lang="scss">
    #app {
        background-color: rgba(198, 229, 240, 0.1);
    }
</style>


