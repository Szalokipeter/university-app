<template>
    <v-container>
      <h2>University News</h2>
      <v-row v-if="news.length" dense>
        <v-col v-for="item in news" :key="item.id" cols="12" sm="6" md="4">
          <v-sheet class="pa-3 rounded-lg" elevation="2">
            <h3>{{ item.title }}</h3>
            <p><strong>{{ item.date }}</strong></p>
            <p>{{ item.body?.substring(0, 100) }}...</p>
            <v-btn text color="primary" :to="`/news/${item.id}`">Read More</v-btn>
          </v-sheet>
        </v-col>
      </v-row>
      <v-alert v-else type="info">No news available.</v-alert>
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
    console.log('news/[id].vue mounted!', route.params.id)
  });
  </script>