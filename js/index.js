

document.getElementById("calcular").addEventListener("click", function (e) {
  e.preventDefault()// eliminar comportamiento por defecto del formulario

  let nota1 = document.getElementById("nota1").value
  let nota2 = document.getElementById("nota2").value
  let nota3 = document.getElementById("nota3").value

  if (nota1 === "") {
    alerta("Advertencia", "Debe ingresar la primer nota", "warning")
  } else if (nota1 < 0 || nota1 > 30) {
    alerta("Advertencia", "La nota del primer parcial debe estar en el rango de 0 a 30", "warning")
  } else if (nota2 === "") {
    alerta("Advertencia", "Debe ingresar la segunda nota", "warning")
  } else if (nota2 < 0 || nota2 > 30) {
    alerta("Advertencia", "La nota del segundo parcial debe estar en el rango de 0 a 30", "warning")
  } else if (nota3 === "") {
    alerta("Advertencia", "Debe ingresar la tercera nota", "warning")
  } else if (nota3 < 0 || nota3 > 40) {
    alerta("Advertencia", "La nota del tercer parcial debe estar en el rango de 0 a 40", "warning")
  } else {
    let n1 = parseFloat(nota1)
    let n2 = parseFloat(nota2)
    let n3 = parseFloat(nota3)

    let result = n1 + n2 + n3

    let notaFinal = document.getElementById("nota-final")
    notaFinal.value = result

    if (result >= 90) {
      alerta("Valoración", "Sobresaliente", "success")
    } else if (result >= 80) {
      alerta("Valoración", "Muy bueno", "success")
    } else if (result >= 60) {
      alerta("Valoración", "Bueno", "success")
    } else {
      alerta("Valoración", "Reprobado", "success")
    }
  }
})



document.getElementById("limpiar").addEventListener("click", function () {
  document.getElementById("nota1").value = ""
  document.getElementById("nota2").value = ""
  document.getElementById("nota3").value = ""
  document.getElementById("nota-final").value = ""
})


function alerta(title, text, icon) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon
  })
}
