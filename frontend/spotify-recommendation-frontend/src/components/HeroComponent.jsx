import "../styles/hero.css"
export default function HeroComponent(){
    return(
        <section className="hero">
            <div className="hero-content">
                <h1>Discover Your Perfect Playlist</h1>
                <p>Create personalized spotify playlists. Get started by logging in</p>
            </div>
            <button className="hero-login-button">Login with spotify</button>
        </section>
    )
}