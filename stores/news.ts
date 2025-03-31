import { defineStore } from 'pinia'
import axios from 'axios'
import type { UniNews } from '~/models/universityNews.model'
import { useRuntimeConfig } from '#imports'



export const useNewsStore = defineStore('news', {
  state: () => ({
    news: [] as UniNews[],
  }),
  actions: {
    async fetchEvents() {
      const config = useRuntimeConfig()
      try {
        const response = await axios.get<UniNews[]>(`${config.public.apiBase}/news`)
        this.news = response.data
      } catch (error) {
        console.error('Error fetching news:', error)
      }
    },
  },
})