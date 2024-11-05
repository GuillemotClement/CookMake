import { Header } from './partials/Header.tsx'
import {Footer} from "./partials/Footer.tsx";
import { Homepage } from './pages/Homepage.tsx';
import styles from './app.module.css';
function App() {

  return (
    <div className={styles.layout}>
        <Header></Header>
        <div className={styles.mainContent}>
            <Homepage></Homepage>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default App
