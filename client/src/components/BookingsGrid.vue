<template lang="html">
  <div id="bookingsGrid">
     <div class="bookings" v-for="(booking, index) in bookings">
       <h2>Name: {{ booking.name }}</h2>
       <p>Email: {{ booking.email }}</p>


       <div v-if="booking.checkedIn">
         <p class="checked-in">Checked In</p>
         <button class="update-btn" @click="handleCheck(booking, false)">Check Out</button>
       </div>

       <div v-else>
         <p class="checked-out">Not Checked In</p>
         <button class="update-btn" @click="handleCheck(booking, true)">Check In</button>
       </div>

       <button class="delete-btn" @click="handleDelete(booking._id, index)">Delete</button>
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
  mounted() {
    this.fetchData();
    eventBus.$on('booking-added', booking => this.bookings.push(booking));
  },
  methods: {
    fetchData() {
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    },
    handleDelete(id, index) {
      BookingService.deleteBooking(id);
      this.bookings.splice(index, 1);
    },
    handleCheck(booking, status) {
      booking.checkedIn = status;

      BookingService.updateBooking(booking);
    }
  }
}
</script>

<style lang="css" scoped>

#bookingsGrid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50px;
  font-family: helvetica;
}

.bookings {
  border: 1px grey solid;
  box-shadow: 5px 5px grey;
  width: 300px;
  padding: 20px;
  margin-bottom: 40px;
  background-color: lightblue;
  border-radius: 8px 8px;
}

button {
  padding: 5px;
  text-align: centre;
  margin: 5px;
  border-radius: 2px 2px;
  display: inline-block;
  float: left;
}

.delete-btn {
  background-color: none;
  border: 2px red solid;
  width: 90px;
  height: 30px;
}

.update-btn {
  background-color: none;
  border: 2px green solid;
  width: 90px;
  height: 30px;
}


.checked-in {
  background-color: green;
  padding-top: 10px;
  padding-bottom: 10px;
}

.checked-out {
  background-color: orange;
  padding-top: 10px;
  padding-bottom: 10px;
}

</style>
