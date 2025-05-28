module.exports.iniciaChat = function(application, req, res) {

    var dadosForm = req.body;

    //console.log(dadosForm)

    // validar o campo
    req.assert('apelido', 'O nome é obrigatório').notEmpty();
    req.assert('apelido', 'O nome deve conter entre 3 e 15 caracteres').len(3, 15);

    var erros = req.validationErrors();

    if (erros) {
        // res.send('Existem erros no formulário.'); // o "send" finaliza o processamento
        res.render('index', {
            validacao: erros
        });
        return; // neste caso aqui o return não precisaria
    }

    // emitir uma mensagem pelo SocketIO
    application.get('io').emit(
        'msgParaCliente',
        {apelido: dadosForm.apelido, mensagem: 'acabou de entrar no chat'}
    );

    res.render('chat', { dadosForm: dadosForm });
}