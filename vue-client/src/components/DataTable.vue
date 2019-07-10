<template>
<div>
  <v-toolbar flat color="white">
      <v-toolbar-title><h4>Outstanding Candidate Challenges / EDC / CC Appeals</h4></v-toolbar-title>
      <v-spacer></v-spacer>
   </v-toolbar>
  <v-data-table
    class="table"
    :headers="headers"
    :items="users"
    :rows-per-page-items="[10, 25]">
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">
        <v-avatar size="42">
          <img :src="randomAvatar()" alt="avatar">
        </v-avatar>
      </td>
      <td class="text-xs-left">{{ props.item.name }}</td>
      <td class="text-xs-left">{{ props.item.username }}</td>
      <td class="text-xs-left">{{ props.item.email }}</td>
      <td class="text-xs-left">{{ props.item.phone }}</td>
      <td class="text-xs-left">{{ props.item.company.name }}</td>
    </template>
  </v-data-table>

  <v-toolbar flat color="white">
      <v-toolbar-title><h4>Outstanding Grade Reports</h4></v-toolbar-title>
      <v-spacer></v-spacer>
   </v-toolbar>
   <v-data-table
    class="table"
    :headers="grade_report"
    :items="users"
    :rows-per-page-items="[10, 25]">
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">{{ props.item.email }}</td>
      <td class="text-xs-left">{{ props.item.phone }}</td>
      <td class="text-xs-left">{{ props.item.company.name }}</td>
    </template>
  </v-data-table>
</div>
</template>

<script>

const avatars = [
  'https://avataaars.io/?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban',
  'https://avataaars.io/?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun',
  'https://avataaars.io/?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong',
  'https://avataaars.io/?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair',
  'https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly',
  'https://avataaars.io/?'
];

export default {
  data() {
    return {
      users: [],
      headers: [
        {
          value: 'Avatar',
          align: 'left',
          sortable: false
        },
        {
          text: 'Candidate Name',
          value: 'Name',
          align: 'left',
          sortable: true
        },
        {
          text: 'Exam ID/State',
          value: 'Username',
          align: 'left',
          sortable: true
        },
        {
          text: 'Program Manager',
          value: 'Email',
          align: 'left',
          sortable: true
        },
        {
          text: 'Appeal Type',
          value: 'Phone',
          align: 'left',
          sortable: true
        },
        {
          text: 'Due Date',
          value: 'Company',
          align: 'left',
          sortable: true
        },
      ],
      grade_report: [
        {
          text: 'Exam ID/State',
          value: 'Username',
          align: 'left',
          sortable: true
        },
        {
          text: 'Program Manager',
          value: 'Email',
          align: 'left',
          sortable: true
        },
        {
          text: 'Appeal Type',
          value: 'Phone',
          align: 'left',
          sortable: true
        },
        
      ]
    }
  },

  methods: {
    randomAvatar () {

      return avatars[Math.floor(Math.random() * avatars.length)];
    }
  },

  created() {
    const vm = this;

    vm.axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      var result = response && response.data;

      vm.users = result;
    });
  }
}
</script>

<style>
  .table {
    border-radius: 1px;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.21);
    background-color: transparent;
  }
  .column {
    background-color: #2E7D32 !important; 
  }
</style>
