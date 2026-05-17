// Estrutura base pronta para integração futura.
// Instalação necessária: npm install @supabase/supabase-js

export type Database = {
  public: {
    Tables: {
      items: { Row: { id: string; name: string; category: string; status: string; created_at: string }; Insert: any; Update: any };
    };
  };
};

export function createClient() {
  // Stub temporário. Substituir por `createBrowserClient` quando Supabase for configurado.
  return {
    auth: {
      signIn: async () => ({ error: null }),
      signOut: async () => ({ error: null }),
      getSession: async () => ({ data: { session: null }, error: null }),
    },
    from: (table: string) => ({
      select: () => ({ eq: () => ({ order: () => ({ data: [], error: null }) }) }),
    }),
  };
}
