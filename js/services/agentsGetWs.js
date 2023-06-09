let ws = {
    async getAgents(p1){

        try {
            const response = await fetch(p1);
            const result = await response.json();
            return result
        } catch (error) {
            console.error(error);
        }
    }
}

self.addEventListener("message", async (e) =>{
    let data = await ws.getAgents(e.data)
    console.log(data);
})