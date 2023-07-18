
function bai1() {
  var number = parseInt(prompt("Nhap number: "));
  var output = " ";
  for (var i = 0; i < number; i++) {
    output += i + " ";
  }
  alert(output);
}
function bai2() {
  var number = parseInt(prompt("Nhap number: "));
  var sum = 0;
  for (var i = 0; i < number; i++) {
    sum += i;
  }
  alert("Sum: " + sum);
}
function bai3() {
  var height = parseInt(prompt("Nhap height: "));
  var width = parseInt(prompt("Nhap width: "));
  var result = " ";

  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      result += "*";
    }
    result += "\n";
  }
  alert("Result:\n" + result);
}
function bai4() {
  var number = parseInt(prompt("Nhap number: "));
  var result = 0;
  while (number > 0) {
    var number2 = number % 10;
    result = result * 10 + number2;
    number = Math.floor(number / 10);
  }
  alert("Result:" + result);
}
function bai5() {
  var number = parseInt(prompt("Nhap number: "));
  var result = 0;

  while (number > 0) {
    var number2 = number % 10;
    if (number2 > result) {
      result = number2;
    }
    number = Math.floor(number / 10);
  }
  alert("Result:" + result);
}

var choice;
do {
  choice = parseInt(prompt("Chọn bài (1-5):"));

  switch (choice) {
    case 1:
      bai1();
      break;
    case 2:
      bai2();
      break;
    case 3:
      bai3();
      break;
    case 4:
      bai4();
      break;
    case 5:
      bai5();
      break;
    default:
      alert("Lựa chọn không hợp lệ.");
      break;
  }
} while (isNaN(choice) || (choice < 1 || choice > 5));