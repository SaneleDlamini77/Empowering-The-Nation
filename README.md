Empowering the Nation - Website Documentation
Project Overview
This is a multi-page website for "Empowering the Nation," an organization that provides skills training for domestic workers and gardeners to help them become more marketable and earn higher wages.

File Structure
text
project-folder/
├── home.html (Main landing page)
├── courses.html (Course information and details)
├── calculator.html (Course fee calculator)
├── apply.html (Course application form)
└── images/
    ├── logo.png
    ├── firstaid.png
    ├── sewing.png
    ├── cooking.png
    ├── childminding.png
    ├── landscaping.png
    └── gardening.png
Pages Description
1. Home Page (home.html)
Purpose: Landing page with organization introduction

Features:

Hero section with organization mission statement

Call-to-action button linking to courses

Responsive navigation header

Professional banner image

2. Courses Information (courses.html)
Purpose: Display available courses with detailed information

Features:

Grid layout of course cards

Interactive modal popups for course details

Course images and descriptions

Pricing and duration information

Responsive design for mobile devices

3. Course Fee Calculator (calculator.html)
Purpose: Calculate total course fees with discount system

Features:

Checkbox selection for multiple courses

Automatic discount calculation:

2 courses: 5% discount

3 courses: 10% discount

4+ courses: 15% discount

Prevents selecting multiple durations for same course

Real-time total calculation

4. Application Form (apply.html)
Purpose: Student enrollment and course application

Features:

Comprehensive application form

Personal information fields

Course selection with checkboxes

Duration selection dropdown

Success message upon submission

Form validation

Technical Specifications
Technologies Used
HTML5: Semantic structure

CSS3: Custom styling with responsive design

JavaScript: Interactive functionality

No external dependencies: Pure vanilla implementation

Design Features
Responsive Design: Mobile-first approach

Consistent Branding: Black and blue color scheme

Accessibility: Keyboard navigation and modal controls

User Experience: Intuitive navigation and clear calls-to-action

Browser Compatibility
Modern browsers (Chrome, Firefox, Safari, Edge)

Mobile browsers (iOS Safari, Chrome Mobile)

Responsive down to 320px screen width

Course Offerings
Available Courses:
First Aid

6-Month Program: R6000

6-Week Program: R2000

Sewing

6-Month Program: R3500

6-Week Program: R1500

Cooking

6-Month Program: R7500

Child Minding

6-Week Program: R2000

Landscaping

6-Month Program: R4000

6-Week Program: R1500

Garden Maintenance

6-Month Program: R3000

6-Week Program: R1500

Setup Instructions
Download Files: Ensure all HTML files and images folder are in the same directory

Image Requirements: Place all course images in the images/ folder with the specified filenames

Server Setup: Host on any web server or open directly in a browser

Testing: Verify all navigation links work between pages

Customization Guide
To Modify Course Information:
Update course details in courses.html modal functions

Adjust pricing in both courses.html and calculator.html

Replace course images in the images/ folder

To Change Brand Colors:
Modify CSS variables for primary colors (#000 for black, #007BFF for blue)

Update header, footer, and button styles across all pages

To Add New Courses:
Add course card in courses.html

Update calculator options in calculator.html

Add to application form in apply.html

Include corresponding course image

Maintenance Notes
All pages use internal CSS for easy maintenance

Consistent navigation structure across all pages

Form data is handled client-side (consider adding server-side processing for production)

No database integration included (can be added as needed)

Future Enhancements
Backend integration for form processing

User authentication system

Payment gateway integration

Student portal for enrolled users

Admin dashboard for course management
