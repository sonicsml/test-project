let slider = document.getElementById("range-slider");
let output = document.getElementById("slider-result");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}
