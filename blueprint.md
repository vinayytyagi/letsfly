# Project Blueprint

## Overview

This project is a travel and tourism website called "Pacific Holidays". The goal is to create a visually appealing and user-friendly interface for browsing travel packages and destinations.

## Current State

### Design & Styling

*   **Typography:**
    *   Headings: `Gloock`
    *   Body: `Plus Jakarta Sans`
    *   Logo: `Playwrite DE SAS`
*   **Color Palette:**
    *   Primary: `#1A73E8`
    *   Secondary: `#F2F2F2`
    *   Accent: `#FFC107`
    *   Background: `#FFFFFF`
    *   Foreground: `#0B3D4A`
*   **Icons:** `react-icons` (Font Awesome)
*   **Buttons:**
    *   Reusable `Button` component.
    *   Background color: `#d5e880`
    *   Hover background color: `#0d3a48`
    *   Rounded bottom-right corner, changing to fully rounded on hover.

### Features

*   **Navigation Bar:**
    *   Company Name: "Pacific Holidays" (styled with `Playwrite DE SAS` font).
    *   Custom SVG Logo.
    *   Navigation links: "Home", "Packages", "About us".
*   **Hero Section:**
    *   Image carousel with four rotating background images.
    *   Images automatically cycle every 5 seconds.
    *   Clickable thumbnail images to manually change the background.
    *   Centered text with a main heading, subheading, and descriptive paragraph.
    *   "Explore More" button.
*   **Offerings Section:**
    *   Image of a woman with a suitcase and a travel stamp overlay.
    *   Headline: "Your Passport To Memorable Adventures".
    *   Four offerings with icons, titles, and descriptions (Hill Stations, Road Trips, Outdoor Packages, Forest Safari).
    *   "Discover Our Offerings" button.
    *   "Happy Clients" section with profile pictures and a count.
*   **Discover Destinations Section:**
    *   Grid of four destination cards with images, titles, and price information.
    *   "Explore All Destinations" button.
*   **Team Section:**
    *   Headline: "People Who Make Travel Enchanting".
    *   "View Our Team" button.
    *   Three team member cards with images, names, and titles.
    *   Social media icons on each team member card.
*   **Blogs Section:**
    *   Headline: "News, Tips & Destination Stories".
    *   "View All Blogs" link.
    *   Three blog post cards with images, author, comments, title, excerpt, and "Read More" link.
    *   Image zoom effect on hover.
*   **Footer:**
    *   Newsletter signup form.
    *   Links for Information, Help, and Support.
    *   App download buttons for Google Play and App Store.
    *   Copyright information and social media links.
*   **Scroll to Top Button:**
    *   A button that appears in the bottom right corner when the user scrolls down.
    *   Scrolls the page to the top when clicked.
*   **About Page:**
    *   A simple placeholder page for the "About Us" section.
*   **Packages Page:**
    *   A simple placeholder page for the "Packages" section.

### Bug Fixes

*   **Resolved "Internal Server Error":** The application was crashing due to an "Internal Server Error" caused by missing pages for the `/about` and `/packages` routes, which were linked in the navigation bar. The build process was failing with a `PageNotFoundError`.
    *   **Fix:** Created placeholder pages at `app/about/page.js` and `app/packages/page.js` to resolve the build error and the server crash.

## Plan for Current Request

*   **Objective:** Update the typography of the website and fix the resulting "Internal Server Error".
*   **Steps:**
    1.  Reverted the heading font back to `Gloock`.
    2.  Changed the font for the company name "Pacific Holidays" to `Playwrite DE SAS`.
    3.  Updated `app/layout.js` to import and configure the new fonts.
    4.  Updated `tailwind.config.js` to reflect the font changes.
    5.  Ensured the `Navbar.js` component applies the correct font to the company name.
    6.  **Fixed the "Internal Server Error" by creating missing pages.**
    7.  **The font issue should now be resolved.** I will await user confirmation.
