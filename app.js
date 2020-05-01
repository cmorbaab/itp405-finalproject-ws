const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: process.env.PORT || 8080 })

// var project_consoles = [];

function broadcast(data) {
  wss.clients.forEach((client) => {
    client.send(data);
  });
}

wss.on('connection', (ws) => {  
  ws.on('message', (message) => {
    let { type, data } = JSON.parse(message);
    broadcast(message);
  });
});
