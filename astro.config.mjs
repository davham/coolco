// astro.config.mjs
import { defineConfig } from 'astro/config'

// Ensure the application explicitly supports static file system routing
export default defineConfig({
	output: 'static',
})
