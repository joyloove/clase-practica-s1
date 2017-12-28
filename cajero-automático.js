var billetes = {
    "100": 100,
    "50": 50,
    "20": 200,
    "10": 300,
    "5": 500,
    "1": 800,
  }


  billetesKeys = Object.keys(billetes);


  billetesKeys.sort(function(a,b){
      return b - a
  });

  function calcularBilletes(montoSolicitado) {

    var totalDeBilletes = 0;
    var montoPendiente = montoSolicitado;

    for (i = 0; i < billetesKeys.length; i++) {

      key = parseInt(billetesKeys[i]);
      
      var billetesUsados = Math.floor(montoPendiente/key);

      if (montoPendiente>= key && billetesUsados > 0){
        montoPendiente = montoPendiente % billetes[key];
        billetes[key] = billetes[key] - billetesUsados;
        console.log("Se usará " + billetesUsados + " billete de denominación $" + key);
        totalDeBilletes = totalDeBilletes + billetesUsados;
      }
     }
    console.log("Monto solicitado $" + montoSolicitado + " se entregan " + totalDeBilletes + " billetes");
    console.log("En el cajero quedan: ", billetes);
  }

  calcularBilletes(150);
