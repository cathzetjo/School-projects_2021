const inputs = document.querySelectorAll('input');
const frame = document.querySelector('#frame');
const blur = document.querySelector('#blur');
const brightness = document.querySelector('#brightness');
const contrast = document.querySelector('#contrast');
const sepia = document.querySelector('#sepia');
const colorFilter = document.querySelector('#hue-rotate');
const invert = document.querySelector('#invert');
const saturate = document.querySelector('#saturate');



const blurParagraph =  document.querySelector('.blur-paragraph');
const frameParagraph =  document.querySelector('.frame-paragraph');
const brightnessParagraph =  document.querySelector('.brightness-paragraph');
const contrastParagraph =  document.querySelector('.contrast-paragraph');
const sepiaParagraph =  document.querySelector('.sepia-paragraph');
const colorFilterParagraph =  document.querySelector('.hue-rotate-paragraph');
const invertParagraph =  document.querySelector('.invert-paragraph');
const saturateParagraph =  document.querySelector('.saturate-paragraph');

function handleUpdate() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

    blurParagraph.innerHTML=blur.value;
    frameParagraph.innerHTML=frame.value;
    brightnessParagraph.innerHTML=brightness.value;
    contrastParagraph.innerHTML=contrast.value;
    sepiaParagraph.innerHTML=sepia.value;
    colorFilterParagraph.innerHTML=colorFilter.value;
    invertParagraph.innerHTML=invert.value;
    saturateParagraph.innerHTML=saturate.value;
}

inputs.forEach(item => item.addEventListener('change', handleUpdate));
inputs.forEach(item => item.addEventListener('mousemove', handleUpdate));

function reset () {
    location.reload();

}