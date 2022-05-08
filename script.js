function hirlevel() {
  const nevInput = document.getElementById('nev');
  const emalInput = document.getElementById('mail');
  const datumInput = document.getElementById('szul');

  if (nevInput.value == '' || emalInput.value == '' || datumInput.value == '') {
    alert('Kérjük minden mezőt töltsön ki az űrlapon!');
    return;
  }
  const felhInput = document.getElementById('felh');

  console.log(datumInput.value)

 if (new Date(datumInput.value) > Date.now() || new Date(datumInput.value) < new Date("1900-01-01") )
 {
  alert("Időutazóknak tilos!")
 }

  if (felhInput.checked == false) {
    alert('Kérjük fogadja el a felhasználói szabályzatot!');
    return;
  }

  const formInput = document.getElementById('minden');
  formInput.reset();
}