<h1> Challenge do curso da Alura + Oracle </h1>


<p> O projeto constiste em ter um site onde o mesmo é capaz de criptografar um texto e descriptografar o mesmo texto.</p>

<h2> Criptografar </h2>
<p> Ultilizei o método charAt para conseguir a posição de cada caractere do texto, e usei no loop for. Assim, eu consegui adicionar letras a mais dentro do texto,
e desta forma eu pude criptografar o desto </p>

<p> Todo este contexto dentro de um função de evento, que no caso é o de click. Clicando no botão criptografar, o texto digitado no campo do texto é criptografado para 
outro campo de texto, lá ele aparece criptografado. </p>

<h2> Descriptografar </h2>

<p> Para descriptografar o texto, utilizei o mesmo método charAt, e também o looping for. Contudo, desta vez, eu inicie a variável de controle no 0 e 
depois adicionei +2 nela, e guardei cada caractere em outra variável. Desta forma, o looping percorre somente os caracteres que são número par, e me devolve 
o texto sem os textos adicionados anteriormente.</p>

<p> Tudo isso dentro de uma função callback, com evento de click adicionado ao botão de descriptografar. Quando o usuário clica no botão o texto é descriptografado. </p>

<h2> Botão de copiar </h2>

<p> Construí um botão de copiar o texto criptografado, e esse mesmo botão apaga o texto que o usuário digitou no campo do texto 1 e também apaga o texto criptografado
no campo de texto 2 , onde sempre aparece o que foi criptografado e descriptografado.</p>
