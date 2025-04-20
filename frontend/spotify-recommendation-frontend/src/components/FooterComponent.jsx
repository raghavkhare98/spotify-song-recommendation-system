import "../styles/globals.css"

export default function FooterComponent(){
    return(
        <div className="footer">
            <p>&copy; {new Date().getFullYear()} PlaylistAI</p>
            <p>Not affiliated with spotify</p>
        </div>
    )
}