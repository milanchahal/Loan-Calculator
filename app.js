document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing form'); // Debug log
    const form = document.getElementById('loan-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Form submission prevented'); // Debug log
        document.getElementById('results').style.display = 'none';
        document.getElementById('loading').style.display = 'block';
        setTimeout(calculateResults, 2000);
      });
    } else {
      console.error('Form not found');
    }
  
    function calculateResults() {
      console.log('Calculating results'); // Debug log
      const amount = document.getElementById('amount');
      const interest = document.getElementById('interest');
      const years = document.getElementById('years');
      const monthlyPayment = document.getElementById('monthly-payment');
      const totalPayment = document.getElementById('total-payment');
      const totalInterest = document.getElementById('total-interest');
  
      const principal = parseFloat(amount.value);
      const interestRate = parseFloat(interest.value);
      const yearsValue = parseFloat(years.value);
  
      if (isNaN(principal) || isNaN(interestRate) || isNaN(yearsValue) || principal <= 0 || interestRate <= 0 || yearsValue <= 0) {
        console.log('Invalid input detected'); // Debug log
        showError('Please enter valid numbers for all fields');
        return;
      }
  
      const monthlyInterest = interestRate / 100 / 12;
      const payments = yearsValue * 12;
      const x = Math.pow(1 + monthlyInterest, payments);
      const monthly = (principal * x * monthlyInterest) / (x - 1);
  
      if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * payments).toFixed(2);
        totalInterest.value = (monthly * payments - principal).toFixed(2);
        document.getElementById('results').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
        console.log('Results displayed'); // Debug log
      } else {
        console.log('Invalid calculation result'); // Debug log
        showError('Invalid calculation result');
      }
    }
  
    function showError(error) {
      console.log('Showing error: ' + error); // Debug log
      document.getElementById('results').style.display = 'none';
      document.getElementById('loading').style.display = 'none';
      const errorDiv = document.createElement('div');
      const card = document.querySelector('.card');
      const heading = document.querySelector('.heading');
      errorDiv.className = 'alert alert-danger';
      errorDiv.appendChild(document.createTextNode(error));
      card.insertBefore(errorDiv, heading);
      setTimeout(() => document.querySelector('.alert')?.remove(), 3000);
    }
  });