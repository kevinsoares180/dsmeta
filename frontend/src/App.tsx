import Header from "./Components/Header"
import NotificationButton from "./Components/NotificationButton"
import SalesCard from "./Components/SalesCard"

function App() {

  return (
    <>
      <Header/>
      <main>
        <section className="sales">
          <div className="dsmeta-container">
            <SalesCard/>
          </div>
        </section>
      </main>
      <NotificationButton/>
    </>
  )
}

export default App
