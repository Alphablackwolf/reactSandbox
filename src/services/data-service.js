function GetVehicles() {
    const baseUrl = 'http://localhost:4200';
    const url = `${this.baseUrl}/api/vehicles`;
        console.log(url);
        return fetch(url,
            {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                }
            })
}


export { GetVehicles };

