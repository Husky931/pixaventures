import { limiter } from 'app/lib/rate-limit'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs' // important for nodemailer in Next.js

export async function POST(request: Request) {
  try {
    // Validate environment variables
    if (!process.env.ZOHO_EMAIL) {
      console.error('ZOHO_EMAIL environment variable is not set')
      return NextResponse.json(
        {
          message: 'Email service configuration error. Please contact support.',
        },
        { status: 500 },
      )
    }

    if (!process.env.ZOHO_PASSWORD) {
      console.error('ZOHO_PASSWORD environment variable is not set')
      return NextResponse.json(
        {
          message: 'Email service configuration error. Please contact support.',
        },
        { status: 500 },
      )
    }

    if (!process.env.CONTACT_FORM_RECIPIENT) {
      console.error('CONTACT_FORM_RECIPIENT environment variable is not set')
      return NextResponse.json(
        {
          message: 'Email service configuration error. Please contact support.',
        },
        { status: 500 },
      )
    }

    const headersList = await headers()
    const ip =
      headersList.get('x-forwarded-for')?.split(',')[0]?.trim() || '127.0.0.1'

    try {
      await limiter.check(ip, 3) // 3 requests per minute
    } catch (error) {
      return NextResponse.json(
        { message: 'Too many requests. Please try again later.' },
        { status: 429 },
      )
    }

    const { fullName, email, subject, message } = await request.json()

    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 },
      )
    }

    if (!email.includes('@') || !email.includes('.')) {
      return NextResponse.json(
        { message: 'Please enter a valid email address' },
        { status: 400 },
      )
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
    })

    // Verify transporter connection before sending
    try {
      await transporter.verify()
    } catch (verifyError) {
      console.error('SMTP connection verification failed:', verifyError)
      return NextResponse.json(
        { message: 'Email service connection failed. Please try again later.' },
        { status: 500 },
      )
    }

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.ZOHO_EMAIL}>`,
      replyTo: email,
      to: process.env.CONTACT_FORM_RECIPIENT,
      subject: `New Contact Form: ${subject}`,
      text: `
Name: ${fullName}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2>New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${fullName}</p>
  <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
  <p><strong>Subject:</strong> ${subject}</p>
  <div style="margin-top: 16px; padding: 12px; background:#f3f4f6; border-radius: 6px;">
    <p style="margin:0 0 8px;"><strong>Message:</strong></p>
    <p style="margin:0; white-space: pre-line;">${message}</p>
  </div>
</div>
      `,
    })

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error in contact form API:', error)

    // Provide more specific error messages
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
      })

      // Check for common nodemailer errors
      if (error.message.includes('Invalid login')) {
        return NextResponse.json(
          { message: 'Email authentication failed. Please contact support.' },
          { status: 500 },
        )
      }

      if (
        error.message.includes('ECONNREFUSED') ||
        error.message.includes('ETIMEDOUT')
      ) {
        return NextResponse.json(
          { message: 'Email service unavailable. Please try again later.' },
          { status: 500 },
        )
      }
    }

    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 },
    )
  }
}
