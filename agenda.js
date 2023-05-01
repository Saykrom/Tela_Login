function validaData() {
    const dataInicio = document.getElementById("dataInicio").valueAsDate;
    const dataTermino = document.getElementById("dataTermino").valueAsDate;

    if (dataInicio > dataTermino) {
        alert("Não é possível informar uma data de início posterior à data de término do evento");
        return false;
    }
    return true;
}