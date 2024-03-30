import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rfwtluqcocrauvgzwyrf.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmd3RsdXFjb2NyYXV2Z3p3eXJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1Njg2MzcsImV4cCI6MjAyNzE0NDYzN30.bp3ajbIenqxa0i9XZjYh3tRtfYN7vgZ-ONTT674RuGg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
