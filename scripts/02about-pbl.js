window.onload = init;

function init() {
    var imagesNo = 1;
    var myImg = [];
    var myNo = document.getElementById("img-No");
    var myimages = document.getElementById("images");
    var revBtn = document.getElementById("rev_btn");
    var fwdBtn = document.getElementById("fwd_btn");

    for (var i = 0; i < 7; i++) {
        myImg[i] = document.createElement("img");
        myImg[i].src = "images/pblPL0" + (i + 1) + ".png";
    }

    function showImg() {
        myNo.innerHTML = imagesNo + " / 7 ";
        myimages.src = myImg[imagesNo - 1].src;
    }

    revBtn.onclick = revBtnClick;

    function revBtnClick() {
        imagesNo--;
        showImg();

        if (imagesNo === 1) {
            revBtn.disabled = "disabled";
        } else if (imagesNo === myImg.length - 1) {
            fwdBtn.disabled = false;
        }
    }

    fwdBtn.onclick = fwdBtnClick;

    function fwdBtnClick() {
        imagesNo++;
        showImg();

        if (imagesNo === myImg.length) {
            fwdBtn.disabled = "disabled";
        } else if (imagesNo === 2) {
            revBtn.disabled = false;
        }
    }
}