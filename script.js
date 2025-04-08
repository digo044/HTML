function atualiarrelogio() {
    const relogio = document.getElementById('relogio')
    //aqui vou mexer no elemento com ID 'relogio' no HTML
    const agora = new Date (); 
    agora.getHours(agora.getHours()-3)
    //essa linha serve para definir para o fuso horario correto 
const horas = String(agora.getHours()).padStart(2,'0');
const minutos = String(agora.getMinutes()).padStart(2,'0');
const segundos = String(agora.getSeconds()).padStart(2,'0');
relogioElement.textContent = '${hora}:${minutos}${segundos}'
}