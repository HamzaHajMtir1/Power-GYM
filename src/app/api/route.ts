import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function POST(request: Request) {
  const { fullName, email, password, phone  } = await request.json();
  const supabase = await createClient();

  // Sign up the user with Supabase Auth
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  // Optionally store additional user info in a "profiles" table
  const { error: profileError } = await supabase
    .from('users')
    .insert({
      user_id: data.user?.id,
      full_name: fullName,
      phone
    });

  if (profileError) {
    return NextResponse.json({ error: profileError.message }, { status: 400 });
  }

  return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
}