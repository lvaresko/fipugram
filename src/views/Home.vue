<template>
  <div class="container">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-7">
        <div class="row">
          <story />
          <story />
        </div>
        <div class="row">
          <instagram-card v-for="card in filterCards" :key="card.url" :info="card"/>
        </div>
      </div>
      <div class="col-3 mt-5">
        Suggestions For You
        <suggestion-for-you v-for="user in users" :key="user.username" :info2="user"/>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import InstagramCard from '@/components/InstagramCard.vue';
import Story from '@/components/Story.vue';
import SuggestionForYou from '@/components/SuggestionForYou.vue';
import store from '@/store';

let cards = [];

//API/firebase/neki drugi udaljeni server, tj. baza -> sve kartice -> cards

cards = [
  {url: 'https://picsum.photos/id/1/600/600', username: 'lucy_s', description: '#laptop', time: 'FEW MINUTES AGO...'},
  {url: 'https://picsum.photos/id/2/600/600', username: 'boo', description: '#laptop2', time: '1 HOUR AGO...'},
  {url: 'https://picsum.photos/id/3/600/600', username: 'black_o', description: '#laptop3', time: '3 HOURS AGO...'},
];

let users = [];

users = [
  {profile_pic: "https://picsum.photos/id/25/600/600", username: 'unknown'},
  {profile_pic: "https://picsum.photos/id/19/600/600", username: 'xxx'},
  {profile_pic: "https://picsum.photos/id/10/600/600", username: 'guest'},
];

export default {
  name: "Home",
  data: function() {
    return {
      //... ključ: vrijednost
      cards,
      store,
      users
    };
  },
  computed: {
      filterCards() {
        //logika koja filtrira cards
        let termin = this.store.searchTerm;
       
        return this.cards.filter(card => card.description.includes(termin) || card.username.includes(termin) );
      },
  },
  components: {
    InstagramCard, // isto kao InstagramCard: InstagramCard
    Story,
    SuggestionForYou
  },
};
</script>
