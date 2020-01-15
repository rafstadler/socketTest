
Dans state : 

endpoint: "localhost:4001",


Dans render():

const socket = socketIOClient(this.state.endpoint);
        socket.on('nouveau poid', (poid) => {
            console.log(poid)
            // amusez vous
        })
        
        socket.on('nouvel angle', (poid) => {
            console.log(poid)
            // amusez vous
        })