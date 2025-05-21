function proses() {
  const nama = document.getElementById("nama").value;
  const kategori = document.getElementById("kategori").value;
  const jumlah = parseInt(document.getElementById("jumlah").value);
  const hasil = document.getElementById("hasil");

  if (!nama || isNaN(jumlah)) {
    hasil.innerHTML = "<p style='color:red'>Masukkan data dengan benar!</p>";
    return;
  }

  let tarif = 0, abodemen = 0, pajak = 0;

  if (kategori === "sosial") {
    tarif = 300;
    abodemen = 10000;
    pajak = 0;
  } else if (kategori === "rumah") {
    tarif = 500;
    abodemen = 30000;
    pajak = 0.10;
  } else if (kategori === "industri") {
    tarif = 1000;
    abodemen = 50000;
    pajak = 0.30;
  }

  let rincian = `
    <h2>TAGIHAN LISTRIK</h2>
    <p><strong>Nama pelanggan:</strong> ${nama}</p>
    <p><strong>Kategori:</strong> ${kategori.charAt(0).toUpperCase() + kategori.slice(1)}</p>
    <p><strong>Jumlah Pemakaian:</strong> ${jumlah}</p>
    <h3>Rincian Tagihan</h3>
    <table class="rincian">
      <tr>
        <th>Jumlah</th>
        <th>Tarif per KWH</th>
        <th>Abodemen</th>
        <th>Subtotal</th>
      </tr>
  `;

  let subtotal = 0;
  for (let i = 1; i <= jumlah; i++) {
    let biaya = i * tarif + abodemen;
    subtotal = biaya;
    rincian += `
      <tr>
        <td>${i}</td>
        <td>${i * tarif}</td>
        <td>${abodemen}</td>
        <td>${i * tarif + abodemen}</td>
      </tr>
    `;
  }

  let totalPajak = subtotal * pajak;
  let totalBayar = subtotal + totalPajak;

  rincian += `
    </table>
    <p><strong>Subtotal:</strong> ${subtotal}</p>
    <p><strong>Pajak:</strong> ${totalPajak}</p>
    <p><strong>Bayar:</strong> ${totalBayar}</p>
  `;

  hasil.innerHTML = rincian;
}

function resetForm() {
  document.getElementById("nama").value = "";
  document.getElementById("kategori").selectedIndex = 0;
  document.getElementById("jumlah").value = "";
  document.getElementById("hasil").innerHTML = "";
}
