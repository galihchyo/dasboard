function prosesGaji() {
  const jumlahLagu = parseFloat(document.getElementById("lagu").value) || 0;
  const upahPerLagu = parseFloat(document.getElementById("upah").value) || 0;
  const jumlahAnak = parseInt(document.getElementById("anak").value) || 0;

  const gaji = jumlahLagu * upahPerLagu;
  const tunjangan = gaji * 0.10 * jumlahAnak;
  const totalGaji = gaji + tunjangan;

  document.getElementById("gaji").value = gaji.toLocaleString("id-ID", { minimumFractionDigits: 2 });
  document.getElementById("tunjangan").value = tunjangan.toLocaleString("id-ID", { minimumFractionDigits: 2 });
  document.getElementById("total").value = totalGaji.toLocaleString("id-ID", { minimumFractionDigits: 2 });
}

function resetForm() {
  document.getElementById("formGaji").reset();
  document.getElementById("gaji").value = "";
  document.getElementById("tunjangan").value = "";
  document.getElementById("total").value = "";
}
