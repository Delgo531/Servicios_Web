import { useEffect, useState } from "react";

function Contador({ title }) {
  const [contador, setContador] = useState(0);
  useEffect(() => {
    console.log("El contador de " + title + " ha cambiado a " + contador);
  }, [contador]);

  useEffect(() => {
    console.log("El contador de " + title + " se ha montado ");
  }, []);

  return (
    <>
      <div className="card">
        <div className="card-title">
          <h3>{title}</h3>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setContador(contador + 1);
                }}
              >
                Sumar
              </button>
            </div>

            <div className="col">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setContador(contador - 1);
                }}
              >
                Restar
              </button>
            </div>

            <div className="col">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setContador(0);
                }}
              >
                Reinicar
              </button>
            </div>
          </div>

          <span className="badge text-bg-info">{contador}</span>
        </div>
      </div>
    </>
  );
}
export default Contador;
