import Card from "../components/Card";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Searcher from "../components/Searcher";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div>
      <Header />
      <div className="conteiner-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-9">
            <div className="row">
              <Content></Content>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
