import { NextResponse } from 'next/server';
import generateResponse from '@/services/ai.service';

export async function POST(request: Request) {
    const { prompt } = await request.json();
    if (!prompt) {
        return NextResponse.json(
            { success: false, error: 'Prompt is required' },
            { status: 400 }
        );
    }
    const resp = await generateResponse(prompt);
    if (!resp.success) {
        return NextResponse.json(
            { success: false, error: resp.error },
            { status: 500 }
        );
    }

    return NextResponse.json(
        { success: true, answer: resp.result },
        { status: 200 }
    );
}
