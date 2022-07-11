import axios from "axios";

const base_url = "http://localhost:8888/users";  // 스프링부트 서버의 기본url

class ApiService {

    userList(){
        return axios.get(base_url);
    };

    userListbyId(userID){
        return axios.get(base_url + '/' + userID);
    };
    
    deleteUser(userID){
        return axios.delete(base_url + '/' + userID);
    };

    addUser(user){
        return axios.post(base_url, user);
    };

    editUser(user){
        return axios.put(base_url + '/' + user.id, user);
    };

};

export default new ApiService();