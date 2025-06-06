import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'frontend',
  webDir: '.next/server/app',
  server: {
    url: 'http://192.168.2.102:3000', // your computer's IP, not localhost!
    cleartext: true
  }
};

export default config;
