import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CerbungService {

  cerbungs = [
    {
      id:0,
      judul: "Kisah Kasih di Selokan",
      author: "Juan Marcelino",
      date: "18/Juli/2023",
      url: "https://cdn1-production-images-kly.akamaized.net/Y8prieD143r-HSNmoxQEqJ6An3E=/843x0:4209x3366/1200x1200/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3023992/original/040840000_1579165718-close-up-photo-of-people-holding-hands-2571193.jpg",
      genre:"Romance",
      like: "4",
      paragraf: "1",
      deskripsi: "Kisah Kasih yang romance",
      akses:"public",
      paragrafs:[
        "Kisah kasih di selokan memang indah sekaligus menyeramkan."
      ]
    },
    {
      id:1,
      judul: "Jamet Bon 008",
      author: "Frederico Manuel",
      date: "18/April/2023",
      url: "https://static.republika.co.id/uploads/images/inpicture_slide/pria-bersenjata-ilustrasi-_131105204419-607.jpg",
      genre:"Action",
      like: "4",
      paragraf: "2",
      deskripsi: "Kisah keren Jamet Bon",
      akses:"public",
      paragrafs:[
        "Jamet Bon adalah pemuda yang biasa saja sampai bertemu dengan Lord Yahon.",
        "Kisah bla bla bla."
      ]
    },
    {
      id:2,
      judul: "Si Buta Dari Gua Manusia",
      author: "Muhammad Arryan",
      date: "18/Oktober/2023",
      url: "https://media.istockphoto.com/id/641236218/id/foto/gua-rahasia.jpg?s=612x612&w=0&k=20&c=WfaRDav4f5jPGIIR4JKLVFtjuCQJkGKAlx9tARWpw5I=",
      genre:"Horror",
      like: "4",
      paragraf: "2",
      deskripsi: "Kisah Horror Gua Hantu",
      akses:"public",
      paragrafs:[
        "Kisah Si Buta Dari Gua Hantu ini sangat menyeramkan.",
        "Kisah Si Buta Dari Gua Hantu ini sangat menyeramkan sekali."
      ]
    },
  ];
  
  constructor() { }
/*   addCerbung(c_judul: string, c_author: string, c_date: string, c_url: string, c_genre: string, c_like: string, c_paragraf: string, c_desc: string, c_paragrafs: string[]){
    const newId = this.cerbungs.length ? this.cerbungs[this.cerbungs.length - 1].id + 1 : 1;
    this.cerbungs.push({
      id : newId,
      judul : c_judul,
      author : c_author,
      date : c_date,
      url : c_url,
      genre : c_genre,
      like : c_like,
      paragraf : c_paragraf,
      deskripsi : c_desc,
      paragrafs:c_paragrafs
    })
  }  */

    // Step 1: Add the initial details of the cerbung
    addCerbungDetails(c_judul: string, c_author: string, c_date: string, c_url: string, c_genre: string, c_like: string, c_paragraf: string,c_desc: string): number {
      const newId = this.cerbungs.length ? this.cerbungs[this.cerbungs.length - 1].id + 1 : 1;
      this.cerbungs.push({
        id: newId,
        judul: c_judul,
        author: c_author,
        date: c_date,
        url: c_url,
        genre: c_genre,
        like: c_like,
        paragraf: c_paragraf,
        deskripsi: c_desc,
        akses:"",
        paragrafs: [] // Initially, paragrafs will be empty
      });
      return newId; // Return the newId so that you know which cerbung to update in the next step
    }
  
    // Step 2: Add paragraphs to the cerbung
    addCerbungParagraphs(id: number, c_paragrafs: string[], c_akses:string) {
      const cerbung = this.cerbungs.find(c => c.id === id)
      if (cerbung) {
        cerbung.akses = c_akses
        cerbung.paragrafs = c_paragrafs
      }
    

  }
}
