const TotalValue = document.getElementById('Total')

function CalculateFromWyrmite(TotalWyrmite) {
    return(Math.floor(TotalWyrmite/120))
}

function CalculateFromTenfolds(TotalTenfolds) {
    return(TotalTenfolds*10)
}

function CalculateFromAdv(Adventurers) {
    return(Adventurers*55)
}

function Calculate(e) {
    e.preventDefault();
    let Total = (CalculateFromWyrmite(e.target.Wyrmite.value) + CalculateFromTenfolds(e.target.Tenfolds.value)) + parseInt(e.target.Singles.value) + Math.floor(parseInt(CalculateFromAdv(e.target.Stories.value)/120))

    console.dir(e.target.Wyrmite.value)
    TotalValue.innerText = Total;


}