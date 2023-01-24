<template>
  <div>
    <q-icon
      :name="matStar"
      color="amber-4"
      v-for="val in Array.from(Array(rating).keys())"
      :key="val"
    ></q-icon>
    <q-icon
      :name="matStarBorder"
      color="amber-4"
      v-for="val in Array.from(Array(max - rating).keys())"
      :key="val"
    ></q-icon>
  </div>
</template>

<script setup lang="ts">
import { matStar, matStarBorder } from '@quasar/extras/material-icons';
defineProps({ rating: Number, max: { type: Number, default: 5 } });
</script>
