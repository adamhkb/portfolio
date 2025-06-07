'use client';

import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Divider,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <AppBar position="static" color="inherit" elevation={1} sx={{ mb: 4 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left: Name / Logo */}

          <Button component={Link} href="/" color="inherit">
        <Typography variant="h6" fontWeight="bold">
          AHKB
        </Typography>
</Button>
        {/* Right: Hamburger Icon */}
        <IconButton
          color="inherit"
          edge="end"
          onClick={toggleDrawer}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Desktop Nav (hidden on small screens) */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
          <Button component={Link} href="/" color="inherit">About</Button>
          <Button component={Link} href="/work" color="inherit">Work</Button>

          <Divider orientation="vertical" flexItem />

          <IconButton href="https://github.com/adamhkb" target="_blank">
            <GitHubIcon />
          </IconButton>
          <IconButton href="https://linkedin.com/in/adamhkamarulbahrin" target="_blank">
            <LinkedInIcon />
          </IconButton>
          <IconButton component={Link} href="/contact">
            <EmailIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Drawer Menu (Right Side) */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
          <List>
            {[
              { text: 'About', href: '/' },
              { text: 'Work', href: '/work' },
              { text: 'Contact', href: '/contact' },
            ].map((item, idx) => (
              <ListItem key={idx} disablePadding>
                <ListItemButton component={Link} href={item.href}>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 1 }} />

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, p: 1 }}>
            <IconButton href="https://github.com/adamhkb" target="_blank">
              <GitHubIcon />
            </IconButton>
            <IconButton href="https://linkedin.com/in/adamhkamarulbahrin" target="_blank">
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
