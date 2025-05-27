The Loan Calculator is a web-based application that allows users to calculate loan repayment details, including monthly payments, total payments, and total interest, based on the loan amount, interest rate, and repayment period. Built with HTML, JavaScript, and Bootstrap, it features a vibrant, user-friendly interface with a colorful design and a dynamic Lottie animation loader for a modern user experience. The application is hosted on GitHub Pages and designed to be responsive across devices.

Features

Input Fields:
Loan Amount (in dollars, supports decimals)
Annual Interest Rate (as a percentage)
Repayment Period (in years)


Calculations:
Monthly Payment: Calculated using the amortization formula
Total Payment: Monthly payment multiplied by the number of months
Total Interest: Total payment minus the principal


Visual Design:
.Blue gradient background (#4b79a1 to #283e51)
Light yellow card (#fef9e7) with a subtle shadow
Pink headings (#d81b60) for prominence
Green input prefixes (#81c784) and result text (#2e7d32)
Blue calculate button (#0288d1, darkens to #01579b on hover)
Light blue results section (#e1f5fe)
Red error messages (#ef5350) for invalid inputs


Input Validation:
Ensures positive, non-zero values for all inputs
Displays error messages for invalid inputs (e.g., negative numbers, empty fields)


Responsive Design:
Adjusts layout and font sizes for screens smaller than 576px


No Page Refresh:
Prevents form submission refresh using JavaScript (e.preventDefault())


Technologies Used
HTML5: Structure of the web page
JavaScript: Handles form submission, calculations, and error messaging
Bootstrap 4.4.1: Responsive layout and styling

GitHub Pages: Hosting the application
