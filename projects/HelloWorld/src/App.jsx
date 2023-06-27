import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <section className="App">
            <TwitterFollowCard userName="Johnd">
                John Doe
            </TwitterFollowCard>
            
            <TwitterFollowCard userName="elonmusk">
                Elon Musk
            </TwitterFollowCard>

        </section>
    )
}
    
