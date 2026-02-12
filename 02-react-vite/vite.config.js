import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:30000, //Muda a porta padrao vite 5173 para a padrao react 3000
    open:true, //Abre o navegador automaticamente
    host:true, //Permite que tenha acesso via IP na rede local
  }
  }
);
