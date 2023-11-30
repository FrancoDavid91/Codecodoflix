import { AppStorage } from "../../base/app_storage"
import { authApi } from "../../datasource/remote/auth/auth_api"
import { AuthContext } from "../context/auth_context"
import { useEffect, useState } from "react"

export const AUTH_KEY = "isLoggedIn"

export const AuthProvider = ({ children, fallback }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true);

    const saveLoginState = (state) => localStorage.setItem(AUTH_KEY, state)
    const getLoginState = () => localStorage.getItem(AUTH_KEY)
    const removeLoginState = () => localStorage.removeItem(AUTH_KEY)

    useEffect(() => {
        const initAuth = async () => {
          try {
            const loginState = await getLoginState();
            if (!loginState) return;
    
            setIsLoggedIn(loginState);
          } catch (error) {
            console.log(error);
          } finally {
            setIsLoading(false);
          }
        };
    
        initAuth();
      }, []);

    //Funciones de autenticación
    const login = async (email, password) => {

        /* 
        //Aqui se hace la petición al back
        await authApi.post("/login", {
            email,
            password
        }) */

        setIsLoggedIn(true)
        saveLoginState(true)
    }

    const logout = async () => {
        setIsLoggedIn(false)
        removeLoginState()
    }

    //UseEffect para manejo de solicitudes al back
    useEffect(() => {
        //Configuracion interceptor request:Ocurre antes de enviar la solicitud al server
        authApi.interceptors.request.use(
            async (config) => {
                //Es un ej (AUTH_KEY es un string) de que hacer con el objeto de la request antes de enviarlo al server
                const token = await AppStorage.get(AUTH_KEY)
                console.log("Este es el token", token)

                if (token) {
                    config.headers["Authorization"] = `Bearer ${token}`
                }
                return config
            },
            (error) => {
                return Promise.reject(error)
            }
        )
        //Configuracion interceptor response:Ocurre antes de recibir la respuesta del server
        authApi.interceptors.response.use(
            (response) => response,
            async (error) => {
                //Es un ej (AUTH_KEY es un string) de que hacer con el objeto del error de la response
                if (error.response.status === 401) await logout()
                return Promise.reject(error)
            }
        )
    },[])

    if (fallback && isLoading) return fallback;

    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}