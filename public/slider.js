function Slider() {
    let i = -1
    imgsource = [
        './images/image1.jpg',
        './images/image2.jpg'
    ]

    // Change images based on array
    setInterval(function () {
        i++;
        if (i >= imgsource.length) { i = 0}
        document.getElementById("setImage").innerHTML = `<img src="${imgsource[i]}" style="object-fit: cover">`;
    }, 20000);

    console.log(i);
}