import React from "react";

export default function Hero() {
  const handleSubmit = (event) => {
    const email = event.target.email.value;
    const password = event.target.password.value;
    const tenant = event.target.tenant.value;

    console.log("email 👉️", email);
    console.log("password 👉️", password);
    console.log("tenant 👉️", tenant);

  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-center">
          <h1 className="text-5xl font-bold mb-6">Sistema de acreditación</h1>
          <h1 className="text-5xl font-bold">ABET</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Escuela</span>
                </label>
                {/* Selector */}
                <div>
                  <select id="tenant" className="input input-bordered w-full">
                    <option value="" disabled selected>
                      Selecciona escuela
                    </option>
                    <option value="EISC">ABET-EISC</option>
                    <option value="ESCEL">ABET-ESCEL</option>
                    <option value="AMBIENTAL">ABET-ING. AMBIENTAL</option>
                    <option value="BIOMEDICA">ABET-ING. BIOMEDICA</option>
                    <option value="CIVIL">ABET-ING. CIVIL</option>
                    <option value="GESTIÓN">ABET-ING. GESTIÓN</option>
                    <option value="INDUSTRIAL">ABET-ING. INDUSTRIAL</option>
                  </select>
                </div>
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Usuario</span>
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Usuario"
                  className="input input-bordered"
                />
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contraseña</span>
                </label>
                <input
                  id="password"
                  type="text"
                  placeholder="Contraseña"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-primary">
                    ¿Olvidaste contraseña?
                  </a>
                </label>
              </div>

              {/* Login Button */}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Ingresar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
