function validarFormulario() {
    // Obtém os valores dos campos do formulário
    const descricao = document.getElementById('local-descricao').value;
    const observacao = document.getElementById('local-observacao').value;

    // Verifica se algum dos campos está vazio
    if (descricao === '' || observacao === '') {
    alert('Por favor, preencha todos os campos.');
    return false;
}

    return true;
}