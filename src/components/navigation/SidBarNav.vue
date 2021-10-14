<template>

    <div id="SideBarNav">

        <section>
            <!--<h4>A Sidebar Section</h4>-->
            <us-side-nav>
                <us-side-nav-item :to="{name:'home'}"><i class="fas fa-fw fa-home"></i> Home</us-side-nav-item>
                <us-side-nav-item :to="{name:'about'}"><i class="fas fa-fw fa-info-circle"></i> About</us-side-nav-item>
            </us-side-nav>   
        </section>   
    </div>
    
</template>

<script>


/**
 * @see https://getbootstrap.com/docs/4.4/examples/dashboard
 */
export default {
    name: "side-nav-bar",

    data() {
        return {
            version: process.env.VUE_APP_VERSION
        };
    },

    computed: {
        user() {
            return this.$store.state.user;
        }
    },

    methods: {
      
    }
};
</script>

<style lang="scss">

#SideBarNav {

    //padding-left: 10px;
    //padding-right: 10px;

    .fa-fw {
        margin-right: 8px;
    }

}
</style>
