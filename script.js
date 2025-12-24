// Minimal interactivity
(function(){
  const year = document.getElementById('year');
  if(year){ year.textContent = new Date().getFullYear(); }

  const form = document.getElementById('bookingForm');
  if(!form) return;

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const required = ['name','phone','city','appliance'];
    const missing = required.filter(k => !(data.get(k)||'').toString().trim());
    if(missing.length){
      alert('Please complete all required fields.');
      return;
    }
    const summary = [
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      `City: ${data.get('city')}`,
      `Email: ${data.get('email')||'-'}`,
      `Appliance: ${data.get('appliance')}`,
      `Model: ${data.get('model')||'-'}`,
      `Issue: ${(data.get('issue')||'').toString().slice(0,200)}`
    ].join('\n');

    // For now, just prepare a tel: to call; optionally mailto:
    if(confirm('Submit your request and dial support?')){
      window.location.href = 'tel:18003091619';
    } else {
      // Optionally open email draft
      const subject = encodeURIComponent('Service Request');
      const body = encodeURIComponent(summary);
      window.location.href = `mailto:support@example.com?subject=${subject}&body=${body}`;
    }
  });
})();
