<template>
    <f7-page class="login_container">
        <f7-navbar>
            <f7-nav-left back-link=" "  sliding>
            </f7-nav-left>
            <f7-nav-center><span class="title">登录</span></f7-nav-center>
            <f7-nav-right><f7-link href="/register/">注册</f7-link></f7-nav-right>
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
                            <img src="~img/knock_icon.png">
                        </div>
                    </div>
                    <div class="ip_frame">
                        <input type="password" id="password" name="password" placeholder="请输入您的密码">
                    </div>
                </div>
                <div class="password_control">
                    <div class="remember">
                        <input style="display:none;" type="checkbox" id="remember" name="rememer" v-model="r_select">
                        <label for="remember" class="select"><div><img src="~img/l_true.png" :class="{img_hid:r_select}"></div><span>记住密码</span></label>
                    </div>
                    <div class="forget">
                        <f7-link style="color:#f34234" href="/forgetpassword/">忘记密码？</f7-link>
                        
                    </div>
                </div>
                <div class="m_button"><input type="submit" value="登录"></div>
            </form>
        </div>
    </f7-page>
</template>

<style lang="scss">
    @import "scss/public.scss";
    .login_container {
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
                border: r(1px) solid $border_color;
                border-radius: r(6px);
                margin-top: r(30px);
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
                    padding: 0 r(50px);
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
            .password_control {
                padding: r(20px) r(20px) 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                >div {
                    color: $theme_color;
                }
                .select {
                    display: flex;
                    align-items: center;
                    >div {
                        margin-right: r(20px);
                        display: inline-block;
                        width: r(24px);
                        height: r(24px);
                        background-color: $theme_color;
                        border-radius: 3px;
                        overflow: hidden;
                        padding: r(5px) r(3px);
                        img {
                            width: 100%;
                            height: 100%;
                            display: none;
                        }
                        .img_hid {
                            display: block;
                        }
                    }
                }
            }
            .m_button {
                overflow: hidden;
                >input {
                    width: 100%;
                    height: 100%;
                    font-size: r(30px);
                    background-color: $theme_color;
                    color: $white;
                }
            }
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


   