import { Footer } from '../openai/components/footer'
import Article from './components/article'
import Navbar from './components/navbar'
import { article } from './data/article'

export default function NewsMain() {
    return (
        <>
            <Navbar />
            <Article article={article} />
            <Footer />
        </>
    )
}
