
import "./Banner.css"
export function Banner(){
    return(

        <div className="banner__container">
            <img className="banner__imagem" src="./images/image-banner-me.png" alt="minha imagem"></img>
            <div className="banner__text-container"> 
    <h1 className="banner__h1">Olá, Eu sou o Jean Ferri</h1>
    <h2 className="banner__h2">Seja bem vindo ao meu portifólio</h2>
    </div>
        </div>
    )
}