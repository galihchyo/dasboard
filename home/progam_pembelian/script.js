function setHarga() {
  const barang = document.getElementById("barang").value;
  let harga = 0;
  switch (barang) {
    case "Procesor": harga = 5100000; break;
    case "Motherboard": harga = 2300000; break;
    case "RAM": harga = 1700000; break;
    case "SSD": harga = 1100000; break;
    case "HDD": harga = 800000; break;
    case "VGA": harga = 5600000; break;
    case "PSU": harga = 1000000; break;
    case "Casing": harga = 560000; break;
    case "Monitor": harga = 2700000; break;
    case "Keyboard": harga = 750000; break;
    case "Mouse": harga = 350000; break;
  }
  document.getElementById("harga").value = harga;
}

function proses() {
  const harga = parseInt(document.getElementById("harga").value) || 0;
  const jumlah = parseInt(document.getElementById("jumlah").value) || 0;
  const status = document.getElementById("status").value;

  const total = harga * jumlah;
  let diskon = 0;

  if (status === "Pelanggan") {
    diskon = total * 0.10;
  }

  const bayar = total - diskon;

  document.getElementById("total").value = total.toLocaleString("id-ID");
  document.getElementById("diskon").value = diskon.toLocaleString("id-ID");
  document.getElementById("bayar").value = bayar.toLocaleString("id-ID");
}

function resetForm() {
  document.getElementById("formPembelian").reset();
  document.getElementById("harga").value = "";
  document.getElementById("total").value = "";
  document.getElementById("diskon").value = "";
  document.getElementById("bayar").value = "";
}
