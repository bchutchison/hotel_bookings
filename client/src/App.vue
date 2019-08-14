<template lang="html">
  <div id="app">
    <bookings-form />
    <!-- <bookings-grid :bookings="bookings" /> -->
  </div>
</template>

<script>
import BookingsForm from './components/BookingsForm';
import BookingService from './services/BookingService.js';

export default {
  name: 'app',
  components: {
    'bookings-form': BookingsForm
  },
  data ()  {
    return {
      bookings: []
    }
  },

  mounted(){
    this.fetchData();

  },

  methods: {
    fetchData(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
