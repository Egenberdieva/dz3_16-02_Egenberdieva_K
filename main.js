  function tn(num1, num2) {
     if (num1 > num2) {
          console.log("num2")
      } else if (num1 < num2) {
          console.log("num1 ")
      }
  }

  const num1 = prompt("Число?")
  const num2 = prompt("Число?")
  tn(num1, num2)


function count (num) {
    console.log(num.length)
}
const num =  [2,50,88,36,98]
count(num)