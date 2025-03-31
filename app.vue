<script setup></script>

<template>
  <v-app>
    <v-container>
      <v-app-bar color="primary" app>
        <v-btn :to="'/'">Home</v-btn>
        <v-btn :to="'/calendar'">Calendar</v-btn>
        <v-btn :to="'/news'">News</v-btn>
        <v-btn :to="'/university'">University</v-btn>
      </v-app-bar>

      <v-main>
        <NuxtPage />
      </v-main>
    </v-container>
  </v-app>
</template>
