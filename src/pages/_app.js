import 'bootstrap/dist/css/bootstrap.css' // add bootstrap css
import "@fortawesome/fontawesome-svg-core/styles.css";  // add font awesome CSS
import '@/styles/globals.css'

// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
