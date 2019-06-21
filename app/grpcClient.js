var PROTO_FILE_PATH = 'F:/todo-todo/demo/grpc_node_demo/proto/People.proto'; //rpotobuf 文件地址
var grpcR = require('grpc'); //引入包
var grpcService = grpcR.load(PROTO_FILE_PATH).com.todo.grpc.demo6.proto;

//创建grpc客户端
var client = new grpcService.StudentService('localhost:8899', grpcR.credentials.createInsecure());
//1.方法
client.getRealNameByUserName({username: 'zhangsan'}, function (error, respData) {
    console.log(respData);
});
