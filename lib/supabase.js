import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ojbnhwfgozggjfjetrmu.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qYm5od2Znb3pnZ2pmamV0cm11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0ODIzNDcsImV4cCI6MTk4NDA1ODM0N30.Y3_C-gzEHZ-Nt9dpqmbbhoXIHEz0vdQ4W7BOmGKyoZw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
