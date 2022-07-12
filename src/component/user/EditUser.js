import { Button, TextField, Typography } from "@material-ui/core";
import React, { Component } from "react";
import ApiService from "../../ApiService";

class EditUser extends Component {

    constructor(props){
        super(props);

        this.state = {
            phone:'',
            nickname:'',
            age:'',
            membership:'',
            message:null
        }
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser = ()=> {
        ApiService.userListbyId(window.localStorage.getItem('userID'))
        // 회원 등록 버튼 클릭시 userlist에 선언되어있는 edituser 함수가 해당 id 를 locallstroage에 임시 저장함
        // 임시저장된 id(이름:userID)를 가져와 userLisetbyId의 인수로 실행
        .then(res=>{
            let user = res.date;
            this.setState({
                id: user.id,
                username: user.username,
                phone: user.phone,
                nickname: user.nickname,
                age: user.age,
                membership: user.membership
            })
        })
        .catch(err=> {
            console.log("회원정보 수정 에러", err);
        });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    modifyUser = (e) => {
        e.preventDefault();
        let user = {
            id: this.state.id,
            username : this.state.username,
            phone: this.state.phone,
            nickname: this.state.nickname,
            age: this.state.age,
            membership: this.state.membership
        }
        ApiService.editUser(user)
        .then(res=>{
            this.setState({
                message: user.nickname + '님 정보 수정 성공'
            })
            this.props.history.push('/users'); // 회원정보 수정후 리스트로 요청
        })
        .catch(err=>{
            console.log('회원정보수정 오류', err);
        })
    }

    render(){
        return(
            <div>
                <Typography variant="h4" style={style}>회원정보수정</Typography>
                <form style={FormContainer}>
                
                    <label>회원이름 : </label>
                    <TextField type='text' name="username" readOnly={true} value={this.state.username} fullWidth margin='normal'></TextField>
                
                    <label>전화번호 : </label>
                    <TextField type='text' placeholder="전화번호를 수정" name="phone"
                    onChange={this.onChange} value={this.state.phone} fullWidth margin='normal'></TextField>
                
                    <label>별병 : </label>
                    <TextField type='text' placeholder="별명을 수정" name="nickname"
                    onChange={this.onChange} value={this.state.nickname} fullWidth margin='normal'></TextField>
                
                    <label>나이 : </label>
                    <TextField type='text' placeholder="나이를 수정" name="age"
                    onChange={this.onChange} value={this.state.age} fullWidth margin='normal'></TextField>
                
                    <label>회비 : </label>
                    <TextField type='text' placeholder="회비를 수정" name="membership"
                    onChange={this.onChange} value={this.state.membership} fullWidth margin='normal'></TextField>
                
                    <Button variant='contained' color="primary" onClick={this.modifyUser}>정보수정</Button>
                </form>
            </div>
        );
    }

}

const style = {
    display:'flex',
    justifyContent: 'center'
}

const FormContainer = {
    display:'flex',
    flexFlow:'row wrap'
}

export default EditUser;