document.getElementById("conversion").addEventListener("click", function (e) {
  e.preventDefault();

  let b1 = document.getElementById("bloque1").value;
  let b2 = document.getElementById("bloque2").value;
  let valor_conversion = document.getElementById("valor-a-convertir").value;

  let v_c = parseFloat(valor_conversion);
  let resultado;

  if (b1 === "km" && b2 === "m") {
    resultado = v_c * 1000;
  } else if (b1 === "m" && b2 === "cm") {
    resultado = v_c * 100;
  } else if (b1 === "ft" && b2 === "pulg") {
    resultado = v_c * 12;
  } else if (b1 === "yarda" && b2 === "pulg") {
    resultado = v_c * 36;
  } else {
    resultado = "No se puede realizar la conversión";
  }

  document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
});
