<template>
  <div>
    <div v-for="item in allShifts" :key="item.title" class="dates">
      <h1>{{ item.title }}</h1>
      <h2>{{ item.description }}</h2>

      <h3>Dates</h3>
      <div class="dates-list">
        <div v-for="(dateDetail, date) in item.dates" :key="date" class="date-item">
          <p>Start Time: {{ dateDetail.startTime }}</p>
          <p>Price: {{ dateDetail.price }}</p>
          <p>Type: {{ dateDetail.selectedType }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    priceRange: {
      type: Array,
    }
  },
  computed: {
    ...mapGetters({
      allShifts: 'shifts/allShifts'
    }),
  }
};
</script>
