
const endpoint_url = 'https://51018013.p-web.click/gotravela/api/artikel/artikeldetails/';

function getartikel(artikel_id){
fetch(endpoint_url +"?id="+ artikel_id )
 .then(status)
 .then(json)
 .then(function(data) {
  var artikel= "";
  var tanggal= "";
  var judulartikel= "";
  data.artikel.forEach(function(art){

  artikel += `
  <h3 id="info">Informasi Lainnya</h3>
 <table border="1">

    <tr>
       <th>Kota</th>
       <td>${art.namakota}</td>
    </tr>
    <tr>
       <th>alamat</th>
       <td><a href="https://www.google.co.id/maps/place/${art.alamat}" target="blank">${art.alamat}</a></td>
    </tr>
       <tr>
       <th>Jam operasional</th>
       <td>${art.jamoperasional}</td>
    </tr>
    <tr>
    <th>harga tiket</th>
    <td>${art.harga}</td>
 </tr>
 <tr>
 <th>Sumber artikel</th>
 <td><a href="${art.sumber}">${art.sumber}</a></td>
</tr>

</table>


`;
tanggal +=`Diposting pada tanggal ${art.tanggal}`;
judulartikel +=`${art.judulartikel}`;
});
      document.getElementById("informasi").innerHTML = artikel;
      document.getElementById("tanggal").innerHTML = tanggal;
      document.getElementById("judul").innerHTML = judulartikel;
})

  .catch(error);

}
