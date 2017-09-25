var weight1 = document.getElementById("weight1");
var weight2 = document.getElementById("weight2");
var maxWeight = document.getElementById("maxWeight");
var results = document.getElementById("results");

function tezina (weight1, weight2, maxWeight) {
    var response = "";

    weight1 = Number(weight1);
    weight2 = Number(weight2);
    maxWeight = Number(maxWeight);

    if (weight1 + weight2 <= maxWeight) {
        response = "Можемо понети оба!";
    } else if (weight1 > maxWeight && weight2 > maxWeight) {
        response = "Не можемо понети ни један.";
    } else if (weight1 > maxWeight && weight2 <= maxWeight) {
        response = "Можемо понети други.";
    } else if (weight1 <= maxWeight && weight2 > maxWeight) {
        response = "Можемо понети први.";
    } else if (weight1 <= maxWeight && weight2 <= maxWeight && weight1 + weight2 > maxWeight) {
        response = "Можете понети само један. Морате изабрати.";
    }

    return response;
}

function run () {
    results.innerHTML = "Резултат: " + tezina(weight1.value, weight2.value, maxWeight.value);
}

