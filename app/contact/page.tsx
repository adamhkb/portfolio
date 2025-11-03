'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Link,
  CircularProgress,
} from '@mui/material';

type FormState = {
  name: string;
  email: string;
  message: string;
  // honeypot (hidden): bots often fill everything
  company?: string;
};

const initialState: FormState = { name: '', email: '', message: '', company: '' };

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormState>(initialState);
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    name: false,
    email: false,
    message: false,
    company: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const successRef = useRef<HTMLDivElement | null>(null);

  const emailRegex = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    []
  );

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!formData.name.trim()) e.name = 'Please enter your name.';
    if (!emailRegex.test(formData.email)) e.email = 'Enter a valid email address.';
    if (formData.message.trim().length < 10)
      e.message = 'Message should be at least 10 characters.';
    // Honeypot: if filled, we’ll reject on submit; no UI error needed.
    return e;
  }, [formData, emailRegex]);

  const hasClientErrors = Object.keys(errors).length > 0;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Honeypot: silently ignore if filled
    if (formData.company && formData.company.trim().length > 0) {
      setError('Submission rejected.'); // keep vague
      return;
    }

    // Client-side validation
    if (hasClientErrors) {
      setTouched({ name: true, email: true, message: true, company: true });
      setError('Please fix the highlighted fields and try again.');
      return;
    }

    setIsSubmitting(true);
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000); // 15s safety

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
        signal: controller.signal,
        cache: 'no-store',
      });

      clearTimeout(timeout);

      if (!res.ok) {
        // Defensive parse
        let msg = 'Something went wrong.';
        try {
          const data = await res.json();
          if (data?.error) msg = data.error;
        } catch {
          // ignore
        }
        throw new Error(msg);
      }

      setSubmitted(true);
      setFormData(initialState);
      setTouched({ name: false, email: false, message: false, company: false });
    } catch (err: any) {
      if (err?.name === 'AbortError') {
        setError('Request timed out. Please try again.');
      } else {
        setError(err?.message || 'Unexpected error. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (submitted && successRef.current) {
      successRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [submitted]);

  return (
    <Container maxWidth="sm" sx={{ py: 1 }}>
      <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
        Contact
      </Typography>

      <Typography color="text.secondary" mb={2}>
        Get in touch using the form below or email me at{' '}
        <Link href="mailto:adamhamzahkb@gmail.com" underline="hover">
          adamhamzahkb@gmail.com
        </Link>.
      </Typography>

      {!submitted ? (
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          aria-live="polite"
        >
          <TextField
            required
            name="name"
            label="Your name"
            placeholder="John Smith"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && !!errors.name}
            helperText={touched.name && errors.name}
            autoComplete="name"
            disabled={isSubmitting}
          />

          <TextField
            required
            type="email"
            name="email"
            label="Your email"
            placeholder="you@example.com"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && !!errors.email}
            helperText={touched.email && errors.email}
            autoComplete="email"
            disabled={isSubmitting}
          />

          <TextField
            required
            name="message"
            multiline
            rows={5}
            label="Your message"
            placeholder="Hey Adam, I’d love to work with you..."
            fullWidth
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.message && !!errors.message}
            helperText={touched.message && errors.message}
            disabled={isSubmitting}
          />

          {/* Honeypot field (hidden from users, visible to bots) */}
          <TextField
            name="company"
            label="Company"
            value={formData.company}
            onChange={handleChange}
            onBlur={handleBlur}
            sx={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
            endIcon={isSubmitting ? <CircularProgress size={20} /> : undefined}
          >
            {isSubmitting ? 'Sending…' : 'Send →'}
          </Button>

          {error && (
            <Alert severity="error" sx={{ mt: 1 }}>
              {error}
            </Alert>
          )}
        </Box>
      ) : (
        <Alert
          severity="success"
          sx={{ mt: 5, textAlign: 'center' }}
          ref={successRef}
        >
          Thank you for reaching out! I’ll get back to you shortly.
        </Alert>
      )}
    </Container>
  );
}
