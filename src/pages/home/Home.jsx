

//components
import MainPanel from "../../components/mainPanel/MainPanel";
import MainInformation from "../../components/mainInformation/MainInformation";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./Home.css"
const Home = () => {



  return (
    <main className="home home__layout">
      <MainPanel />
      <MainInformation />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </main>
  )
}

export default Home