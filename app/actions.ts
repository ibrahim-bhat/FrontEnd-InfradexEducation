'use server';

import { z } from 'zod';

const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export async function submitContactForm(formData: FormData) {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return { error: 'Invalid form data' };
  }

  const { name, email, message } = validatedFields.data;

  try {
    // Here you would typically send an email or save to a database
    // For now, we'll just log the data
    console.log('Form submission:', { name, email, message });

    return { success: true };
  } catch (error) {
    return { error: 'Failed to submit form' };
  }
}

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get('email');

  if (!email || typeof email !== 'string') {
    return { error: 'Invalid email address' };
  }

  try {
    // Here you would typically add the email to your newsletter service
    // For now, we'll just log the email
    console.log('Newsletter subscription:', email);

    return { success: true };
  } catch (error) {
    return { error: 'Failed to subscribe' };
  }
} 