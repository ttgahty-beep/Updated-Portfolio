import { Request, Response } from 'express';

export const handleContactSubmission = (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    // Validate name
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid name.',
      });
    }

    // Validate email
    if (!email || typeof email !== 'string' || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email format (e.g., user@domain.com).',
      });
    }

    // Validate message
    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a message.',
      });
    }

    // Console log contact submission details
    console.log('-------------------------------------------');
    console.log('[Contact Controller] New Contact Received:');
    console.log(`Name:    ${name.trim()}`);
    console.log(`Email:   ${email.trim()}`);
    console.log(`Message: ${message.trim()}`);
    console.log('-------------------------------------------');

    // Return success response
    return res.status(200).json({
      success: true,
      message: `Thank you, ${name.trim()}! Your message has been sent successfully. I will get back to you soon.`,
    });
  } catch (error) {
    console.error('Error in handleContactSubmission controller:', error);
    return res.status(500).json({
      success: false,
      message: 'An unexpected internal server error occurred. Please try again later.',
    });
  }
};
