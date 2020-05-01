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
    console.log('Received:', type);
    console.log("Num:" , wss.clients.size);
    if (type === 'label-update'){
      // console.log("Project Id: ", data['project-id']);
      // console.log("URL: ", data['url']);
      // let project_id = data['project-id'];
      //save event to project consoles array
      // if(project_id in project_consoles){
      //   let events = project_consoles[project_id];
      //   events.push(data);
      //   project_consoles[project_id] = events;
      // }
      // else{
      //   let events = [data];
      //   project_consoles[project_id] = events;
      // }
      broadcast(message);
    }
    // else if(type === 'user-join'){
    //   broadcast(JSON.stringify({
    //     type: type,
    //     data: 
    //   }));
    // }
  });
});


// let start_index = data['url'].indexOf("project") + 8;
      // let end_index = data['url'].indexOf("/", start_index);
      // console.log(start_index);
      // console.log(end_index);
      // console.log(data['url'].substr(start_index,end_index));