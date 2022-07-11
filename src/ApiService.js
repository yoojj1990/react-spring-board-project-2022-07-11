import axios from "axios";

const base_url = "http://localhost:8888/users";  // 스프링부트 서버의 기본url

class ApiService {

    userList(){  // 전체 회원 리스트 가져오기
        return axios.get(base_url);
    };

    userListbyId(userID){  // 특정 아이디 회원정보 가져오기
        return axios.get(base_url + '/' + userID);
    };
    
    deleteUser(userID){  // 특정 아이디 회원 정보 삭제
        return axios.delete(base_url + '/' + userID);
    };

    addUser(user){  // 새로운 회원 등록
        return axios.post(base_url, user);
    };

    editUser(user){  // 회원 정보 수정
        return axios.put(base_url + '/' + user.id, user);
    };

};

export default new ApiService();