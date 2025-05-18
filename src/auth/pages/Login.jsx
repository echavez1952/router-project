import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { NavLink, useNavigate } from "react-router-dom";

export const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
    setError,
    clearErrors
  } = useForm();

  const navigate = useNavigate();
  
  const { login } = useAuth(); // Toma la función login de AuthContext
  console.log(login); 

  const onHandleSubmit = () => {
    
    console.log(getValues("username"), getValues("password"))
    // edwin Echavez123
    
    // ejecutar mi funcion de login de AuthContext
    const success = login(getValues("username"), getValues("password"));
    //verificar si el usuario existe y las credenciales son correctas

    if (!success) {
      //tengo que mostrar un error
      setError("general", {
        type: "manual",
        message: "Usuario o contraseña incorrectos",
      });
      return;
    }

    //This will remove the current entry in the history stack, replacing it with a new one
    navigate('/', { replace: true });
    reset();

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form 
      onSubmit={handleSubmit(onHandleSubmit)}
        className="bg-gray-200 border border-black-400 rounded-lg p-10 shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-semibold text-center mb-6">Log In</h2>

        {/* Username */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            {...register("username", {
              required: "Username requerido",
              onChange: () => clearErrors('general')
            })}
            className="w-full bg-white border border-red-300 rounded-md text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.username && (
            <p className="text-red-600 text-xs italic mt-1">{errors.username.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password requerido",
              onChange: () => clearErrors('general'),
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  "La contraseña debe tener 8 caracteres, al menos 1 letra y al menos 1 número",
              },
            })}
            className="w-full bg-white border border-red-300 rounded-md text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-600 text-xs italic mt-1">{errors.password.message}</p>
          )}
        </div>

        {errors.general && (
          <p className="text-red-600 text-xs italic -mt-1">{errors.general.message}</p>
        )}

        {/* Button */}
        {/* <div className="flex flex-column justify-center "> */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg border border-black transition-colors mt-4"
          >
            Login
          </button>
        {/* </div> */}

        <div className="text-center mt-4">
          <span className="text-gray-600 text-sm">¿No tienes cuenta?</span>{" "}
          <NavLink to="/register" className="text-blue-800 hover:underline text-sm">
            Regístrate
          </NavLink>
        </div>
      </form >
    </div>
  )
};