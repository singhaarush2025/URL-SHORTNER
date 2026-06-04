//shorten url

function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

let submit = document.querySelector(".submit");
let searchInput = document.querySelector(".search");

submit.addEventListener("click", () => {
  let inputURL = searchInput.value.trim();
if (!inputURL) {
    alert("Please enter a URL!"); 
    return;
  }
 if (!isValidURL(inputURL)) {
    alert("Please enter a valid URL (e.g. https://google.com)"); 
    return;
  }
 console.log("Valid URL:", inputURL);
  const submiti=document.querySelector(".submit");
const tbody=document.querySelector(".table-body")


submiti.addEventListener("click",()=>{
  const ogURL=document.querySelector(".search").value;
  const shortURL = "https://sl.ink/" + Math.random().toString(36).slice(2, 7);
  const date=new Date();
 const row=document.createElement("tr");
 row.innerHTML=`<td>${ogURL}</td> 
                <td>${shortURL}</td>
                <td><p>0</p></td>
                <td>${date.toLocaleDateString()}</td>
                <td> <i class="fa-solid fa-qrcode"></td>
                <td><i class="fa-solid fa-copy"></i></td>`;

 tbody.append(row);
});

});


//copy
const cpy = document.querySelector(".copy");
const textBox = document.querySelector(".output");

cpy.addEventListener("click", () => {
  navigator.clipboard.writeText(textBox.value)
    
});

//QR
let qr_code=document.querySelector(".QR");

qr_code.addEventListener("click",()=>{
  let shortURL=document.querySelector(".output").value;
  QRCode.toDataURL(`${shortURL}`).then(dataUrl=>{
     let tab = window.open();
    tab.document.write(`<img src="${dataUrl}">`);
  })

})



