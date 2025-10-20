// ================= TRANSIÇÃO ENTRE PÁGINAS =================
document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    body.classList.add("fade");

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", e => {
            const url = link.getAttribute("href");
            if(url && !url.startsWith("#") && !url.startsWith("mailto:")) {
                e.preventDefault();
                body.classList.add("fade-out");
                setTimeout(() => window.location.href = url, 400);
            }
        });
    });

    // ================= CORAÇÕES SURPRESA =================
    document.getElementById('surpresa')?.addEventListener('click', () => {
        alert('Feliz 3 meses meu amor, quero que você saiba que estão sendo os melhores dias da minha vida tendo você ao meu lado, diversos momentos de alegria, amor, tristeza pela distância, mas estando sempre juntos e conversando.\n Saiba que estou sempre aqui pra você, pra tudo, conversar, aconselhar e te amar da melhor forma.\nDesculpa se nesses meses fiz algo que não te agradou, mas saiba que acima de tudo eu te amo muito e vou fazer tudo que for possível pra ficarmos bem.\nComo falei pra minha sogrinha, você é e sempre será minha maior prioridade, obrigado por tudo que você está me fazendo, pelo amor que me dá, me trata com carinho, você é o maior presente que Deus poderia ter me dado.\n Os nossos momentos são incríveis, apesar de alguns terem assustado, outros são maravilhosos.\nOs nossos sorrisos, nossa conexão, nossos momentos a sós.\n Vamos estar sempre juntinhos, obrigado pelos presentes, pelo quadro, por tudo. EU TE AMO MINHA JAPINHA.');
        for(let i=0;i<20;i++) criarCoracao();
    });

    function criarCoracao() {
        const coracao = document.createElement('div');
        coracao.classList.add('coracao');
        coracao.innerText = '❤️';
        coracao.style.left = Math.random() * 100 + 'vw';
        coracao.style.fontSize = (12 + Math.random()*24)+'px';
        document.body.appendChild(coracao);
        setTimeout(()=>coracao.remove(),8000);
    }
    setInterval(criarCoracao,500);

    // ================= CARTINHAS MODAL =================
    document.querySelectorAll('.cartinha').forEach(card=>{
        card.addEventListener('click',()=>{
            const message=card.getAttribute('data-message');
            document.getElementById('modalText').textContent = message;
            document.getElementById('modal').style.display='block';
        });
    });
    document.getElementById('closeModal')?.addEventListener('click',()=>{
        document.getElementById('modal').style.display='none';
    });
    window.addEventListener('click', e=>{
        if(e.target.id==='modal') document.getElementById('modal').style.display='none';
    });

    // ================= CONTADOR =================
    const dataInicio = new Date('2025-07-20T00:00:00');
    function atualizarContador() {
        const agora = new Date();
        let anos=agora.getFullYear()-dataInicio.getFullYear();
        let meses=agora.getMonth()-dataInicio.getMonth();
        let dias=agora.getDate()-dataInicio.getDate();
        let horas=agora.getHours()-dataInicio.getHours();
        let minutos=agora.getMinutes()-dataInicio.getMinutes();
        let segundos=agora.getSeconds()-dataInicio.getSeconds();
        if(segundos<0){segundos+=60;minutos--;}
        if(minutos<0){minutos+=60;horas--;}
        if(horas<0){horas+=24;dias--;}
        if(dias<0){meses--; const mesAnterior=new Date(agora.getFullYear(), agora.getMonth(),0); dias+=mesAnterior.getDate();}
        if(meses<0){meses+=12;anos--;}
        const contador=document.getElementById('dias');
        if(contador) contador.textContent=`${anos} ano(s), ${meses} mês(es), ${dias} dia(s), ${String(horas).padStart(2,'0')}h ${String(minutos).padStart(2,'0')}min ${String(segundos).padStart(2,'0')}s`;
    }
    setInterval(atualizarContador,1000);
    atualizarContador();

    // ================= MÚSICA DE FUNDO =================
    const musica = document.getElementById('musicaFundo');
    if(musica){
        musica.volume=0.5;
        musica.play().catch(()=>{ document.addEventListener('click',()=>musica.play(),{once:true}); });
        window.addEventListener('beforeunload',()=>{ localStorage.setItem('musicaTocando', !musica.paused); });
        const tocando = localStorage.getItem('musicaTocando')==='true';
        if(tocando) musica.play();
    }
});
