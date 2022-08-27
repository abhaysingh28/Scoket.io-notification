const io = require( "socket.io" )();
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    console.log( "A user connected"  );
    socket.on("comment-added",(data)=>{
        console.log(data);
        // io.emit("notify everyone",{user : data.user,comment : data.comment});
        io.emit("notify-everyone",{user : data.user,comment : data.comment});
    })
    
});

// end of socket.io logic

module.exports = socketapi;