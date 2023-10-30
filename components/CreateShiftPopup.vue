<template>
  <aside v-if="isSidebarOpen" class="sidebar">
    <b-field label="Title">
      <b-input v-model="shift.title" maxlength="100" placeholder="Enter the title..."></b-input>
    </b-field>
    <b-field label="Message">
      <b-input v-model="shift.description" maxlength="500" type="textarea"></b-input>
    </b-field>
    <b-field label="Select a date">
      <b-datepicker
        placeholder="Click to select..."
        v-model="dates"
        range>
      </b-datepicker>
    </b-field>
    <time-shift v-for="date in daysList"
                :key="date"
                @input="setShiftDayListData($event,date)"
                @delete="removeDateFromDayList(date)"
                :date="date"/>

    <div class="is-flex mt-6">
      <b-button type="is-primary">Delete</b-button>
      <b-button @click="handleShiftAdd" type="is-primary is-light ml-4">Save</b-button>
    </div>
  </aside>
</template>

<script>
import TimeShift from "~/components/TimeShift";
import { mapActions } from 'vuex';

export default {
  props: {
    value: Boolean,
  },
  data() {
    return {
      shift: {},
      dates: [],
      shiftDayListData: {},
    };
  },
  components: {
    TimeShift
  },
  computed: {
    isSidebarOpen: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      }
    },
    daysList() {
      let start = new Date(this.dates[0]);
      const end = new Date(this.dates[1]);
      let daysArray = [];

      while (start <= end) {
        daysArray.push(new Date(start).toISOString().split('T')[0]);
        start.setDate(start.getDate() + 1);
      }

      return daysArray;
    }
  },
  methods: {
    ...mapActions('shifts', ['addShift']),
    removeDateFromDayList(dateToRemove) {
      const index = this.daysList.indexOf(dateToRemove);
      if (index > -1) {
        this.daysList.splice(index, 1);
      }

      if (this.daysList.length > 0) {
        this.dates = [
          new Date(this.daysList[0]),
          new Date(this.daysList[this.daysList.length - 1])
        ];
      } else {
        this.dates = [];
      }
    },
    setShiftDayListData({ key: dataKey, value }, key) {
      if (!this.shiftDayListData[key]) this.shiftDayListData[key] = {};
      this.shiftDayListData[key][dataKey] = value;
    },
    handleShiftAdd() {
      this.addShift({
        ...this.shift,
        dates: this.shiftDayListData
      });
      this.isSidebarOpen = false;
    }

  }
};
</script>
