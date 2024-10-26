# 319_Assignment03
Here’s a Markdown version of the assignment:

COM S/SE 3190: Construction of User Interfaces

Fall 2024

Assignment 03: Product Catalog and Cart

[Total Points: 100]

	•	Assignment publishing: Wednesday, October 23, 2024
	•	Due: Wednesday, October 30, 2024, 11:59 PM

Overview

Develop a small cart application for a store that sells various products. The client requires three views:

	1.	Browse View
	•	Displays a list of items with quantity controls.
	2.	Cart View
	•	Shows selected items, total value, and includes a checkout form.
	3.	Confirmation View
	•	Displays order summary.

Implement using a single-page React design with one index.html and script.js, optionally with style.css.

Design Requirements

1. Browse View (40 points)

	•	Display 6-12 items, each with “+”/”-” buttons to adjust quantity.
	•	Include a search bar to filter items in real-time.
	•	Maintain global “cart” variable to track item quantities.

2. Cart View (30 points)

	•	Transition to cart view using single-page navigation.
	•	Display items, quantities, total value, and a payment form.
	•	Include fields for Full Name, Email, Card, Address1, City, State, Zip (validation required).

3. Confirmation View (20 points)

	•	Display purchased items and user information (partially redacted credit card).
	•	Include a button to return to a fresh browse view.

Submission

Submit a ZIP file containing:

	1.	Required files:
	•	package.json
	•	package-lock.json
	•	README.md
	•	public/ and src/ folders (remove node_modules folder).
	2.	An MP4 video (max 3 minutes) explaining the app’s functionality and technical details.

Grading Rubric

Component	Points	Criteria
Browse View	40	Functional item list, search, quantity controls, checkout button
Cart View	30	List of items, payment info, return button, order button
Confirmation	20	Purchased items, user info, button for fresh browse view
Video	10	3-minute technical and procedural overview

Late submissions will deduct 5 points per day.

