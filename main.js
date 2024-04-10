const esas = document.querySelector(".money");
let mebleg = document.getElementById("mebleg");
let umumi = [500, 200, 100, 50, 20, 10, 5, 1];
document.getElementById("yoxla").addEventListener("click", yoxla);

function yoxla() {
esas.innerHTML=''
let left_zero = 0;
let top_zero = 70;
  for (let i = 0; i <= umumi.length; i++) {
    if (mebleg.value >= umumi[i]) {
      let say = Math.trunc(mebleg.value / umumi[i]);
      mebleg.value = mebleg.value - say * umumi[i];
      for (let j = 1; j <= say; j++) {
        if(j<=5){
        const moneyss = document.createElement("div");
        moneyss.classList.add("mon");
        moneyss.id = "mon" + i + j;
        esas.append(moneyss);
        const pul = document.createElement("img");
        moneyss.append(pul);
        pul.src = "./media/" + umumi[i] + ".jpg";
        document.getElementById("mon" + i + j).style.setProperty("position","absolute");
        document.getElementById("mon" + i + j).style.setProperty("left", left_zero + "px");
        document.getElementById("mon" + i + j).style.setProperty("top", top_zero + "px");
        left_zero = left_zero + 40;
        }
        else{
            const sayi = document.createElement("p");
            esas.append(sayi);
            sayi.id = "p" + i + j;
            sayi.textContent=say+'X'
            document.getElementById("p" + i + j).style.setProperty("left", left_zero + 500+"px");
            document.getElementById("p" + i + j).style.setProperty("top", top_zero + 50+"px");
            document.getElementById("p" + i + j).style.setProperty("position","absolute");
            document.getElementById("p" + i + j).style.setProperty("font-size", "30px");
            document.getElementById("p" + i + j).style.setProperty("font-weight","900");
            break
        }
      }left_zero = 0;
      top_zero = top_zero + 110;
    }
  }
}
