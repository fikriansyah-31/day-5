function submitData(){
  let name = document.getElementById('input-name').value
  let email = document.getElementById('input-email').value
  let phone = document.getElementById('input-phone').value
  let subject = document.getElementById('input-subject').value
  let message = document.getElementById('input-message').value

  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(subject);
  console.log(message);

  // kondisi pengisian form

  if (name == ''){
      return alert("Nama wajib diisi")
  } else if (email == ''){
      return alert("Email wajib diisi")
  } else if (phone == ''){
      return alert("Phone wajib diisi")
  } else if (subject == ''){
      return alert("Subject wajib diisi")
  } else if (message == ''){
      return alert("Message wajib diisi")
  } 

  let a = document.createElement('a') //pembuatan tag anchor /a


  //     a.href = `mailto:${emailReceiver}?subject=Test Subject&body=Hallo my name` //buat tes
  a.href = `mailto:${email}?subject=${subject} &body=Hallo my name ${name} ${message} Please call me ${phone}`
  

  a.click() // menjalankan tag ancor / mengklik tag anchor


  let dataObject ={
      name: name,  //properti(name:) variable(name)
      email: email,
      phone: phone,
      subject: subject,
      message: message
  }
  console.log(dataObject);
  window.location.reload();
}