const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/spotify-app'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/spotify-app/index.html'));
});
var server_port = process.env.PORT || 5000;
var server_host = process.env.HOST || '0.0.0.0';
app.listen(server_port, server_host);