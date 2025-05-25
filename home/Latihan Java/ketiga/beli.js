function hitungTotal(form) {
    var nama = form.inama.value;
    var tujuan = form.itujuan.value;
    var pelajar = form.imember.value;
    var jumlah = form.ijumlah.value;
    var ht = 0.0;
    var sub = 0.0;
    var diskon = 0.0;
    var total = 0.0;

    if (tujuan == "Jakarta") {
        ht = 350000;
    }
    else if (tujuan == "Bandung") {
        ht = 270000;
    }
    else if (tujuan == "Bekasi") {
        ht = 280000;
    }
    else if (tujuan == "Depok") {
        ht = 240000;
    }
    else if (tujuan == "Semarang") {
        ht = 210000;
    }
    else {
        ht = 200000;
    }

    sub = jumlah * ht;

    if (pelajar == "Ya") {
        diskon = 0.05 * sub;
    }
    else {
        diskon = 0.0;
    }

    total = sub - diskon;

    // outputkan dulu le
    form.harga.value = ht;
    form.subtotal.value = sub;
    form.diskon.value = diskon;
    form.total.value = total;
    form.onama.value = nama;
    form.otujuan.value = tujuan;
    form.ojumlah.value = jumlah;
    form.opelajar.value = pelajar;
    form.oharga.value = ht;
    form.osubtotal.value = sub;
    form.odiskon.value = diskon;
    form.ototal.value = total;
}

function hitungtotal() {
    var nama = (document.fform.inama.value);
    var tujuan = (document.fform.itujuan.value);
    var member = (document.fform.imember.value);
    var jumlahtiket = parseFloat(document.fform.ijumlah.value);
    var ht = 0.0;
    var sub = 0.0;
    var diskon = 0.0;
    var total = 0.0;
    document.fform.otiket.value = eval(ht);
    document.fform.osub.value = eval(sub);
    document.fform.odiskon.value = eval(diskon);
    document.fform.ototal.value = eval(total);
    document.fform.onama.value = nama;
    document.fform.otujuan.value = tujuan;
    document.fform.ojumlah.value = jumlahtiket;
    document.fform.omember.value = member;
    document.fform.ottl.value = ttl;

} 