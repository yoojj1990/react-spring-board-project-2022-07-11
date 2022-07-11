import React from "react";

class AddUser extends Component {

    constructor(props){
        super(props);
        this.state ={
            username:'',
            phone:'',
            nickname:'',
            age:'',
            membership:'',
            message:null
        }
    }

    onChange =(e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return (
            <div>
                <h2>신규 회원 등록</h2>
                <form>
                    <div>
                        <label>회원이름 : </label>
                        <input type='text' placeholder="이름을 실명으로 입력해주세요" name="username"
                        onChange={this.onChange} value={this.state.username}></input>
                    </div>
                    <div>
                        <label>전화번호 : </label>
                        <input type='text' placeholder="전화번호를 '-'없이 숫자만 입력해주세요" name="phone"
                        onChange={this.onChange} value={this.state.phone}></input>
                    </div>
                    <div>
                        <label>별병 : </label>
                        <input type='text' placeholder="별명을 입력해주세요" name="nickname"
                        onChange={this.onChange} value={this.state.nickname}></input>
                    </div>
                    <div>
                        <label>나이 : </label>
                        <input type='text' placeholder="나이를 입력해주세요" name="age"
                        onChange={this.onChange} value={this.state.age}></input>
                    </div>
                    <div>
                        <label>회비 : </label>
                        <input type='text' placeholder="회비를 만원단위로 입력해주세요" name="membership"
                        onChange={this.onChange} value={this.state.membership}></input>
                    </div>
                    <button>회원등록 저장</button>
                </form>
            </div>
        );
    }
};

export default AddUser;