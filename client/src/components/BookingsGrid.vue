<template lang="html">
  <div id="bookingsGrid">
     <div class="bookings" v-for="(booking, index) in bookings">
       <h2>Name: {{ booking.name }}</h2>
       <p>Email: {{ booking.email }}</p>
       <p v-if="booking.checkedIn">Checked In</p>
       <p v-else>Not Checked In</p>
       <button class="delete-btn" @click="handleDelete(booking._id, index)"> Delete</button>
     </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
import BookingService from '../services/BookingService'

export default {
  name: "bookings-grid",
  data ()  {
    return {
      bookings: []
    }
  },
  mounted(){
    this.fetchData();
    eventBus.$on('booking-added', booking => this.bookings.push(booking));
  },
  methods: {
    fetchData(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    },

    handleDelete(id, index){
      BookingService.deleteBooking(id);
      this.bookings.splice(index, 1);
    }
  }
}
</script>

<style lang="css" scoped>

/* #bookingsGrid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50px;
} */

</style>
