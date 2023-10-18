import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CerbungService {

  cerbungs = [
    {
      idcerita: 1,
      judul: "Kisah Kasih di Selokan",
      author: "Juan Marcelino",
      date: "18/Juli/2023",
      url: "https://cdn1-production-images-kly.akamaized.net/Y8prieD143r-HSNmoxQEqJ6An3E=/843x0:4209x3366/1200x1200/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3023992/original/040840000_1579165718-close-up-photo-of-people-holding-hands-2571193.jpg",
      genre:"Romance",
      like: "4",
      paragraf: "2",
      deskripsi: "Kisah Kasih yang romance"
    },
    {
      idcerita: 2,
      judul: "Jamet Bon 008",
      author: "Frederico Manuel",
      date: "18/April/2023",
      url: "https://static.republika.co.id/uploads/images/inpicture_slide/pria-bersenjata-ilustrasi-_131105204419-607.jpg",
      genre:"Action",
      like: "4",
      paragraf: "1",
      deskripsi: "Kisah keren Jamet Bon"
    },
    {
      idcerita: 3,
      judul: "Si Buta Dari Gua Manusia",
      author: "Muhammad Arryan",
      date: "18/Oktober/2023",
      url: "https://media.istockphoto.com/id/641236218/id/foto/gua-rahasia.jpg?s=612x612&w=0&k=20&c=WfaRDav4f5jPGIIR4JKLVFtjuCQJkGKAlx9tARWpw5I=",
      genre:"Horror",
      like: "4",
      paragraf: "2",
      deskripsi: "Kisah Horror Gua Hantu"
    },
  ];
  paragrafs =[
    {
      id: 1,
      judulcerbung: "Si Buta Dari Gua Manusia",
      authorparagraf: "Muhammad Arryan",
      tanggaltambah: "18/Oktober/2023",
      content: "Kisah Si Buta Dari Gua Hantu ini sangat menyeramkan."
    },
    {
      id: 2,
      judulcerbung: "Si Buta Dari Gua Manusia",
      authorparagraf: "Juan Marcelino ",
      tanggaltambah: "19/Oktober/2023",
      content: "Kisah Si Buta Dari Gua Hantu ini sangat menyeramkan sekali."
    },
    {
      id: 3,
      judulcerbung: "Kisah Kasih di Selokan",
      authorparagraf: "Juan Marcelino",
      tanggaltambah: "18/Juli/2023",
      content: "Kisah kasih di selokan memang mengasyikkan."
    },
    {
      id: 4,
      judulcerbung: "Kisah Kasih di Selokan",
      authorparagraf: "Frederico Manuel",
      tanggaltambah: "20/Juli/2023",
      content: "Kisah bla bla bla."
    },
    {
      idcerita: 5,
      judulcerbung: "Jamet Bon 008",
      authorparagraf: "Frederico Manuel",
      tanggaltambah: "18/Oktober/2023",
      content: "Jamet Bon adalah pemuda yang biasa saja sampai bertemu dengan Lord Yahon"
    }
  ]
  constructor() { }

}
