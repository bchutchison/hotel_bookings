<template lang="html">
  <form class="form" @submit="handleSubmit" id="bookings-form">
    <div class="wrapper">
      <label for="name">Name</label>
      <input v-model="name" id="name" type="text" required>
    </div>
    <div class="wrapper">
      <label for="email">Email</label>
      <input v-model="email" id="email" type="text" required>
    </div>
    <div class="wrapper">
      <label for="checked-in">Checked In</label>
      <input v-model="checkedIn" type="checkbox" name="checked-in">
    </div>
    <input type="submit" value="Add Booking">
  </form>
</template>

<script>
import BookingService from '../services/BookingService.js';
import { eventBus } from '@/main.js';

export default {
  name: 'bookings-form',
  data() {
    return {
      name: '',
      email: '',
      checkedIn: false
    }
  },
  methods: {
    handleSubmit(evt) {
      evt.preventDefault();
      const payload = {
        name: this.name,
        email: this.email,
        checkedIn: this.checkedIn
      };
      BookingService.postBooking(payload)
      .then(booking => {
        eventBus.$emit('booking-added', booking);
      });
    }
  }
}
</script>

<style lang="css" scoped>

.form {
  postion: sticky;
}
</style>
