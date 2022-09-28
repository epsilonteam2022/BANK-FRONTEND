import { createClient } from '@supabase/supabase-js'
export const getAllData = async (user) => {
    const SUPABASE_ANON_KEY =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3aWJsd2NobXZ0dWJkbm1id2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQzMTg5NTYsImV4cCI6MTk3OTg5NDk1Nn0.3gsA28uMq2Y0NaMaVTSKLaA8m2n7GDXGAwaHmkJQmkA'
    const SUPABASE_URL = 'https://iwiblwchmvtubdnmbwbt.supabase.co/'
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    await supabase
        .from('users')
        .insert([
            {
                user_id: user.id,
                user_email: user.email,
                first_name: user.firstName,
                last_name: user.lastName,
                password: user.password,
            },
        ])
        .then(console.log('Exito'))
}
