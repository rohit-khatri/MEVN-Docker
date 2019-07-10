<template>
   <v-container grid-list-md text-xs-center>


<v-layout align-center>
   <v-flex>
      <v-window
         v-model="window"
         class="elevation-1"
         vertical
         style="border:1px solid gray"
         >
         <v-window-item>
            <v-toolbar color="green darken-2 white--text" height="50px">
               <h4>Search Eligibility</h4>
            </v-toolbar>
            <v-container>
               <v-layout row wrap>
                  <v-flex xs12 sm4>
                     <v-text-field
                        label="Candidate ID"
                        solo
                        ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm4>
                     <v-text-field
                        label="First/Middle Name"
                        solo
                        ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm4>
                     <v-text-field
                        label="Last Name"
                        solo
                        ></v-text-field>
                  </v-flex>
               </v-layout>
               <v-layout row wrap>
                  <v-flex xs12 sm6 md4 ma-0>
                     <v-select
                        :items="items"
                        label="Exam"
                        solo
                        ></v-select>
                  </v-flex>
                  <v-flex xs12 sm4>
                     <v-text-field
                        label="Solo"
                        solo
                        ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm4>
                     <v-text-field
                        label="Solo"
                        solo
                        ></v-text-field>
                  </v-flex>
               </v-layout>
               <v-layout row wrap mt-0>
                  <v-flex xs12 sm6>
                     <v-select
                        :items="status"
                        label="Select Jurisdictions"
                        solo
                        ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6>
                     <v-select
                        :items="items"
                        label="Select Jurisdictions"
                        solo
                        ></v-select>
                  </v-flex>
               </v-layout>
            </v-container>
         </v-window-item>
      </v-window>
   </v-flex>
</v-layout>
</v-container>
</template>
<script>
  export default {
    data: () => ({
      length: 3,
      window: 0,
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      status: ['Used', 'Vaild', 'Expired','All']
    })
  }
</script>