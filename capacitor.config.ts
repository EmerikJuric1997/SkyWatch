import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Sky Watch',
  webDir: 'dist',
  bundledWebRuntime: false,
    plugins: {
        SplashScreen: {
            launchShowDuration: 3000,
            launchAutoHide: true,
            androidScaleType: "CENTER_CROP",
            splashImmersive: true,
            backgroundColor: "#ffffff"
        }
    },
  server: {
    androidScheme: 'https'
  }
};

export default config;
