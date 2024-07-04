function calculo() {
    let nomeAluno = document.getElementById('aluno').value;

    let anoLetivo = document.getElementById('ano').value;
    let turno = document.getElementById('turno').value;
    let turma = document.querySelector('#a1').value;

    let nota1 = Number((document.querySelector('#nota1').value));
    let nota2 = Number((document.querySelector('#nota2').value));
    let nota3 = Number((document.querySelector('#nota3').value));
    let nota4 = Number((document.querySelector('#nota4').value));

    let resultado = (nota1 + nota2 + nota3 + nota4)
    let media = resultado / 4
    
    if(media < 6){
        var situacao = 'REPROVADO'
    }
    else{
        var situacao = 'APROVADO'
    }

    document.getElementById('res').innerHTML = `A nota do aluno(a) ${nomeAluno} foi : ${resultado} e sua média é: ${media} ${anoLetivo}° ano  ${turno} Turma:${turma}`;
    document.getElementById('sit').innerHTML = `${situacao}`;
}
