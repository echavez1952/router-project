import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

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

  const { login } = useAuth();

  const navigate = useNavigate();

  const onHandleSubmit = () => {
    // ejecutar mi funcion de login

    console.log(getValues("username"), getValues("password"))
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
    
    navigate('/', { replace: true });
    reset();

  };

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <h2>Log In</h2>

      <div>
        <input
          type="text"
          placeholder="username"
          name="username"
          {...register("username", {
            required: "username requerido",
            onChange: () => clearErrors('general')
          })}
        />

        {errors.username && (
          <p className="text-red-700">{errors.username.message}</p>
        )}
      </div>

      <br />
      <div>
        <input
          type="password"
          placeholder="password"
          name="password"
          {...register("password", {
            required: "password requerido",
            onChange: () => clearErrors('general'),
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message:
                "La contraseña debe tener 8 caracteres, al menos 1 letra y al menos 1 numero ",
            },
          })}
        />

        {errors.password && (
          <p className="text-red-700">{errors.password.message}</p>
        )}
      </div>

      {errors.general && (
        <p className="text-red-700">{errors.general.message}</p>
      )}

      <br />

      <button type="submit">Log in</button>
    </form>
  );
};
