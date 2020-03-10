<template>
    <v-navigation-drawer app :temporary="temporary" v-model="opened">

        <template>
            <v-list>
                <v-subheader>{{navbarTitle}}</v-subheader>
                <v-divider></v-divider>
                <v-list-item-group color="primary">
                    <v-list-item @click.stop="opened = false" v-for="(item, i) in menuItems" :key="i" :to="item.path" exact>

                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>

                    </v-list-item>
                </v-list-item-group>

                <v-divider></v-divider>

                <v-list-item-group color="purple">
                    <v-list-item @click.stop="opened = false" :href="websiteUrl">

                        <v-list-item-icon>
                            <v-icon v-text="logout.icon"></v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title v-text="logout.text"></v-list-item-title>
                        </v-list-item-content>

                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </template>

    </v-navigation-drawer>
</template>

<script>
    import Loggy from '../core/Loggy';
    import EventBus from '../core/EventBus';


    /**
     * FILENAME
     */
    const _filename = 'NavigationBar';

    /**
     * EXPORT DEFAULT
     */
    export default {
        name: _filename,

        /**
         * CREATED
         */
        created() {
            const _self = this;

            EventBus.$on('toggleNavBar', function (data) {
                console.log('EventBus(on)... ', _self.opened);

                _self.opened
                    ? _self.opened = false
                    : _self.opened = true;

                // if (_self.opened === true) {
                //
                //     _self.opened = false;
                //
                // } else if (_self.opened === false) {
                //
                //     _self.opened = true;
                // }

                // if (_self.opened === data) {
                //     _self.opened = !data;
                // }
            });
        },

        /**
         * METHODS
         */
        methods: {

            startup() {
                Loggy.color(_filename + ' mounted...', 'orange');
                Loggy.color(this.$vuetify.application.top, 'blue');

            },

        },


        /**
         * DATA
         */
        data() {
            return {
                filename: _filename,
                temporary: true,
                opened: false,
                logout: {
                    text: 'Logout',
                    icon: 'mdi-logout',
                    // path: this.$router.go('/home'),
                },
                websiteUrl : '/home'
            };
        },


        /**
         * PROPS
         */
        props: {
            menuItems: {
                type: Array,
                required: true,
            },

            navbarTitle: {
                type: String,
                required: true,
            },
        },

        /**
         * MOUNTED
         */
        mounted() {

            this.startup();
            // const _self = this;
            // _self.startup();
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
