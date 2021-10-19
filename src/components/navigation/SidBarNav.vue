<template>

    <div id="SideBarNav">

        <section>
            <!--<h4>A Sidebar Section</h4>-->

            <b-nav vertical>
                <b-nav-item :to="{name:'home'}"><i class="fas fa-fw fa-home"></i> Home</b-nav-item>
                <b-nav-item :to="{name:'about'}"><i class="fas fa-fw fa-info-circle"></i> About</b-nav-item>
            </b-nav>

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
