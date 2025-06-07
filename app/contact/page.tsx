'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Link,
} from '@mui/material';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      const data = await res.json();
      setError(data.error || 'Something went wrong.');
    }
  };

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
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            required
            name="name"
            label="Your name"
            placeholder="John Smith"
            fullWidth
            value={formData.name}
            onChange={handleChange}
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
          />
          <Button type="submit" variant="contained" size="large">
            Send →
          </Button>
          {error && (
            <Alert severity="error" sx={{ mt: 1 }}>
              {error}
            </Alert>
          )}
        </Box>
      ) : (
        <Alert severity="success" sx={{ mt: 5, textAlign: 'center' }}>
          Thank you for reaching out! I’ll get back to you shortly.
        </Alert>
      )}
    </Container>
  );
}
