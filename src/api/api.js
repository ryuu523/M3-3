export const login = async (username, password) => {
    try {
        const res = await fetch("http://localhost:8086/api/auth/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({ username, password })
        })
        if (!res.ok) {
            throw new Error(res.message);
        }
        const data=await res.json()
      
        return data
    } catch (e) {
        throw new Error(e.message);
    }
}
export const logout = async () => {
    try {
        const token = sessionStorage.getItem("token")
        const res = await fetch("http://localhost:8086/api/auth/logout", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "authorization": `Beober ${token}`
            },
        })
        if (!res.ok) {
            throw new Error(res.message);
        }
        const data=await res.json()
        return data
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getProfile = async (username) => {
    try {
        const token = sessionStorage.getItem("token")
        const res = await fetch("http://localhost:8086/api/profile", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "authorization": `Beober ${token}`
            },
            body: JSON.stringify({ username })
        })
        if (!res.ok) {
            throw new Error(res.message);
        }
        const data=await res.json()
        return data
    } catch (e) {
        throw new Error(e.message);
    }
}
export const updateProfile = async (username, nickname) => {
    try {
        const token = sessionStorage.getItem("token")
        const res = await fetch("http://localhost:8086/api/profile", {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "authorization": `Beober ${token}`
            },
            body: JSON.stringify({ username })
        })
        if (!res.ok) {
            throw new Error(res.message);
        }
        const data=await res.json()
        
        
        return data
    } catch (e) {
        throw new Error(e.message);
    }
}
export const getField = async () => {
    try {
        const token = sessionStorage.getItem("token")
        const res = await fetch("http://localhost:8086/api/fields", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "authorization": `Beober ${token}`
            },
        })
        if (!res.ok) {
            throw new Error(res.message);
        }
        const data=await res.json()
        return data
    } catch (e) {
        throw new Error(e.message);
    }
}

export const getResults = async () => {
    try {
        const token = sessionStorage.getItem("token")
        const res = await fetch("http://localhost:8086/api/results", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "authorization": `Beober ${token}`
            },
        })
        if (!res.ok) {
            throw new Error(res.message);
        }
        const data=await res.json()
        return data
    } catch (e) {
        throw new Error(e.message);
    }
}
export const postResult = async (blockMoves, time) => {
    try {
        const token = sessionStorage.getItem("token")
        const res = await fetch("http://localhost:8086/api/fields", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "authorization": `Beober ${token}`
            },
            body: JSON.stringify({ blockMoves, time })
        })
        if (!res.ok) {
            throw new Error(res.message);
        }
        const data=await res.json()
        return data
    } catch (e) {
        throw new Error(e.message);
    }
}

