let nombreVerres = "undifined";
while (isNaN(nombreVerres)) {
    nombreVerres = prompt("Saisissez le nombre de verres que vous comptez consommer");
}

for (let numeroVerre = 1; numeroVerre <= nombreVerres; numeroVerre++) {
    let verre;

    if (numeroVerre % 5 === 0) {
        verre = "Eau";
    } else if (numeroVerre % 3 === 0) {
        verre = "Rhum";
    } else if (numeroVerre % 7 === 0) {
        verre = "Téquila";
    } else {
        verre = "Bière";
    }

    document.write(numeroVerre + " : " + verre + "<br/>");
}

// avec la boucle do while


// let nombreVerres;
// do {
//     nombreVerres = prompt("Saisissez le nombre de verres que vous comptez consommer");
// }
// while (isNaN(nombreVerres));

// for (let numeroVerre = 1; numeroVerre <= nombreVerres; numeroVerre++) {
//     let verre;

//     if (numeroVerre % 5 === 0) {
//         verre = "Eau";
//     } else if (numeroVerre % 3 === 0) {
//         verre = "Rhum";
//     } else if (numeroVerre % 7 === 0) {
//         verre = "Téquila";
//     } else {
//         verre = "Bière";
//     }

//     document.write(numeroVerre + " : " + verre + "<br/>");
// }
