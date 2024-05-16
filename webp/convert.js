// Converts all files from an <input> tag to output
function convert(input){
    for(const file of input.files){
        convertImage(file);
    };
}

// Converts an image file, then downloads it
function convertImage(file){

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function (event) {
        const img = new Image();
        img.src = event.target.result;

        img.onload = function () {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            const outputImg = new Image();
            outputImg.src = canvas.toDataURL('image/png');

            const link = document.createElement('a');
            link.href = outputImg.src;
            link.download = file.name.replace(/(\.[^.]+)$/, '.png');
            link.click();
        };
    };
}