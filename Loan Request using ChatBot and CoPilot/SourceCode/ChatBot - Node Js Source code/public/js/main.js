const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');


// Get username and room from URL
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

console.log({username, room})

const socket = io();
// Join chatroom
socket.emit('joinRoom', { username, room });

// Get room and users
socket.on('roomUsers', ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
});

// Message from server
socket.on('message', (message) => {
  console.log(message);
  outputMessage(message);

  // Scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

/*Send file*/
async function getBase64(file) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  return  reader.onload = function () {
      //console.log(reader.result);
      return reader.result;
  };
  reader.onerror = function (error) {
      console.log('Error: ', error);
  };

 

}

function saveBase64String(base64)
{

  var blob = new Blob(["Welcome to Websparrow.org."],
  { type: "text/plain;charset=utf-8" });
  saveAs(blob, "static.txt");
  // let a = document.createElement('a');
  // a.href = "data:application/octet-stream,"+encodeURIComponent("My DATA");
  // a.download = 'abc.txt';
  // a.click();
}

function save_content_to_file(content, filename)
{
    var dlg = false;
    with(document){
     ir=createElement('iframe');
     ir.id='ifr';
     ir.location='about.blank';
     ir.style.display='none';
     body.appendChild(ir);
      with(getElementById('ifr').contentWindow.document){
           open("text/plain", "replace");
           charset = "utf-8";
           write(content);
           close();
           document.charset = "utf-8";
           dlg = execCommand('SaveAs', false, filename+'.txt');
       }
       body.removeChild(ir);
     }
    return dlg;
}

const fileInput = document.getElementById('myfile');
fileInput.onchange = e => {
    //alert(e.target.files[0])
    var file = e.target.files[0];
    console.log(file);
    //var file = document.querySelector('#files > input[type="file"]').files[0];
 var base64= "";//getBase64(file).then();

 var reader = new FileReader();
 reader.readAsDataURL(file);
   reader.onload = function () {
     console.log(reader.result);
     base64 = reader.result.split("data:application/pdf;base64,")[1];
     var message= "Sending Salary document".concat(base64);
     socket.emit('chatMessage', message);
 };
 reader.onerror = function (error) {
     console.log('Error: ', error);
 };

//  getBase64(file).then(
//   function(value) {
//     base64 =value;
//     console.log(base64);
//   }
// );
 
  //  console.log(base64);
 //  saveBase64String(base64);
  // save_content_to_file("Hello", "C:\\test.txt");
   
    //socket.emit('chatMessage', message);
    //fs.writeFile("C:\Users\Administrator\Documents\SIKHA\AARI ChatBot\sample.jpeg", file, function (err) {
    //    if (err) {
    //        return console.log(err);
    //    }
    //    console.log("The file was saved!");
    //});
}

// Message submit
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get message text
  let msg = e.target.elements.msg.value;

  msg = msg.trim();

  if (!msg) {
    return false;
  }

  // Emit message to server
  socket.emit('chatMessage', msg);

  // Clear input
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus();
});

// Output message to DOM
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  const p = document.createElement('p');
  p.classList.add('meta');
  p.innerText = message.username;
  console.log('me '+username)
  console.log('sent '+message.username);
  if(username == message.username){
    div.classList.add('rightside');
  }else{
    div.classList.add('leftside');
  }
  p.innerHTML += `<span>${message.time}</span>`;
  div.appendChild(p);
  const para = document.createElement('p');
  para.classList.add('text');
  para.innerText = message.text;
  div.appendChild(para);
  document.querySelector('.chat-messages').appendChild(div);
}

// Add room name to DOM
function outputRoomName(room) {
  roomName.innerText = room;
}

// Add users to DOM
function outputUsers(users) {
 console.log({users})
  userList.innerHTML = '';
  users.forEach((user) => {
    const li = document.createElement('li');
    li.innerText = user.username;
    userList.appendChild(li);
  });
}

//Prompt the user before leave chat room
document.getElementById('leave-btn').addEventListener('click', () => {
  const leaveRoom = confirm('Are you sure you want to leave the chatroom?');
  if (leaveRoom) {
    window.location = '../index.html';
  } else {
  }
});