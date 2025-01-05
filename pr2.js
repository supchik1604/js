let summa = Number(prompt())
let category = Number(prompt())

if (summa > 220) {
    if (category == 1) {
        alert(summa * 0.02 + 45)
    }
    if (category == 2) {
        alert(summa * 0.035)
    }
    if (category == 3) {
        alert(summa * 0.023 + 12)
    }
    if (category > 3) {
        alert(summa * 0.01)
    }
}
else {
    alert("Кэшбек не начислен")
}