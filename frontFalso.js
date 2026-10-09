const API_URL = "http://localhost:3000";

async function registrarUsuario(usuario) {
    const response = await fetch(`${API_URL}/usuario/registro`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Error al registrarse");
    }

    return data;
}

async function iniciarSesion(mail, password) {
    const response = await fetch(`${API_URL}/usuario/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mail: mail,
            password: password
        })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Error al iniciar sesión");
    }

    return data;
}