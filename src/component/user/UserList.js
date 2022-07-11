import React, { Component } from "react";
import ApiService from "../../ApiService";

class UserList extends Component {

    constructor(props){
        super(props);

        this.state = {
            users: [],
            message: null
        }
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList = ()=> {
        ApiService.userList()
        .then(res => {
            this.setState({
                users : res.data
            });
        })
        .catch(err => {
            console.log('List Error!', err);
        })
    }

    deleteUser = (userID)=> {
        ApiService.deleteUser(userID)
        .then(res => {
            this.setState({
                messages: '회원 탈퇴(삭제) 성공'
            });
            this.setState({
                users : this.state.users.filter(user => user.id !== userID) // 회원삭제 -> 회원 아이디와 같지 않은 원소만 삽입
            });
        })   
        .catch(err => {
            console.log('회원 삭제 에러!', err);
        })        
    }

    editUser = (ID)=> {
        window.localStorage.setItem("userID", ID);
        this.props.history.push('/edit-user');
    }

    addUser = ()=> {
        window.localStorage.removeItem("userID", ID);
        this.props.history.push('/add-user');
    }

    render(){
        return (
            <div>
                <h2>동호회 회원 리스트</h2>
                <button onClick={this.addUser}>회원추가</button>
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>전화번호</th>
                            <th>별명</th>
                            <th>나이</th>
                            <th>회비</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user=>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.phone}</td>
                                <td>{user.nickname}</td>
                                <td>{user.age}</td>
                                <td>{user.membership}</td>
                                <td>
                                    <button onClick={()=> this.editUser(user.id)}>수정</button>
                                    <button onClick={()=> this.deleteUser(user.id)}>삭제</button>                            
                                </td>    
                            </tr>   
                        )}
                    </tbody>
                </table>
            </div>  
        );
    }
    
}

export default UserList;