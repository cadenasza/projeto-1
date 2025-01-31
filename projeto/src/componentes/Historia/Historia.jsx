import "./Historia.css"

export default function Historia() {
  return (
    <section className='historia'>
        <div className='container-acai-historia'>
            <img src="/img/FVTzmbiWYAEM0S9.jpg" alt="imagem acai" className='img-acai-historia'/>
        </div>
        <div className="container-historia">
            <h3 className="titulo-container-historia">CONHEÇA A SUA AÇAÍTERIA PREFERIDA!</h3>
            <h2 className="subtitulo-container-historia">Quem Somos?</h2>
            <p className="paragrafo-container-historia">Somos uma rede de açaíterias que nasceu em 2013, em São Bernardo do Campo, com a intenção de te fazer pensar na gente 24/7.</p>
            <p className="paragrafo-container-historia">Temos o açaí mais gostoso de São Paulo, e não é atoa que já conquistamos mais de 110 unidades em todo o Estado!</p>
            <p className="paragrafo-container-historia">Venha provar os sabores inesquecíveis e exclusivos do Açaí Formosa</p>
            <div class="textos-secundarios">
                <div class="textos-1">
                    <p>Fabricação própria e receitas exclusivas</p>
                    <p>Mais de 10 anos surpreendendo paladares</p>
                    <p>Mais de 110 unidades em funcionamento</p>
                </div>
                <div class="textos-1">
                    <p>Mais de 8.000 toneladas de açaí vendido até hoje</p>
                    <p>Mais de 5 milhões de Formosa Lovers atendidos</p>
                    <p>70 toneladas de açaí produzidas todos os meses</p>
                </div>
            </div>
            <a class="link-historia" href="#">Veja toda nossa historia</a>
        </div>
    </section>
  )
}
