import Contador from "../components/Contador";

function Hooks() {
  return (
    <>
      <h1>Hooks</h1>
      <div className="contaienr">
        <div className="row justify-content-md-center">
          <div className="col-md-4 text-center">
            <Contador title="Personas" />

            <Contador title="Años de edad" />

            <Contador title="Recuperas" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Hooks;
