import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@material-ui/core";
import React, { Component } from "react";
import ApiService from "../../ApiService";
import CreateIcon from "@material-ui/icons/Create"
import DeleteIcon from "@material-ui/icons/Delete"


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
        window.localStorage.setItem("userID", ID); // 웹브라우저의 로컬 저장소에 임시로 id값을 저장
        this.props.history.push('/edit-user');
    }

    addUser = ()=> {
        window.localStorage.removeItem("userID");
        this.props.history.push('/add-user');
    }

    render(){
        return (
            <div>
                <Typography variant="h4" style={style}>동호회 회원 리스트</Typography>
                <Button variant="contained" color="primary" onClick={this.addUser}>회원추가</Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>회원번호</TableCell>
                            <TableCell>이름</TableCell>
                            <TableCell>전화번호</TableCell>
                            <TableCell>별명</TableCell>
                            <TableCell>나이</TableCell>
                            <TableCell>회비</TableCell>
                            <TableCell>정보수정</TableCell>
                            <TableCell>회원탈퇴</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.users.map(user=>
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>{user.nickname}</TableCell>
                                <TableCell>{user.age}</TableCell>
                                <TableCell>{user.membership}</TableCell>
                                <TableCell>
                                    <Button onClick={()=> this.editUser(user.id)}>
                                        <CreateIcon></CreateIcon>
                                    </Button>
                                    <Button onClick={()=> this.deleteUser(user.id)}>
                                        <DeleteIcon></DeleteIcon>    
                                    </Button>                            
                                </TableCell>    
                            </TableRow>   
                        )}
                    </TableBody>
                </Table>
            </div>  
        );
    }
    
}

const style = {
    display:'flex',
    justifyContent: 'center'
}

export default UserList;