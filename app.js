document.addEventListener('DOMContentLoaded', () => {
  const calcBtn = document.getElementById('calculate');
  if (calcBtn) {
    calcBtn.addEventListener('click', () => {
      const selected = document.querySelectorAll('#calc-form input:checked');
      if (selected.length === 0) return alert('Please select at least one course.');
      let subtotal = 0; selected.forEach(c => subtotal += parseInt(c.value));
      let discountRate = selected.length === 2 ? 0.05 : selected.length === 3 ? 0.10 : selected.length >= 4 ? 0.15 : 0;
      const discount = subtotal * discountRate;
      const total = (subtotal - discount) * 1.15;
      document.getElementById('result').innerHTML = `<h2>Quotation</h2>
        <p>Subtotal: R${subtotal}</p>
        <p>Discount: R${discount.toFixed(2)} (${discountRate*100}%)</p>
        <p>VAT (15%): R${((subtotal-discount)*0.15).toFixed(2)}</p>
        <h3>Total: R${total.toFixed(2)}</h3>`;
    });
  }
});