<template>
  <div>
    <div class="header is-flex is-justify-content-space-between">
      <span>{{ date }}</span>
      <div @click="removeDate"
       >
        close
      </div>
    </div>
    <div class="form">
      <div class="is-flex">
        <b-field  label="Start time">
          <b-timepicker v-model="startTime" @input="validateTimes('start')"/>
        </b-field>

        <b-field label="End time">
          <b-timepicker v-model="endTime" @input="validateTimes('end')"/>
        </b-field>

        <b-field label="Price">
          <b-input v-model="price" type="number" placeholder="Price" icon="euro-sign"/>
        </b-field>
      </div>

      <b-field label="Type">
        <b-select v-model="selectedType">
          <option value="Consultation">Consultation</option>
        </b-select>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: String,
    value: {
      type: Object,
      default: () => {
      }
    }
  },
  computed: {
    startTime: {
      get() {
        return this.value?.startTime;
      },
      set(value) {
        this.$emit('input', { value, key: 'startTime' });
      }
    },
    endTime: {
      get() {
        return this.value?.endTime;
      },
      set(value) {
        this.$emit('input', { value, key: 'endTime' });
      }
    },
    price: {
      get() {
        return this.value?.price;
      },
      set(value) {
        this.$emit('input', { value, key: 'price' });
      }
    },
    selectedType: {
      get() {
        return this.value?.selectedType;
      },
      set(value) {
        this.$emit('input', { value, key: 'selectedType' });
      }
    },
  },
  methods: {
    removeDate() {
      this.$emit('delete');
    },
    validateTimes(value) {
      if (value === 'start') this.endTime = this.startTime;
      if (value === 'end') {
        if (this.endTime?.getTime() < this.startTime?.getTime()) this.endTime = this.startTime;
      }
      ;
    }
  }
};
</script>

