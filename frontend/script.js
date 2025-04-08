let predictedDigit = null;
function uploadFile() {
 const input = document.getElementById('fileInput');
 const file = input.files[0];
 if (!file) {
   alert("Please select a file first");
   return;
 }
 const formData = new FormData();
 formData.append("file", file);
 fetch('http://127.0.0.1:5000/predict', {
   method: 'POST',
   body: formData
 })
 .then(response => response.json())
 .then(data => {
   if (data.digit !== undefined) {
     predictedDigit = data.digit;
     document.getElementById('previewContainer').style.display = 'block';
     document.getElementById('result').innerText = ''; // reset result text
   } else {
     document.getElementById('previewContainer').style.display = 'none';
     document.getElementById('result').innerText = `Error: ${data.error}`;
   }
 })
 .catch(err => {
   document.getElementById('result').innerText = `Error: ${err.message}`;
 });
}
function showDigit() {
 if (predictedDigit !== null) {
   document.getElementById('result').innerText = `Predicted Digit: ${predictedDigit}`;
 }
}