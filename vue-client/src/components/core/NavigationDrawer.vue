<template>
  <v-navigation-drawer
    v-model="toggle"
    fixed app>
    <v-toolbar flat dark :color="$root.themeColor" class="toolbar">
      <router-link :to="{ name: 'Dashboard' }">
        <img src="@/assets/trex.png" width="100px">
      </router-link>
    </v-toolbar>
    <v-list >
      <v-list-tile v-for="(menu, index) in menus" v-bind:key="menu.title">
        <v-list-tile-action >
          <v-icon>{{menu.icon}}</v-icon>
        </v-list-tile-action >
        <v-list-tile-title  @click="changeRoute(menu.title, index)">{{menu.title}}</v-list-tile-title>
      </v-list-tile>
    </v-list>
    <v-list>
     <v-list-group :prepend-icon="item.icon" v-for="(item, index) in items" v-bind:key="item.title">
       <v-list-tile slot="activator" @click="changeRoute(item.title, index)">
          <v-list-tile-title class="item-title" >{{item.title}}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile :prepend-icon="subItem.icon" sub-group no-action v-for="(subItem, subIndex) in item.items" :key="subItem.title" active-class="red--text">
          <v-list-tile-action>
            <v-icon>{{subItem.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === subIndex}, 'item-title' ]" @click="changeRoute(subItem.title, subIndex)">{{subItem.title}}</v-list-tile-title>
        </v-list-tile>
         </v-list-group>
    <v-list-group
        prepend-icon="pageview">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">Widgets</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Social', 4)">
          <v-list-tile-action>
            <v-icon>group</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 4}, 'item-title' ]">Social</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Chart', 5)">
          <v-list-tile-action>
            <v-icon>bar_chart</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 5}, 'item-title' ]">Charts</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Media', 6)">
          <v-list-tile-action>
            <v-icon>perm_media</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 6}, 'item-title' ]">Media</v-list-tile-title>
        </v-list-tile>
    </v-list-group>

      <v-list-group
        prepend-icon="select_all">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">Overlays</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Snackbar', 7)">
          <v-list-tile-action>
            <v-icon>event_note</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 7}, 'item-title' ]">Snackbar</v-list-tile-title>
        </v-list-tile>
    </v-list-group>

      <v-list-group
        prepend-icon="fingerprint">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">Authorization</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Error', params: { errorCode: '403' } })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">403</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Error', params: { errorCode: '404' } })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">404</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Error', params: { errorCode: '500' } })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">500</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Login' })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">Login</v-list-tile-title>
        </v-list-tile>
    </v-list-group>

      <v-list-group
      prepend-icon="account_circle">
      <v-list-tile slot="activator">
        <v-list-tile-title class="item-title">Users</v-list-tile-title>
      </v-list-tile>
          <v-list-tile
            v-for="(admin, i) in admins"
            :key="i"
            @click="">
            <v-list-tile-action>
              <v-icon v-text="admin[1]"></v-icon>
            </v-list-tile-action>
            <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
          </v-list-tile>
    </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    toggle: {
        type: Boolean,
        required: false,
        default: true
    }
  },

  data() {
    return {
      selectedIndex: 1,
      admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings']
      ],
      menus : [
        { title:'Dashboard', icon:'dashboard' },
        { title:'Eligibilities', icon:'' },
        { title:'Score Roster', icon:'score'}
      ],
      items: [
				{
					title: 'Certifications',
					icon: 'dashboard',
					active: false,
					link: '',
					items: [{
							title: 'Search Certification',
							icon: 'search',
							link: '/search-certificates',

						},
						{
							title: 'List Certification Applications',
							icon: 'dashboard',
							link: '/list-certificates'
						},
						{
							title: 'List Renewal Applications',
							icon: 'dashboard',
							link: 'link-renewal'
						},
						{
							title: 'List Pending Manual Review',
							icon: 'dashboard',
							link: 'list-pending-manual-reivew'
						},
						{
							title: 'List Rules',
							icon: 'dashboard',
							link: 'list-rules'
						},
						{
							title: 'Master Data',
							icon: 'storage',
							link: 'masterdata'
						}
					]
				},
				{
					title: 'Exams',
					icon: 'list_alt',
					link: '',
					items: [{
							title: 'Add Exam',
							icon: 'add_circle',
							link: 'add-exam'

						},
						{
							title: 'List Exams',
							icon: 'list',
							link: 'list-exam'
						},
						{
							title: 'Master Data',
							icon: 'storage',
							link: 'masterdata'

						}

					]
				},
				{
					title: 'Code Editions',
					icon: 'menu',
					link: '',
					items: [{
							title: 'Add Code Edition',
							icon: 'add_circle',
							link: 'add-code-edition'
						},
						{
							title: 'List Code Editions',
							icon: 'list',
							link: 'list-code-edition'
						}
					]
				},
				{
					title: 'Jurisdictions',
					items: [{
							title: 'Add Jurisdiction',
							icon: 'add_circle',
							link: 'add-jurisdiction'
						},
						{
							title: 'List Jurisdictions',
							icon: 'list',
							link: 'list-jurisdiction'
						}

					]
				},
				{
					title: 'Jurisdiction Contacts',
					icon: 'contacts',
					link: '',
					items: [{
							title: 'Add Jurisdiction Contact',
							icon: 'add_circle',
							link: 'add-jurisdiction-contact'
						},
						{
							title: 'List Jurisdiction Contacts',
							icon: 'list',
							link: 'list-jurisction-contact'
						}

					]
				},
				{
					title: 'Exam Sites',
					icon: 'public',
					link: '',
					items: [{
							title: 'Add Exam Site',
							icon: 'add_circle',
							link: 'add-examsite'
						},
						{
							title: 'List Exam Sites',
							icon: 'list',
							link: 'list-examsite'
						}
					]
				},
				{
					title: 'Site Contacts',
					icon: 'public',
					link: '',
					items: [{
							title: 'Add Site Contact',
							icon: 'add_circle'
						},
						{
							title: 'List Site Contacts',
							icon: 'list'
						}
					]
				},
				{
					title: 'Site Proctors',
					icon: 'public',
					link: '',
					items: [{
							title: 'Add Site Proctor',
							icon: 'add_circle'
						},
						{
							title: 'List Site Proctors',
							icon: 'list'
						}
					]
				},
				{
					title: 'Letters',
					icon: 'mail',
					link: '',
					items: [{
							title: 'Add Letter',
							icon: 'add_circle'
						},
						{
							title: 'List Letters',
							icon: 'list',
							link: '/list-letters'
						},
						{
							title: 'Individual Confirmation Letter'
						},
						{
							title: 'Site Confirmation Letter'
						},
						{
							title: 'Proctor Confirmation Letter'
						},
						{
							title: 'Exam Confirmation Letter'
						}
					]
				},
				{
					title: 'Candidates',
					icon: 'person',
					link: '',
					items: [{
							title: 'Add Candidate',
							icon: 'add_circle'
						},
						{
							title: 'List Candidates',
							icon: 'list'
						},
						{
							title: 'List All Transcripts',
							icon: 'list'
						},
						{
							title: 'Master Data',
							icon: 'storage',
						}
					]
				},
				{
					title: 'Score Roster',
					icon: 'score',
					link: '',
				},
				{
					title: 'Score Summary',
					link: '',
				},
				{
					title: 'Review Anomalies',
					icon: 'person',
					link: '',
					items: [{
							title: 'List Candidate Anomalies',
							icon: 'list',
							link: '',
						},
						{
							title: 'List Transcript Anomalies',
							icon: 'list',
							link: '',
						}
					]
				},
				{
					title: 'Reports',
					icon: 'report',
					link: '',
					items: [{
							title: 'Reporting Tool',
							link: '',
						},
						{
							title: 'List of participants Report',
							icon: 'list',
							link: '',
						},
						{
							title: 'Participants Count Report',
							link: '',
						},
						{
							title: 'Sign-In Sheet Report',
							link: '',
						},
						{
							title: 'Answer Sheet Report',
							link: '',
						},
						{
							title: 'Site Report',
							link: '',
						},
						{
							title: 'Number Of Exams Given Report',
							link: '',
						}
					]
				},
				{
					title: 'Import Export',
					link: '',
					icon: 'face'
				}
			]
    }
  },

  methods: {
    changeRoute(routeName, selectedIndex) {
      const vm = this;

      vm.selectedIndex = selectedIndex;

      return vm.$router.push({ name: routeName });
    }
  }
}
</script>

<style>
  .toolbar {
    font-weight: bold;
    font-size: 18px;
  }

  .toolbar .text {
    padding-left: 15px;
    color: white;
    text-decoration:none;
  }

  .item-title {
    font-size: 14px;
    font-weight: 500;
  }
  .item-sub-title {
    font-size: 15px;
    font-weight: 500;
		cursor: pointer;
  }

  .active {
    font-weight: bold;
		background: lightgreen;
  }
	.v-list__tile__title {
		cursor: pointer;
	}
</style>
