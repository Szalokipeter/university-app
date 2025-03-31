<template>
  <v-container>
    <v-alert v-if="!newsItem" type="info">Loading...</v-alert>

    <v-card v-else>
      <v-card-title>{{ newsItem.title }}</v-card-title>
      <v-card-subtitle>{{ newsItem.date }}</v-card-subtitle>
      <v-card-text>
        {{ newsItem.body }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useNewsStore } from "@/stores/news";

const route = useRoute();
const newsStore = useNewsStore();
const newsItem = ref(null);

onMounted(async () => {
  console.log('news/[id].vue mounted!', route.params.id)
  await newsStore.fetchEvents();
  newsItem.value = newsStore.news.find(
    (item) => item.id === Number(route.params.id)
  );
});
</script>
