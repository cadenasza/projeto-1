import "./Cards.css"

export default function Cards() {
  return (
    <section className="container-cards">
        <h3 className="container-cards-subtitulo">AQUI VOCÊ ENCONTRA…</h3>
        <h2 className="container-cards-titulo">Tudo sobre o o açaí que você ama!</h2>
        <div className="cards">
            <div className="card">
                <img src="img/14778486084_627675da53_b.jpg" alt="imagem acai" />
                <div className="div-teste">
                    <h5>NOVIDADES</h5>
                    <p>Confira nossas redes sociais e fique por dentro de toda a nossa refrescância!</p>
                    <a href="">Veja mais</a>
                </div>
            </div>
            <div className="card">
                <img src="img/4386387492_2a5147b154_b.jpg" alt="imagem acai" />
                <div className="div-teste">
                    <h5>PERTINHO DE VOCÊ</h5>
                    <p>Venha até a gente, ou nós vamos até você. É só escolher!</p>
                    <a href="">Veja mais</a>
                </div>
            </div>
            <div className="card">
                <img src="img/Captura-de-Tela-2024-01-25-as-14.26.58.png.webp" alt="imagem acai" />
                <div className="div-teste">
                    <h5>VEJA O CARDÁPIO</h5>
                    <p>Conheça todos os sabores inéditos do Formosa.</p>
                    <a href="">Veja mais</a>
                </div>
            </div>
            <div className="card">
                <img src="img/202112121521_r6Ab_i.avif" alt="imagem acai" />
                <div className="div-teste">
                    <h5>NOSSAS UNIDADES</h5>
                    <p>Tem sempre uma unidade pertinho de você, venha nos conhecer!</p>
                    <a href="">Veja mais</a>
                </div>
            </div>
        </div>
    </section>
  )
}
