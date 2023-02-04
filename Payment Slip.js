
function input_border_assigner(flag) {

  if (flag == 1) {
    document.getElementById("find_food").style.borderTopStyle = 'none';
    document.getElementById("find_food").style.borderBottomStyle = 'groove';
    document.getElementById("find_food").style.borderRightStyle = 'none';
    document.getElementById("find_food").style.borderLeftStyle = 'none';
  }
  else {
    document.getElementById("find_food").style.borderTopStyle = 'none';
    document.getElementById("find_food").style.borderBottomStyle = 'none';
    document.getElementById("find_food").style.borderRightStyle = 'none';
    document.getElementById("find_food").style.borderLeftStyle = 'none';
  }
}

function pageScroller() {

  var navbarClassName = document.getElementsByClassName("navbar navbar-expand-lg fixed-top navbar-light");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbarClassName[0].style.backgroundColor = "white";
  }
  else
    navbarClassName[0].style.backgroundColor = "transparent";
}

// function whiteNavbar() {
//   var navbarClassName = document.getElementsByClassName("navbar navbar-expand-lg fixed-top navbar-light");
//   navbarClassName[0].style.backgroundColor = "white";
// }

function validationOfButton(){

  if(document.getElementById('find_food').value == "")
      alert("Enter Pincode");
          else if(document.getElementById('find_food').value != "411005")
              alert('Mariyaan Restaurant provides services only in the area defined by pincode 411005');
                  else
                      window.location.href = "food-items.html";
                      // location.replace("foot-items.html");
}



// function validation() {
//   if (document.getElementById('Product-Name').value == "")
//     alert("Choose Product");
//   else if (document.getElementById('Rate-per-price').value == "")
//     alert("Product's Price not found");
//   else if (isNaN(document.getElementById('Rate-per-price').value))
//     alert("Product's Price is not valid");
//   else if (document.getElementById('Qty').value == "")
//     alert("Enter Product's quantity");
//   else if (isNaN(document.getElementById('Qty').value))
//     alert("Product's quantity is not valid");
//   else if (document.getElementById('Qty').value == "")
//     alert('Bill not generated');
//   else if (isNaN(document.getElementById('Qty').value == ""))
//     alert('Bill not generated');
//   else if (document.getElementById('Full-Name').value == "")
//     alert("Enter Full Name");
//   else if (document.getElementById('Address').value == "")
//     alert('Enter Address ');
//   else if (document.getElementById('email').value == "")
//     alert('Enter Email');
//   else if (!(document.getElementById('email').value).includes('@') || !(document.getElementById('email').value).includes('.'))
//     alert('Email is incorrect');
//   else if (document.getElementById('flexRadioDefault1').value == "")
//     alert('Select your gender');
//   else if (document.getElementById('flexRadioDefault2').value == "")
//     alert('Select your gender');
//   else if (document.getElementById('mobile-number').value == "")
//     alert('Enter Mobile Number');
//   else {

//     // Send a message to the customer and provider
//     alert('Order Placed Succefully....');
//     // sendEmail();
//     // window.location.href = "https://formspree.io/f/xknawqlq";
//     // window.location.href = "https://www.geeksforgeeks.org/software-testing-boundary-value-analysis/";
//     // return false;

//   }

//   //  End of validation function
// }

// var data;

// function getPermanantValue() {
//   var urlParams = new URLSearchParams(window.location.search);
//   var greetingValue = urlParams.get('prName');
//   data = greetingValue.split("|");
//   valueSetter();
// }

// function valueSetter() {
//   document.getElementById('Product-Name').value = data[0];
//   document.getElementById('Rate-per-price').value = data[1];
// }

// function updateBill() {


//   var qty = document.getElementById('Qty').value;
//   if (isNaN(qty) || document.getElementById('Qty').value == "")
//     alert('Enter Quantity in the number format');
//   else {
//     // alert('hello');
//     var pPrice = data[1];
//     var totalPrice = parseInt(qty) * parseInt(pPrice);
//     // alert(totalPrice);
//     document.getElementById('total-bill').value = totalPrice;
//     // alert(totalPrice);
//   }
// }
