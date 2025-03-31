<template>
  <v-container>
    <h2>University News</h2>
    <v-row v-if="news.length" dense>
      <v-col
        v-for="item in news"
        :key="item.id"
        cols="12"
        sm="6"
        md="4"
        class="d-flex"
      >
        <v-card outlined class="flex-grow-1">
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text> {{ item.body }}</v-card-text>
          <v-card-subtitle>
            Created: {{ formatDate(item.created_at) }}
            <hr>
            Last Update: {{ formatDate(item.updated_at) }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-alert v-else type="info"> No news available. </v-alert>
  </v-container>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useNewsStore } from "@/stores/news";

const newsStore = useNewsStore();
const { news } = storeToRefs(newsStore);

onMounted(() => {
  newsStore.fetchEvents();
});

const formatDate = (dateString) => {
  if (!dateString) return "Unknown Date";
  const date = new Date(dateString);
  return date.toLocaleString("hu-HU", { 
    year: "numeric", 
    month: "2-digit", 
    day: "2-digit", 
    hour: "2-digit", 
    minute: "2-digit", 
    second: "2-digit" 
  });
};

</script>
