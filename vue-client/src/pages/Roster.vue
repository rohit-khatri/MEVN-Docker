<template>
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
               <v-layout row wrap mb-0>
                  <v-flex sm3>
                     <v-text-field
                        label="Candidate ID"
                        outline
                        ></v-text-field>
                  </v-flex>
                  <v-flex sm3>
                     <v-text-field
                        label="First/Middle Name"
                        outline
                        ></v-text-field>
                  </v-flex>
                  <v-flex sm3>
                     <v-text-field
                        label="Last Name"
                        outline
                        ></v-text-field>
                  </v-flex>
                  <v-flex sm3>
                     <v-select
                        :items="items"
                        label="Exam"
                        outline
                        ></v-select>
                  </v-flex>
               </v-layout>
               <v-layout row wrap mt-0>
                  <v-flex sm3 >
                     <v-select
                        :items="status"
                        label="Letter Grade"
                        outline
                        ></v-select>
                  </v-flex>
                  <v-flex sm3>
                     <v-select
                        :items="items"
                        label="Select Jurisdictions"
                        outline
                        ></v-select>
                  </v-flex>
                  <v-flex sm3>
                     <v-text-field
                        label="outline"
                        outline
                        ></v-text-field>
                  </v-flex>
                  <v-flex sm3>
                     <v-text-field
                        label="outline"
                        outline
                        ></v-text-field>
                  </v-flex>
               </v-layout>
               <v-layout row>
                   <v-flex>
                  <v-btn outline color="green">Clear</v-btn>
                  <v-btn outline color="green">Search</v-btn>
                   </v-flex>
               </v-layout>
            </v-container>
         </v-window-item>
      </v-window>
   </v-flex>
</v-layout>
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