/**
 * SITE CONFIGURATION
 * ===================
 * Update these values when client provides the assets/links.
 * All configurable items are centralized here for easy updates.
 */

export const SITE_CONFIG = {
  // Site Information
  siteName: "Jayden Pileggi Functional Medicine",
  siteUrl: "https://bloodtest.jaydenpileggifunctionalmedicine.com", // Update with actual domain

  // Contact Information
  email: "info@jaydenpileggifunctionalmedicine.com",
  phone: "0452 594 442",
  location: "Perth, Western Australia",

  // Social Links
  social: {
    instagram: "https://www.instagram.com/jaydenpileggi/",
    facebook: "https://www.facebook.com/jaydenpileggi",
    linkedin: "https://www.linkedin.com/in/jayden-pileggi-a57275200",
    mainWebsite: "https://www.jaydenpileggifunctionalmedicine.com/",
  },
};

export const VIDEO_CONFIG = {
  // Set to true when video is ready
  hasVideo: false,

  // Vimeo video ID (the number at the end of vimeo.com/XXXXXX)
  vimeoId: "", // e.g., "123456789"

  // Thumbnail image URL (optional - Vimeo provides one)
  thumbnailUrl: "",

  // Video title for accessibility
  title: "Jayden Pileggi explains the Comprehensive Blood Test",
};

export const CALENDLY_CONFIG = {
  // Calendly URL for PAID discovery calls
  // Format: https://calendly.com/username/event-type
  url: "", // e.g., "https://calendly.com/jaydenpileggi/discovery-call"
};

export const PRODUCT_CONFIG = {
  // Product purchase links - Update with actual checkout URLs
  maleTestUrl: "#", // e.g., "https://checkout.stripe.com/..."
  femaleTestUrl: "#",

  // Discovery call booking link (if different from Calendly)
  discoveryCallUrl: "",
};

export const ANALYTICS_CONFIG = {
  // Facebook/Meta Pixel ID - Get from Facebook Business Manager
  metaPixelId: "", // e.g., "1234567890"

  // Google Analytics Measurement ID - Get from Google Analytics
  googleAnalyticsId: "", // e.g., "G-XXXXXXXXXX"
};

export const VIDEO_TESTIMONIALS_CONFIG = {
  // Set to true to show video testimonials section
  enabled: false,

  // Video testimonials from main site
  testimonials: [
    {
      name: "Steve",
      videoUrl: "", // Vimeo or YouTube embed URL
      thumbnailUrl: "",
    },
    {
      name: "Lorie",
      videoUrl: "",
      thumbnailUrl: "",
    },
    {
      name: "Courtney",
      videoUrl: "",
      thumbnailUrl: "",
    },
  ],
};

/**
 * CHECKLIST FOR CLIENT
 * ====================
 *
 * Before launch, get these from the client:
 *
 * [ ] 1. VSL Video - Upload to Vimeo, get the video ID
 * [ ] 2. Calendly Link - Set up paid discovery call booking
 * [ ] 3. Product Links - Stripe checkout URLs for Male/Female tests
 * [ ] 4. Meta Pixel ID - From Facebook Business Manager
 * [ ] 5. Google Analytics ID - From Google Analytics
 * [ ] 6. Video Testimonials - URLs from Steve, Lorie, Courtney
 * [ ] 7. Final domain - Where site will be hosted
 *
 * Optional but recommended:
 * [ ] Custom domain email
 * [ ] Terms of Service page URL
 * [ ] Privacy Policy page URL
 * [ ] Refund Policy page URL
 */
