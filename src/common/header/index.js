import React  from 'react'
import { connect } from 'react-redux';

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button
} from "./style"

const Header =(props)=>{
    return (
<HeaderWrapper>
                <Logo href='/'/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavSearch>
                        
                    </NavSearch>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                    <span class="iconfont">&#x334;</span>
                    </NavItem>
                    <Addition>
                        <Button className='reg'>注册</Button>
                        <Button className='writting'>
                        <span class="iconfont">&#x652;</span>写文章</Button>
                    </Addition> 
                </Nav>
            </HeaderWrapper>
    );
}

const mapStateToProps=(state)=>{
    return {

    }
}

const mapDispathToProps = (dispatch) =>{
    return {
        
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);