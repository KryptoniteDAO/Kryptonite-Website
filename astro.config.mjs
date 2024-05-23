import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import Compress from "astro-compress";
import react from "@astrojs/react";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), Compress(), compress()]
});