<template>
  <v-app>
    <v-toolbar class="green darken-1" dark>
      <v-toolbar-side-icon @click.native.stop="sideNav=!sideNav" class="hidden-lg-and-up">
      </v-toolbar-side-icon>
      <v-toolbar-title><router-link to="/" tag="span" style="cursor: pointer;">Hamburg</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-item class="hidden-md-and-down">
        <v-btn flat v-for="item in menuItems" v-bind:key="item.title" router :to="item.link" style="cursor: pointer;">
          <v-icon left dark>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-item>
    </v-toolbar>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" v-bind:key="item.title" router :to="item.link" style="cursor: pointer">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav:false,
      menuItems: [
        { icon: 'fastfood', title: 'Hamburger', link: '/hamburger'},
        { icon: 'local_bar', title: 'Drink', link: '/drink'},
        { icon: 'local_pizza', title: 'Pizza', link: '/pizza'},
        { icon: 'phone', title: 'Contact us', link: '/'},
        { icon: 'account_circle', title: 'Profile', link: '/signin'},
      ]
    }
  }
}
</script>
