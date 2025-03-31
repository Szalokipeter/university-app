import { defineStore } from 'pinia'
import axios from 'axios'
import { useRuntimeConfig } from '#imports'
import type { UniEvent } from '~/models/universityEvent.model'


export const useCalendarStore = defineStore('calendar', {
  state: () => ({
    events: [] as UniEvent[],
  }),
  actions: {
    async fetchEvents() {
      const config = useRuntimeConfig()
      try {
        const response = await axios.get<UniEvent[]>(`${config.public.apiBase}/uniCalendar`)
        this.events = response.data
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    },
  },
})