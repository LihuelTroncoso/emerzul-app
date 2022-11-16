const API = '192.168.0.105:8080/api/'

export const login = async (data) => {
  const res = await fetch(`${API}authenticate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data) //"username":"admin","password","admin"
  }).then((response => console.log(response)))
  .catch((e) => console.log(e));
}

/* export const login = async (data) => {
  const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTY2ODcyMTIyMH0.0JjnwjkRU0chH6q8uYHhiPRhRaqaUc-FIIu_ji6x-XqtDIVQDUZykTjzLKsmSbS04JxCL68Bb93DHqSdZ42LEA";
  const res = fetch(`${API}authenticate`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => console.log(response))
  .catch((error) => console.log(error));
} */


export const postLlamado = async (llamado) => {
    const res = await fetch(`${API}/paciente`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(llamado),
      });
    return await res.json();
}

