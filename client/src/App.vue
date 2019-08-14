<template lang="html">
  <div id="app">
    <bookings-form />
    <bookings-grid />
  </div>
</template>

<script>
import BookingsForm from './components/BookingsForm';
import BookingsGrid from './components/BookingsGrid';

export default {
  name: 'app',
  components: {
    'bookings-form': BookingsForm,
    'bookings-grid': BookingsGrid
  }
}
</script>

<style lang="css" scoped>
</style>
