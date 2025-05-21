function proses() {
  const produkHarga = {
    "Laptop": 8000000,
    "PC": 10000000,
    "Mini": 7300000,
    "Monitor": 2700000,
    "Speaker": 1500000
  };

  const layananHarga = {
    "Flex": 350000,
    "DP": 200000,
    "ARGB": 130000
  };

  const produk = document.getElementById("produkKomputer").value;
  const layananChecked = document.querySelectorAll(".layanan:checked");
  const metode = document.querySelector('input[name="pembayaran"]:checked').value;

  let harga = produkHarga[produk];
  let tambahan = 0;

  layananChecked.forEach(item => {
    tambahan += layananHarga[item.value];
  });

  let subtotal = harga + tambahan;
  let diskonBunga = 0;
  let total = subtotal;

  if (metode === "Tunai") {
    diskonBunga = subtotal * 0.10;
    total -= diskonBunga;
  } else {
    diskonBunga = subtotal * 0.15;
    total += diskonBunga;
  }

  document.getElementById("harga").value = "Rp" + subtotal.toLocaleString("id-ID");
  document.getElementById("diskonBunga").value = "Rp" + diskonBunga.toLocaleString("id-ID");
  document.getElementById("total").value = "Rp" + total.toLocaleString("id-ID");
}
