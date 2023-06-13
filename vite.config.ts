// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

type Port = {
  host: true
  port: 3000
}

const port: Port = {
  host: true,
  port: 3000
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // test: {
  //   globals: true,
  //   environment: 'happy-dom'
  // },
  server: port,
  preview: port,
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
})
