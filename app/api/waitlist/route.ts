import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase';

export async function POST(request: Request) {
  try {
    const { phoneNumber } = await request.json();

    console.log(phoneNumber);

    if (!phoneNumber) {
      return NextResponse.json(
        { error: 'Phone number is required' },
        { status: 400 }
      );
    }

    // Check if phone number already exists
    const { data: existingUser } = await supabase
      .from('waitlist')
      .select('phone_number')
      .eq('phone_number', phoneNumber)
      .single();


    if (existingUser) {
      return NextResponse.json(
        { 
          success: false,
          message: 'You are already on the waitlist!'
        },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { error } = await supabase
      .from('waitlist')
      .insert([
        { 
          phone_number: phoneNumber,
          created_at: new Date().toISOString()
        }
      ]);

    if (error) throw error;

    return NextResponse.json({ 
      success: true,
      message: 'Successfully added to waitlist'
    });
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return NextResponse.json(
      { error: 'Failed to add to waitlist' },
      { status: 500 }
    );
  }
}
