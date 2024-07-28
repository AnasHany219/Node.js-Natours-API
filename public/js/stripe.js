/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alerts';

// Initialize Stripe outside the function but don't use await directly
const stripe = Stripe(
  'pk_test_51PhMgCHpyJxp9TbBx9dAAKXV8kG8a64usjoAp06U4IQhUJnBSaYpl0rle2bBJRqm9MMOLKAGL62vPoRINLQ2cyx900BhzkB3Ex',
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
    console.error('Error:', err);
    // Optionally show an error message to the user
  }
};
