import { useState } from "react";

function Suscripcion() {
  const [email, setEmail] = useState("");
  return (
    <>
      <h1>Hola mundo</h1>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <div className="mb-3">
                  <label htmlfor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {email && <p>Tu email es: {email}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Suscripcion;
