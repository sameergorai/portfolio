const totalImages = 301;
const imageFolderPath = 'S:/programs/CYBERFICTION-IMAGES/CYBERFICTION-IMAGES';
let currentIndex = 1;

updateImage(currentIndex);

function padIndex(index) {
    return index.toString().padStart(4, '0');
}


function updateImage(index) {
    const displayImage = document.getElementById("displayImage");
    displayImage.src = `${imageFolderPath}/male${padIndex(index)}.png`;
}


window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;

    const newIndex = Math.max(1,
        Math.min(totalImages,
            Math.floor((scrollPosition / pageHeight) * totalImages)
        ));


    if (newIndex > currentIndex) {
        for (let i = currentIndex + 1; i <= newIndex; i++) {
                updateImage(i);
                // console.log(`${i}`);        
        }
    }
    else if (newIndex < currentIndex) {
        for (let i = currentIndex - 1; i >= newIndex; i--) {

            updateImage(i);
            // console.log(`${i}`);
        }
    }
    currentIndex = newIndex;
});
