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
          <v-card-subtitle>{{ item.date }}</v-card-subtitle>
          <v-card-text>
            {{ item.body || "Read more..." }}
          </v-card-text>
          <v-card-actions>
            <v-btn text color="primary" @click="console.log(`/news/${item.id}`)" :to="`/news/${item.id}`">Read More</v-btn>
          </v-card-actions>
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
  console.log(news.value);
});

</script>
