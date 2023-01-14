var imagesNo = 1;

function go_forward() {
    imagesNo++;
    document.getElementById("images").src = "images/pblPL0" + imagesNo + ".png";
    document.getElementById("img-No").innerText = imagesNo + " / 7 ";
}

function go_back() {
    imagesNo--;
    document.getElementById("images").src = "images/pblPL0" + imagesNo + ".png";
    document.getElementById("img-No").innerText = imagesNo + " / 6 ";
}