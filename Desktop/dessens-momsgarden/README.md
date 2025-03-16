# Enhanced Scrolling UI for Mom's Garden × Des Sens

This is an implementation of a modern scrolling UI with the following enhanced features:

## Key Features

1. **Dynamic Navigation Bar** 
   - Stays fixed at the top and shrinks when scrolling down
   - Shows the title of the current section being viewed
   - Smooth title transition effect when moving between sections

2. **Section-Based Progress Bar** 
   - Shows reading progress within each section (resets between sections)
   - Visual indicator that grows as you progress through a section

3. **Elegant Typography and Layout**
   - Uses Domine serif font from Google Fonts
   - Large 72px headers for section titles
   - 20px base font size for comfortable reading
   - Left-aligned text with 600px content width
   - Consistent -2% letter spacing across all text

## How It Works

### Navigation Bar
- The navbar stays fixed at the top using CSS `position: fixed`
- When scrolling past 50px, JavaScript adds the `.shrink` class to the navbar
- The navbar title updates dynamically to show the current section being viewed
- A subtle animation effect occurs when the title changes

### Progress Bar
- A thin bar at the very top of the page that tracks progress within each section
- Progress is calculated relative to the current section's height
- Resets to 0% when entering a new section

### Section Detection
- JavaScript detects which section is currently in the viewport
- Sections are defined with `data-title` attributes that provide the navbar title text
- Intersection calculations determine which section is active and the progress within it

## File Structure

- `index.html` - Content structure with properly marked-up sections
- `styles.css` - Styling for all UI elements including typography and layout
- `script.js` - JavaScript to handle the scroll events, section detection, and UI updates

## Usage

Simply open the `index.html` file in a web browser to see the implementation in action. The example includes:

- A Mom's Garden × Des Sens strategy document divided into sections
- Dynamic navigation showing the current section title
- Section-based progress tracking

## Customization

You can easily customize this implementation by:

- Modifying the Google Font import to use a different typeface
- Adjusting the font sizes and letter spacing in the CSS
- Changing the content width by modifying the `max-width` property
- Modifying the color scheme to match your brand identity 