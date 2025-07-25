// EmailJS Configuration
// To use EmailJS, you need to:
// 1. Create an account at https://www.emailjs.com/
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your Public Key, Service ID, and Template ID
// 5. Replace the values below with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'Q5TBM4dqW1qJZF45a', // Replace with your EmailJS public key
  SERVICE_ID: 'service_l6iz3yx', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'FormSubmitTemplate', // Replace with your EmailJS template ID
  TO_EMAIL: 'enterprise.crest@gmail.com', // Company email address
};

// Template variables that will be sent to EmailJS:
// - from_name: Customer's name
// - from_email: Customer's email
// - phone: Customer's phone
// - company: Customer's company
// - product_type: Selected product type
// - quantity: Required quantity
// - message: Customer's message
// - to_email: Company email (enterprise.crest@gmail.com)