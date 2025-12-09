
// Simple lead form handler (client-side only)
document.getElementById('leadForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Obrigado! Recebemos sua inscrição. Entraremos em contacto.');
  this.reset();
});
