import Card from "./Card";
function Content() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Card
              titulo="prodcuto1"
              descripcion="Este prodcto esta disponible"
              url="https://www.purina.com/sites/default/files/2025-09/beagle2_red-collar.jpg"
            ></Card>
          </div>
          <div className="col-md-6">
            <Card
              titulo="prodcuto1"
              descripcion="Este prodcto esta disponible"
              url="https://www.purina.com/sites/default/files/2025-09/beagle2_red-collar.jpg"
            ></Card>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Content;
