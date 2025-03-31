<template>
  <v-container>
    <v-sheet height="600">
      <v-calendar
        prev-icon="mdi-chevron-left"
        next-icon="mdi-chevron-right"
        ref="calendar"
        v-model="focus"
        type="month"
        :events="formattedEvents"
        event-color="color"
        :today="today"
      >
        <template v-slot:event="{ event }">
          <v-chip :color="event.color" dark>
            {{ event.name }}
          </v-chip>
        </template>
      </v-calendar>
    </v-sheet>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useCalendarStore } from "@/stores/calendar";

const calendarStore = useCalendarStore();
const { events } = storeToRefs(calendarStore);

const focus = ref([new Date()]);
const today = ref(new Date());

onMounted(() => {
  calendarStore.fetchEvents();
});

const formattedEvents = computed(() =>
  (events.value || []).map((event) => {
    const eventDate = event.dateofevent
      ? parseDate(event.dateofevent)
      : new Date();
    return {
      name: event.title,
      start: eventDate,
      end: eventDate,
      color: getEventColor(event.event_type),
    };
  })
);

const parseDate = (dateString) => {
  if (!dateString) return new Date();
  const datePart = dateString.split(" ")[0];
  const parts = datePart.split("-");
  return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
};

const getEventColor = (eventType) => {
  switch (eventType) {
    case "Open to Public":
      return "blue";
    case "Family Affairs":
      return "red";
    case "Student Affairs":
      return "green";
    case "Registration Required":
      return "orange";
    default:
      return "gray";
  }
};
</script>

<style scoped>
.event {
  font-size: 12px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}
</style>
