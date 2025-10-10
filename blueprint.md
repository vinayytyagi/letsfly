
# Project Blueprint

## Overview

This project is a travel agency website. The goal is to create a visually appealing and user-friendly interface for users to browse travel packages and get in touch with the agency.

## Implemented Features

### Styling and Configuration
- Tailwind CSS is configured with a custom color palette and fonts.
- Colors:
  - Primary: `#1A73E8`
  - Secondary: `#F2F2F2`
  - Accent: `#FFC107`
  - Background: `#FFFFFF`
  - Foreground: `#171717`
- Fonts:
  - Sans-serif: "Open Sans"
  - Serif: "Playfair Display"

## Current Plan

### 1. Create Pages
- **Landing Page (`/app/page.js`):**
  - Hero section with a background image and a call-to-action button.
  - "Discover Stunning Destinations" section with a few featured packages.
- **About Us Page (`/app/about/page.js`):**
  - Information about the company.
- **Packages Listing Page (`/app/packages/page.js`):**
  - A grid of all available travel packages.
  - Each package card will be a link that redirects to WhatsApp.

### 2. Create Components
- **Navbar:** A navigation bar with links to Home, About Us, and Packages.
- **Footer:** A footer with contact information and social media links.
- **Package Card:** A reusable component to display a travel package.

### 3. Functionality
- Clicking on a package will redirect the user to a WhatsApp chat with a pre-filled message. The phone number will be hardcoded for now.

### 4. Styling
- All pages and components will be styled using Tailwind CSS, following the design cues from the provided images.
- The website will be responsive and work on mobile and desktop devices.
