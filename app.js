const boxs = document.querySelectorAll(".box")
const restBtn = document.getElementById('Reset-btn') 
let trunO = true;
// 2d array
const winPartterns= [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
]
boxs.forEach((box) => {
  box.addEventListener('click', () => {
    console.log('button has clicked ');
    if (trunO) {
      box.innerText = 'O';
      trunO = false;
    }
    else {
      box.innerText = 'X';
      trunO = true;
    }
    box.disabled = true;
    Checkwinner()
  })
})
const Checkwinner = () => {
  for (let prattens of winPartterns) {
    let val1 = boxs[prattens[0]].innerText;
    let val2 = boxs[prattens[1]].innerText;
    let val3 = boxs[prattens[2]].innerText;
    if (val1 !=''&& val2!='' && val3!='') {
      if (val1 === val2&& val2===val3) {
        console.log('winner',val1);
        
      }
    }
  }

}