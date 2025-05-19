const password= document.getElementById('password');// membuat variabel password //
const background= document.getElementById('background'); // membuat variabel background //

password.addEventListener('input',(e)=>{ //
	const input = e.target.value; // membuat variabel input//
	const length= input.length; // membuat variabel length//
	const blurValue= 20 - length * 2 // membuat variabel blurvalue//
	background.style.filter=`blur(${blurValue}px)`;// membuat gambarnya dapat diblur ketika password dalam banyak huruf//
}) 

Swal.fire({ //membuat popup//
  title: "Janette Jacqueline Huang", //membuat scenario judul nama//
  text: "Sapere aude-Beranilah untuk bijaksana. Sir jumpscare banget mirip Tung Tung Tung Sahur", //membuat scenario quotes dan roasting//
  imageUrl: "Jacqueline.jpg", //membuat muncul gambar foto dalam popup//
  imageWidth: 400,//membuat kelebaran pada gambar//
  imageheight: 200,//membuat panjang atau pendek pada gambar// 
  confirmButtonText:"Tutup",//muncul button tutup pada popup//
  showCloseButton: true, //muncul tampilan ketika menjalankan//
});