document.getElementById('convert').addEventListener('click', function convert16() {
  var hex = document.calcform.x.value;
  hex = hex.replace("0x","");
  hex = hex.replace("0X","");
  try {
    var x = new BigNumber(hex, 16);
    document.getElementById("x").style.backgroundColor = "white";
  }
  catch(err) {
    document.getElementById("x").style.backgroundColor = "#fff0f0";
    return;
  }
  document.getElementById("y").value = x.toString(2);
  document.getElementById("y2").value = x.toString(10);
})

document.getElementsByClassName('outtext')[0].addEventListener('click', function() {
  copy('y');
});

document.getElementsByClassName('outtext')[1].addEventListener('click', function() {
  copy('y2');
});

function copy(parm) {
  var copyText = document.getElementById(parm);
  copyText.select();
  document.execCommand('copy');
  alert('Copied the text: ' + copyText.value);
}
