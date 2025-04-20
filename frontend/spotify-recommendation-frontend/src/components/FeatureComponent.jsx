import "../styles/feature.css"

export default function FeatureComponent(){
    return(
        <section className="features">
            <div className="feature">
                <h3>Personalised</h3>
                <p>Recommendations based on your listening history</p>
            </div>
            <div className="feature">
                <h3>Simple</h3>
                <p>One-click playlist generation</p>
            </div>
            <div className="feature">
                <h3>Discover</h3>
                <p>Find new music you love</p>
            </div>
        </section>
    )
}