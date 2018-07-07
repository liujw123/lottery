<template>
    <f7-page class="forgetpasw_container">
        <f7-navbar>
            <f7-nav-left back-link=" " sliding>
            </f7-nav-left>
            <f7-nav-center><span class="title">忘记密码</span></f7-nav-center>
        </f7-navbar>
        <div class="login_content">
            <form action="">
                <div class="i_frame">
                    <div class="icon_pic">
                        <div class="pic">
                            <img src="~img/phone_icon.png">
                        </div>
                    </div>
                    <div class="ip_frame">
                        <input type="text" id="username" name="user_name" placeholder="请输入您注册的手机号">
                    </div>
                </div>
                <div class="i_frame">
                    <div class="icon_pic">
                        <div class="pic">
                            <img src="~img/r_shield.png">
                        </div>
                    </div>
                    <div class="ip_frame">
                        <input type="text" id="verificationcode" name="verificationcode" placeholder="请输入验证码">
                    </div>
                    <div class="get_code"><f7-button class="btn"><span>获取验证码</span></f7-button></div>
                </div>
                <div class="i_frame">
                    <div class="icon_pic">
                        <div class="pic">
                            <img src="~img/knock_icon.png">
                        </div>
                    </div>
                    <div class="ip_frame">
                        <input type="password" id="password" name="password" placeholder="请输入您的新密码">
                    </div>
                </div>
                <div class="i_frame">
                    <div class="icon_pic">
                        <div class="pic">
                            <img src="~img/knock_icon.png">
                        </div>
                    </div>
                    <div class="ip_frame">
                        <input type="password" id="surepassword" name="surepassword" placeholder="请再次输入您的新密码">
                    </div>
                </div>
                <div class="m_button"><input type="submit" value="提交"></div>
            </form>
        </div>
    </f7-page>
</template>

<style lang="scss">
    @import "scss/public.scss";
    .forgetpasw_container {
        position: relative;
        // background-color: $theme_color;
        .login_content {
            background-color: $white;
            padding: r(20px) r(55px) r(30px);
            margin-top: r(10px);
            box-shadow: 0 0 r(5px) #ebebeb;
            .i_frame {
                display: flex;
                height: r(78px);
                width: 100%;
                padding: r(13px) 0;
                padding-right: r(30px);
                border: r(1px) solid $border_color;
                border-radius: r(6px);
                margin-top: r(30px);
                &:nth-child(2){
                    .ip_frame{
                        width: 46%;
                    }
                    .get_code{
                        width: 38%;
                        height: 100%;
                        padding-left: r(70px);
                        margin: r(2px) 0;
                        >.button{
                            height: 100%;
                            font-size: r(23px);
                            color: $theme_color;
                            border-color: $theme_color;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    }
                }
                .icon_pic {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 16%;
                    height: 100%;
                    border-right: r(1px) solid #999;
                    .pic {
                        height: r(44px);
                        width: auto;
                        overflow: hidden;
                        img {
                            display: block;
                            height: 100%;
                        }
                    }
                }
                .ip_frame {
                    width: 84%;
                    height: 100%;
                    padding-left: r(50px);
                    input {
                        font-size: r(26px);
                        width: 100%;
                        height: 100%;
                        border: none;
                        &::-webkit-input-placeholder {
                            color: $place_color;
                        }
                    }
                }
            }
            
            .m_button {
                overflow: hidden;
                margin-top: r(110px);
                >input {
                    width: 100%;
                    height: 100%;
                    font-size: r(30px);
                    background-color: $theme_color;
                    color: $white;
                }
            }
        }
        .code_reminding{
            position: absolute;
            bottom: r(100px);
            left: 50%;
            width: r(420px);
            height: r(120px);
            margin-left: r(-210px);
            border-radius: r(7px);
            text-align: center;
            line-height: r(120px);
            font-size: r(26px);
            color: $white;
            background-color: rgba(0,0,0,.6)
        }
    }
</style>

<script>
    export default {
        data() {
            return {
                r_select: false,
            }
        },
        methods: {}
    }
</script>


   