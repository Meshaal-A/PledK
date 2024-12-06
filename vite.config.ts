import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 5804884 (feat(header):Added Navbar)
=======

>>>>>>> 1306d36 (chore(deps): update @vitejs/plugin-react to version 4.3.4)
