/* 画像の格納 */
var images_src = new Array("images/pblPL01.png", "images/pblPL02.png", "images/pblPL03.png", "images/pblPL04.png", "images/pblPL05.png", "images/pblPL06.png", "images/pblPL07.png");
var num = 0;
/* 進む戻るで画像を変更 */
document.getElementById("images").src = images_src[num];

function go_forward() {
    if (num == 6) {
        num = 0;
    } else {
        num++;
    }
    document.getElementById("images").src = images_src[num];
}

function go_back() {
    if (num == 0) {
        num = 2;
    } else {
        num--;
    }
    document.getElementById("images").src = images_src[num];
}
/* 文字列の変更 */