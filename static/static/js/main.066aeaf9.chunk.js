(this["webpackJsonpform-pendaftaran-pdi"]=this["webpackJsonpform-pendaftaran-pdi"]||[]).push([[0],{140:function(e){e.exports=JSON.parse('[{"id":1,"dpc":"kota denpasar"},{"id":2,"dpc":"Kabupaten Badung"},{"id":3,"dpc":"Kabupaten Tabanan"},{"id":4,"dpc":"Kabupaten Jembrana"},{"id":5,"dpc":"Kabupaten Karangasem"},{"id":6,"dpc":"Kabupaten Buleleng"},{"id":7,"dpc":"Kabupaten Bangli"},{"id":8,"dpc":"Kabupaten Gianyar"},{"id":9,"dpc":"Kabupaten Klungkung"}]')},157:function(e,a,t){},158:function(e,a,t){},159:function(e,a,t){},161:function(e,a,t){},162:function(e,a,t){},188:function(e,a,t){},189:function(e,a,t){},190:function(e,a,t){},263:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(25),l=t.n(i),c=(t(157),t(158),t(22)),o=t.p+"static/media/logopdi.0e845012.png",s=(t(159),t(3)),p=function(){return Object(s.jsxs)("nav",{className:"navbar",children:[Object(s.jsx)("img",{src:o,alt:"logo pdiperjuangan",style:{height:"70%",cursor:"pointer"},onClick:function(){window.location.href="/ "}}),Object(s.jsx)("h3",{style:{color:"white",marginLeft:"8px"},children:"PDI PERJUANGAN"})]})},d=t(28),u=t.n(d),j=t(49),h=t(38),m=t(48),b=t(32),x=t(148),g="http://localhost:8080/api",k=(t(161),t(162),t(104)),_=function(){var e=function(e){var a=e.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:a+-180,behavior:"smooth"})};return Object(s.jsxs)("div",{className:"menu_form",children:[Object(s.jsx)("div",{className:"menu_item",children:Object(s.jsx)(k.a,{to:"#data_personal",activeStyle:{color:"red"},scroll:function(a){e(a)},children:"Data Personal"})}),Object(s.jsx)("div",{className:"menu_item",children:Object(s.jsx)(k.a,{to:"#alamat",activeStyle:{color:"red"},scroll:function(a){e(a)},children:"Alamat"})}),Object(s.jsx)("div",{className:"menu_item",children:Object(s.jsx)(k.a,{to:"#data_profesi",activeStyle:{color:"red"},scroll:function(a){e(a)},children:"Riwayat Organisasi"})})]})},f=t(58),O=t.n(f),v=t.p+"static/media/potrait.3e1a113b.svg",y=function(){var e=Object(n.useState)(v),a=Object(b.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)({nama:"",tanggal_lahir:"",tempat_lahir:"",nik:"",nama_jalan:"",rt:null,rw:null,no_rumah:null,kecamatan:"",kelurahan:"",kota:"",kode_pos:"",no_telpon_1:"",no_telpon_2:"",email:"",instagram:"",facebook:"",keahlian:"",pekerjaan:"",pendidikan:"",photo:"",perekrut:"",no_kta:"",tingkat_pengurus:"",wil_rekrut_rw:2,wil_rekrut_kelurahan:""}),l=Object(b.a)(i,2),c=l[0],o=l[1],p=function(e){o(Object(m.a)(Object(m.a)({},c),{},Object(h.a)({},e.target.name,e.target.value)))},d=function(){var e=Object(j.a)(u.a.mark((function e(a){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new FileReader;case 2:return t=e.sent,e.next=5,t.readAsDataURL(a.target.files[0]);case 5:e.sent,t.onloadend=function(){r(t.result)};case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(u.a.mark((function e(a){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(c.photo),a.preventDefault(),e.next=4,new FormData;case 4:return(t=e.sent).append("nama",c.nama),t.append("tanggal_lahir",c.tanggal_lahir),t.append("tempat_lahir",c.tempat_lahir),t.append("nik",c.nik),t.append("nama_jalan",c.nama_jalan),t.append("rt",c.rt),t.append("rw",c.rw),t.append("no_rumah",c.no_rumah),t.append("kecamatan",c.kecamatan),t.append("kelurahan",c.kelurahan),t.append("kota",c.kota),t.append("kode_pos",c.kode_pos),t.append("no_telpon_1",c.no_telpon_1),t.append("no_telpon_2",c.no_telpon_2),t.append("email",c.email),t.append("instagram",c.instagram),t.append("facebook",c.facebook),t.append("keahlian",c.keahlian),t.append("pekerjaan",c.pekerjaan),t.append("pendidikan",c.pendidikan),t.append("photo",c.photo),t.append("perekrut",c.perekrut),t.append("no_kta",c.no_kta),t.append("tingkat_pengurus",c.tingkat_pengurus),t.append("wil_rekrut_rw",c.wil_rekrut_rw),t.append("wil_rekrut_kelurahan",c.wil_rekrut_kelurahan),e.next=33,O()("".concat(g,"/storeform"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},data:t}).then((function(e){201===e.status&&(x.a.open({message:"Menambahkan Daftar Baru",description:"Data baru berhasil di tambahkan.",onClick:function(){console.log("Notification Clicked!")},placement:"bottomRight"}),setTimeout((function(){window.location.href="/"}),1e3))})).catch((function(e){return console.error(e),e}));case 33:return e.abrupt("return",e.sent);case 34:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(s.jsxs)("main",{className:"form_area",children:[Object(s.jsx)(_,{}),Object(s.jsxs)("form",{className:"form_register",action:"api/storeform",encType:"multipart/form-data",method:"POST",onSubmit:k,children:[Object(s.jsx)("h1",{className:"section_title",id:"data_personal",children:"Data Personal"}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"nama",children:"nama lengkap"}),Object(s.jsx)("input",{required:!0,type:"text",placeholder:"nama lengkap",name:"nama",id:"nama",value:c.nama,onChange:function(e){p(e)}})]}),Object(s.jsxs)("div",{className:"form_group wrap",children:[Object(s.jsx)("label",{htmlFor:"tanggal_lahir",children:"tanggal lahir"}),Object(s.jsx)("input",{required:!0,type:"date",placeholder:"tanggal lahir",name:"tanggal_lahir",id:"tanggal_lahir",onChange:function(e){p(e)}}),Object(s.jsx)("label",{htmlFor:"tempat_lahir",children:"tempat lahir"}),Object(s.jsx)("input",{required:!0,type:"text",placeholder:"tempat lahir",name:"tempat_lahir",id:"tempat_lahir",value:c.tempat_lahir,onChange:function(e){p(e)}})]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"nik",children:"no NIK"}),Object(s.jsx)("input",{required:!0,type:"text",placeholder:"Nomer NIK",name:"nik",id:"nik",value:c.nik,onChange:function(e){p(e)}})]}),Object(s.jsx)("h1",{className:"section_title",id:"alamat",children:"Alamat"}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"nama_jalan",children:"Jalan / Gang / Perumahan"}),Object(s.jsx)("input",{required:!0,type:"text",placeholder:"Nama Jalan",name:"nama_jalan",id:"nama_jalan",value:c.nama_jalan,onChange:function(e){p(e)}})]}),Object(s.jsxs)("div",{className:"form_group wrap",style:{textAlign:"right",justifyContent:"flex-end"},children:[Object(s.jsx)("label",{htmlFor:"rt",children:"rt"}),Object(s.jsx)("input",{required:!0,type:"number",placeholder:"no RT",name:"rt",id:"rt",value:c.rt,onChange:function(e){p(e)}}),Object(s.jsx)("label",{htmlFor:"rw",style:{justifyContent:"center"},children:"rw"}),Object(s.jsx)("input",{required:!0,type:"number",placeholder:"no rw",name:"rw",id:"rw",value:c.rw,onChange:function(e){p(e)}}),Object(s.jsx)("label",{htmlFor:"no_rumah",style:{justifyContent:"center"},children:"no / blok"}),Object(s.jsx)("input",{required:!0,type:"number",placeholder:"no / blok rumah",name:"no_rumah",id:"no_rumah",value:c.no_rumah,onChange:function(e){p(e)}})]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"kelurahan",children:"kelurahan"}),Object(s.jsx)("input",{required:!0,type:"text",placeholder:"Kelurahan",name:"kelurahan",id:"kelurahan",value:c.kelurahan,onChange:function(e){p(e)}})]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"kecamatan",children:"kecamatan"}),Object(s.jsx)("input",{required:!0,type:"text",placeholder:"Kecamatan",name:"kecamatan",id:"kecamatan",value:c.kecamatan,onChange:function(e){p(e)}})]}),Object(s.jsxs)("div",{className:"form_group wrap",style:{textAlign:"right",justifyContent:"flex-end"},children:[Object(s.jsx)("label",{htmlFor:"kota",children:"kota"}),Object(s.jsx)("input",{required:!0,type:"text",placeholder:"Kota",name:"kota",id:"kota",value:c.kota,onChange:function(e){p(e)}}),Object(s.jsx)("label",{htmlFor:"kode_pos",style:{justifyContent:"center"},children:"kode pos"}),Object(s.jsx)("input",{required:!0,type:"number",placeholder:"kode post",name:"kode_pos",id:"kode_pos",value:c.kode_pos,onChange:function(e){p(e)}})]}),Object(s.jsxs)("div",{className:"form_group wrap",style:{textAlign:"right",justifyContent:"flex-end"},children:[Object(s.jsx)("label",{htmlFor:"no_telpon_1",children:"no telpon"}),Object(s.jsx)("input",{required:!0,type:"text",placeholder:"no handphone 1",name:"no_telpon_1",id:"no_telpon_1",value:c.no_telpon_1,onChange:function(e){p(e)}}),Object(s.jsx)("input",{type:"text",placeholder:"no handphone 2 / optional",name:"no_telpon_2",id:"no_telpon_2",value:c.no_telpon_2,onChange:function(e){p(e)}})]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"email",children:"email"}),Object(s.jsx)("input",{required:!0,type:"email",placeholder:"email",name:"email",id:"email",value:c.email,onChange:function(e){p(e)}})]}),Object(s.jsxs)("div",{className:"form_group wrap",style:{textAlign:"right",justifyContent:"flex-end"},children:[Object(s.jsx)("label",{htmlFor:"instagram",children:"Social Media"}),Object(s.jsx)("input",{required:!0,type:"text",placeholder:"@instagram",name:"instagram",id:"instagram",value:c.instagram,onChange:function(e){p(e)}}),Object(s.jsx)("input",{required:!0,type:"text",placeholder:"@facebook",name:"facebook",id:"facebook",value:c.facebook,onChange:function(e){p(e)}})]}),Object(s.jsx)("h1",{className:"section_title",id:"data_profesi",children:"Data Profesi Kemampuan Diri & Pendidikan"}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"keahlian",children:"keahlian khusus"}),Object(s.jsx)("textarea",{type:"keahlian",placeholder:"keahlian khusus",name:"keahlian",id:"keahlian",value:c.keahlian,onChange:function(e){p(e)}})]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"pekerjaan",children:"pekerjaan"}),Object(s.jsx)("input",{required:!0,type:"pekerjaan",placeholder:"pekerjaan",name:"pekerjaan",id:"pekerjaan",value:c.pekerjaan,onChange:function(e){p(e)}})]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"pendidikan",children:"pendidikan"}),Object(s.jsx)("input",{required:!0,type:"pendidikan",placeholder:"pendidikan",name:"pendidikan",id:"pendidikan",value:c.pendidikan,onChange:function(e){p(e)}})]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"photo",children:"photo"}),Object(s.jsxs)("div",{className:"image_input",children:[Object(s.jsx)("input",{accept:"image/x-png,image/jpeg,image/png,image/jpg",multiple:!1,required:!0,type:"file",placeholder:"photo",name:"photo",id:"photo",onChange:function(e){o(Object(m.a)(Object(m.a)({},c),{},{photo:e.target.files[0]})),d(e)}}),Object(s.jsx)("img",{className:"image_preview",src:t,alt:"",style:{flex:"1",maxHeight:"300px",objectFit:"contain"}})]})]}),Object(s.jsx)("h1",{className:"section_title",id:"data_rekrutment",children:"Data Rekrutment"}),Object(s.jsx)("i",{children:"Diisi Oleh Petugas Partai"}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"perekrut",children:"di rekrut oleh"}),Object(s.jsx)("input",{required:!0,type:"text",placeholder:"Nama Lengkap Perekrut",name:"perekrut",id:"perekrut",value:c.perekrut,onChange:function(e){p(e)}})]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"no_kta",children:"no KTA"}),Object(s.jsx)("input",{required:!0,type:"text",placeholder:"Nomer Kartu Anggota",name:"no_kta",id:"no_kta",value:c.no_kta,onChange:function(e){p(e)}})]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"tingkat_pengurus",children:"tingkat pengurus"}),Object(s.jsx)("input",{required:!0,type:"text",placeholder:"Tingkat Pengurus",name:"tingkat_pengurus",id:"tingkat_pengurus",value:c.tingkat_pengurus,onChange:function(e){p(e)}})]}),Object(s.jsxs)("div",{className:"form_group wrap",style:{textAlign:"right",justifyContent:"flex-end"},children:[Object(s.jsx)("label",{htmlFor:"wil_rekrut_rw",style:{flex:"1"},children:"Wilayah Perekrut"}),Object(s.jsx)("input",{style:{flex:".5"},required:!0,type:"number",placeholder:"RW",name:"wil_rekrut_rw",id:"wil_rekrut_rw",value:c.wil_rekrut_rw,onChange:function(e){p(e)}}),Object(s.jsx)("input",{style:{flex:"1"},type:"text",placeholder:"Kelurahan",name:"wil_rekrut_kelurahan",id:"wil_rekrut_kelurahan",value:c.wil_rekrut_kelurahan,onChange:function(e){p(e)}})]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("button",{className:"submit_button",type:"submit",children:"submit"}),Object(s.jsx)("button",{className:"submit_button cancel",onClick:function(){window.location.href="/"},children:"cancel"})]})]})]})},w=(t(188),t(149)),C=t(266),N=function(e){var a=e.data,t=e.action,r=e.dpc,i=Object(n.useState)(""),l=Object(b.a)(i,2),c=l[0],o=l[1];return Object(n.useEffect)((function(){return function(e){var a=new FileReader;a.onload=function(){o(a.result)},a.readAsDataURL(e)}(a.photo),w.b.warning("Mohon Periksa Kembali Data Anda Sebelum Submit"),function(){}}),[]),Object(s.jsxs)("div",{style:{position:"fixed",backgroundColor:"white",width:"100vw",height:"100vh",top:"0",left:"0",paddingTop:"200px",paddingLeft:"80px",paddingRight:"80px"},children:[Object(s.jsxs)(C.b,{title:Object(s.jsx)("h1",{children:"Form Pendaftaran Kader DPC PDI Perjuangan ".concat(r.toUpperCase().replace("-"," "))}),bordered:!0,children:[Object(s.jsx)(C.b.Item,{label:"nama",children:a.nama}),Object(s.jsx)(C.b.Item,{label:"photo",children:Object(s.jsx)("img",{src:c,alt:"",width:80})}),Object(s.jsx)(C.b.Item,{label:"kabupaten_kota",children:a.kabupaten_kota}),Object(s.jsx)(C.b.Item,{label:"alamat",children:a.alamat}),Object(s.jsx)(C.b.Item,{label:"provinsi",children:a.provinsi}),Object(s.jsx)(C.b.Item,{label:"kelurahan",children:a.kelurahan}),Object(s.jsx)(C.b.Item,{label:"kecamatan",children:a.kecamatan}),Object(s.jsx)(C.b.Item,{label:"kode_pos",children:a.kode_pos}),Object(s.jsx)(C.b.Item,{label:"telp_rumah",children:a.telp_rumah}),Object(s.jsx)(C.b.Item,{label:"telp_kantor",children:a.telp_kantor}),Object(s.jsx)(C.b.Item,{label:"telp_hp",children:a.telp_hp}),Object(s.jsx)(C.b.Item,{label:"email",children:a.email}),Object(s.jsx)(C.b.Item,{label:"tempat_lahir",children:a.tempat_lahir}),Object(s.jsx)(C.b.Item,{label:"tanggal_lahir",children:a.tanggal_lahir}),Object(s.jsx)(C.b.Item,{label:"agama",children:a.agama}),Object(s.jsx)(C.b.Item,{label:"status",children:a.status}),Object(s.jsx)(C.b.Item,{label:"jenis_kelamin",children:a.jenis_kelamin}),Object(s.jsx)(C.b.Item,{label:"pendidikan_terakhir",children:a.pendidikan_terakhir}),Object(s.jsx)(C.b.Item,{label:"riwayat_pekerjaan",children:a.riwayat_pekerjaan})]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("button",{className:"submit_button",type:"button",onClick:function(){t.handleSubmit()},children:"submit"}),Object(s.jsx)("button",{className:"submit_button cancel",onClick:function(){t.setModal(!1)},children:"kembali"})]})]})},F=function(){var e,a,t=Object(n.useState)(!1),r=Object(b.a)(t,2),i=r[0],l=r[1],o=Object(n.useState)(v),p=Object(b.a)(o,2),d=p[0],k=p[1],f=Object(c.g)(),y=(f.kota,f.dpc),w=Object(n.useState)({nama:"",photo:"",provinsi:"",kabupaten_kota:"",alamat:"",kelurahan:"",kecamatan:"",kode_pos:"",telp_rumah:"",telp_kantor:"",telp_hp:"",email:"",tempat_lahir:"",tanggal_lahir:"",agama:"",status:"menikah",jenis_kelamin:"pria",riwayat_partai:"",riwayat_pdip:"",pendidikan_terakhir:"",pendidikan_informal:"",riwayat_pekerjaan:"",informasi_lain:""}),C=Object(b.a)(w,2),F=C[0],q=C[1],I=function(e){q(Object(m.a)(Object(m.a)({},F),{},Object(h.a)({},e.target.name,e.target.value)))},A=function(){var e=Object(j.a)(u.a.mark((function e(a){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new FileReader;case 2:return t=e.sent,e.next=5,t.readAsDataURL(a.target.files[0]);case 5:e.sent,t.onloadend=function(){k(t.result)};case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),P=function(){var e=Object(j.a)(u.a.mark((function e(a){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(F.photo),e.next=3,new FormData;case 3:return(t=e.sent).append("nama",F.nama),t.append("photo",F.photo),t.append("kabupaten_kota",F.kabupaten_kota),t.append("alamat",F.alamat),t.append("provinsi",F.provinsi),t.append("kelurahan",F.kelurahan),t.append("kecamatan",F.kecamatan),t.append("kode_pos",F.kode_pos),t.append("telp_rumah",F.telp_rumah),t.append("telp_kantor",F.telp_kantor),t.append("telp_hp",F.telp_hp),t.append("email",F.email),t.append("tempat_lahir",F.tempat_lahir),t.append("tanggal_lahir",F.tanggal_lahir),t.append("agama",F.agama),t.append("status",F.status),t.append("jenis_kelamin",F.jenis_kelamin),t.append("riwayat_partai",F.riwayat_partai),t.append("riwayat_pdip",F.riwayat_pdip),t.append("pendidikan_terakhir",F.pendidikan_terakhir),t.append("pendidikan_informal",F.pendidikan_informal),t.append("riwayat_pekerjaan",F.riwayat_pekerjaan),t.append("informasi_lain",F.informasi_lain),e.next=29,O()("".concat(g,"/storeform/").concat(y.toLowerCase()),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},data:t}).then((function(e){201===e.status&&(x.a.open({message:"Menambahkan Daftar Baru",description:"Data baru berhasil di tambahkan.",onClick:function(){console.log("Notification Clicked!")},placement:"topRight"}),console.log(e.data),setTimeout((function(){window.location.href="/".concat(y)}),1e3))})).catch((function(e){return console.error(e),e}));case 29:return e.abrupt("return",e.sent);case 30:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(s.jsxs)("main",{className:"form_area",children:[Object(s.jsx)(_,{}),i&&Object(s.jsx)(N,{data:F,action:{handleSubmit:P,setModal:l},dpc:y}),Object(s.jsxs)("form",{className:"form_register",action:"api/storeform",encType:"multipart/form-data",method:"POST",children:[Object(s.jsxs)("h1",{className:"section_title",id:"data_personal",children:["Form Pendaftaran Kader PDI Perjuangan DPC ",Object(s.jsxs)("span",{style:{textTransform:"capitalize"},children:[" ",y&&y.replace("-"," ")," "]})]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"nama",children:"nama lengkap"}),Object(s.jsx)("input",{required:!0,type:"text",placeholder:"nama lengkap",name:"nama",id:"nama",value:F.nama,onChange:function(e){I(e)}})]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"photo",children:"foto diri"}),Object(s.jsxs)("div",{className:"image_input",children:[Object(s.jsx)("input",{accept:"image/x-png,image/jpeg,image/png,image/jpg",multiple:!1,required:!0,type:"file",placeholder:"photo",name:"photo",id:"photo",onChange:function(e){q(Object(m.a)(Object(m.a)({},F),{},{photo:e.target.files[0]})),A(e)}}),Object(s.jsx)("img",{className:"image_preview",src:d,alt:"",style:{flex:"1",maxHeight:"300px",objectFit:"contain"}})]})]}),Object(s.jsx)("h1",{className:"section_title",id:"alamat",children:"Alamat"}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"alamat",children:"Alamat Lengkap"}),Object(s.jsx)("textarea",{rows:4,required:!0,placeholder:"Alamat Lengkap",name:"alamat",id:"alamat",value:F.alamat,onChange:function(e){I(e)}})]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"provinsi",children:"provinsi"}),Object(s.jsx)("input",{required:!0,placeholder:"provinsi",name:"provinsi",id:"provinsi",value:F.provinsi,onChange:function(e){I(e)}})]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"kelurahan",children:"kelurahan"}),Object(s.jsx)("input",{required:!0,type:"text",placeholder:"Kelurahan",name:"kelurahan",id:"kelurahan",value:F.kelurahan,onChange:function(e){I(e)}})]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"kecamatan",children:"kecamatan"}),Object(s.jsx)("input",{required:!0,type:"text",placeholder:"Kecamatan",name:"kecamatan",id:"kecamatan",value:F.kecamatan,onChange:function(e){I(e)}})]}),Object(s.jsxs)("div",{className:"form_group wrap",style:{textAlign:"right",justifyContent:"flex-end"},children:[Object(s.jsx)("label",{htmlFor:"kabupaten_kota",children:"Kabupaten / Kota"}),Object(s.jsx)("input",{required:!0,type:"text",placeholder:"kabupaten_kota",name:"kabupaten_kota",id:"kabupaten_kota",value:F.kabupaten_kota,onChange:function(e){I(e)}}),Object(s.jsx)("label",{htmlFor:"kode_pos",style:{justifyContent:"center"},children:"kode pos"}),Object(s.jsx)("input",{required:!0,type:"number",placeholder:"kode pos",name:"kode_pos",id:"kode_pos",value:F.kode_pos,onChange:function(e){I(e)}})]}),Object(s.jsxs)("div",{className:"form_group wrap",style:{textAlign:"right",justifyContent:"flex-end"},children:[Object(s.jsx)("label",{htmlFor:"telp_rumah",children:"no telpon"}),Object(s.jsx)("input",{type:"text",placeholder:"handphone",name:"telp_hp",id:"telp_hp",value:F.telp_hp,onChange:function(e){I(e)}}),Object(s.jsx)("input",{type:"text",placeholder:"telepon rumah",name:"telp_rumah",id:"telp_rumah",value:F.telp_rumah,onChange:function(e){I(e)}}),Object(s.jsx)("input",{type:"text",placeholder:"telepon kantor",name:"telp_kantor",id:"telp_kantor",value:F.telp_kantor,onChange:function(e){I(e)}})]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"email",children:"email"}),Object(s.jsx)("input",{required:!0,type:"email",placeholder:"email",name:"email",id:"email",value:F.email,onChange:function(e){I(e)}})]}),Object(s.jsxs)("div",{className:"form_group wrap",children:[Object(s.jsx)("label",{htmlFor:"tempat_lahir",children:"tempat lahir"}),Object(s.jsx)("input",{required:!0,type:"text",placeholder:"tempat lahir",name:"tempat_lahir",id:"tempat_lahir",value:F.tempat_lahir,onChange:function(e){I(e)}}),Object(s.jsx)("label",{htmlFor:"tanggal_lahir",style:{justifyContent:"center"},children:"tanggal lahir"}),Object(s.jsx)("input",{required:!0,type:"date",placeholder:"tanggal lahir",name:"tanggal_lahir",id:"tanggal_lahir",onChange:function(e){I(e)}})]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"agama",children:"agama"}),Object(s.jsx)("input",{required:!0,type:"text",placeholder:"agama",name:"agama",id:"agama",value:F.agama,onChange:function(e){I(e)}})]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"status",children:"status"}),Object(s.jsxs)("select",(e={style:{width:"100%",height:"35px",padding:"0 8px"},value:F.status,required:!0,placeholder:"status",name:"status",id:"status"},Object(h.a)(e,"value",F.status),Object(h.a)(e,"onChange",(function(e){I(e)})),Object(h.a)(e,"children",[Object(s.jsx)("option",{value:"menikah",children:"menikah"}),Object(s.jsx)("option",{value:"single",children:"single"})]),e))]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"jenis_kelamin",children:"jenis kelamin"}),Object(s.jsxs)("select",(a={style:{width:"100%",height:"35px",padding:"0 8px"},required:!0,value:F.jenis_kelamin,placeholder:"jenis_kelamin",name:"jenis_kelamin",id:"jenis_kelamin"},Object(h.a)(a,"value",F.jenis_kelamin),Object(h.a)(a,"onChange",(function(e){I(e)})),Object(h.a)(a,"children",[Object(s.jsx)("option",{value:"pria",children:"pria"}),Object(s.jsx)("option",{value:"wanita",children:"wanita"})]),a))]}),Object(s.jsx)("h1",{className:"section_title",id:"data_profesi",children:"Riwayat Organisasi Kepartaian"}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"riwayat_partai",children:"sebelum masuk PDI Perjuangan"}),Object(s.jsx)("textarea",{rows:4,placeholder:"1. ....\n2. ....\n3. ....\n            ",name:"riwayat_partai",id:"riwayat_partai",value:F.riwayat_partai,onChange:function(e){I(e)}})]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"riwayat_pdip",children:"PDI Perjuangan"}),Object(s.jsx)("textarea",{rows:4,placeholder:"1. ....\n2. ....\n3. ....\n            ",name:"riwayat_pdip",id:"riwayat_pdip",value:F.riwayat_pdip,onChange:function(e){I(e)}})]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"pendidikan_terakhir",children:"pendidikan terakhir"}),Object(s.jsx)("input",{required:!0,type:"text",placeholder:"pendidikan_terakhir",name:"pendidikan_terakhir",id:"pendidikan_terakhir",value:F.pendidikan_terakhir,onChange:function(e){I(e)}})]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"pendidikan_informal",children:"pendidikan informal"}),Object(s.jsx)("textarea",{rows:4,required:!0,placeholder:"1. ...\n2. ...\n3. ...\n          ",name:"pendidikan_informal",id:"pendidikan_informal",value:F.pendidikan_informal,onChange:function(e){I(e)}})]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"riwayat_pekerjaan",children:"riwayat pekerjaan"}),Object(s.jsx)("textarea",{rows:4,required:!0,placeholder:"1. ...\n2. ...\n3. ...\n            ",name:"riwayat_pekerjaan",id:"riwayat_pekerjaan",value:F.riwayat_pekerjaan,onChange:function(e){I(e)}})]}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("label",{htmlFor:"informasi_lain",children:"informasi lainnya"}),Object(s.jsx)("textarea",{rows:4,placeholder:"",name:"informasi_lain",id:"informasi_lain",value:F.informasi_lain,onChange:function(e){I(e)}})]}),Object(s.jsx)("div",{className:"form_group",children:Object(s.jsxs)("p",{children:["Demikian biodata ini saya buat dengan sebenarnya, untuk dapat dipergunakan sebagaimana mestinya."," "]})}),Object(s.jsxs)("div",{className:"form_group",children:[Object(s.jsx)("button",{className:"submit_button",type:"button",onClick:function(){l(!0)},children:"submit"}),Object(s.jsx)("button",{className:"submit_button cancel",onClick:function(){window.location.href="/"},children:"cancel"})]})]})]})},q=(t.p,t(83)),I=t(63),A=t(31),P=(t(189),t(140)),D=q.a.Option,K=function(){var e=Object(c.g)(),a=e.dpc,t=e.kota,r=Object(n.useState)("kota-denpasar"),i=Object(b.a)(r,2),l=i[0],o=i[1];return Object(s.jsxs)("main",{className:"home",children:[Object(s.jsx)("h3",{children:"FORM PENDAFTARAN ANGGOTA BARU"}),Object(s.jsxs)("h1",{children:[" DPC PDI PERJUANGAN ",t.toUpperCase()]}),Object(s.jsxs)("h3",{children:[Object(s.jsx)("br",{})," MASA BAKTI 2020 - 2025"]}),Object(s.jsxs)("div",{className:"selectArea",style:{display:"flex",alignItems:"center",gap:"20px",marginTop:"40px"},children:[Object(s.jsx)(q.a,{defaultValue:a,style:{width:"250px"},size:"large",onChange:function(e){console.log(e),o(e)},children:P.map((function(e){return Object(s.jsx)(D,{value:e.dpc.replace(" ","-"),children:e.dpc.toUpperCase()},e.id)}))}),Object(s.jsx)(A.b,{to:"/form-pendaftaran/".concat(l),children:Object(s.jsx)(I.a,{style:{width:"200px"},size:"large",children:"DAFTAR"})})]})]})},T=(t(190),t(265));function S(){return(S=Object(j.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()("".concat(g,"/getalldata"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},data:{filter:{dpc:a}}}).then((function(e){return e.data.data})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return(R=Object(j.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()("".concat(g,"/deleteRegistration"),{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json"},data:{filter:a}}).then((function(e){return e})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=function(){var e=Object(n.useState)([]),a=Object(b.a)(e,2),t=a[0],r=a[1],i=Object(c.g)("dpc").dpc;Object(n.useEffect)((function(){return function(e){return S.apply(this,arguments)}(i).then((function(e){console.log(e),r(e)})).catch((function(e){console.error(e)})),function(){}}),[]);var l=function(e){(function(e){return R.apply(this,arguments)})(e).then((function(e){console.log(e),window.location.reload()})).catch((function(e){console.error(e)}))},o=[{title:"nama",dataIndex:"nama",key:"nama"},{title:"alamat",dataIndex:"alamat",key:"alamat"},{title:"email",dataIndex:"email",key:"email"},{title:"handphone",dataIndex:"telp_hp",key:"telp_hp"},{title:"alamat",dataIndex:"alamat",key:"alamat"},{title:"provinsi",dataIndex:"provinsi",key:"provinsi"},{title:"approval",dataIndex:"approval",key:"approval",render:function(e){return Object(s.jsx)("div",{children:e?Object(s.jsx)("span",{style:{color:"green"},children:"approved"}):Object(s.jsx)("span",{style:{color:"orange"},children:"waiting"})})}},{title:"action",render:function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("button",{children:"approve"}),Object(s.jsx)("button",{onClick:function(){l({id:e.id,token:"fadliselaz",dpc:i})},children:"reject"})]})}}];return Object(s.jsx)("main",{className:"page_dataKader",children:Object(s.jsx)(T.a,{dataSource:t,columns:o})})};var B=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(p,{}),Object(s.jsxs)(c.d,{children:[Object(s.jsx)(c.b,{path:"/dashboard/:dpc",component:L}),Object(s.jsx)(c.b,{path:"/formpendaftaran",component:y}),Object(s.jsx)(c.b,{path:"/form-pendaftaran/:dpc",component:F}),Object(s.jsx)(c.b,{path:"/:kota/:dpc",component:K}),Object(s.jsx)(c.b,{path:"/",children:Object(s.jsx)(c.a,{to:"/bali/kota-denpasar"})})]})]})},E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,267)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,i=a.getLCP,l=a.getTTFB;t(e),n(e),r(e),i(e),l(e)}))};l.a.hydrate(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(A.a,{children:Object(s.jsx)(B,{})})}),document.getElementById("root")),E()}},[[263,1,2]]]);
//# sourceMappingURL=main.066aeaf9.chunk.js.map