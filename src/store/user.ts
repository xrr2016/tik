import { defineStore } from "pinia"
import { Message, Modal } from '@arco-design/web-vue'
import { removeToken, setToken } from '../utils/auth';
import { createVNode } from 'vue';
import { add, CreateEnvironmentDto } from '../api/environment';
import { getMyInfo, login, LoginClientUserDto, MyInfoDto, updateUserInfo } from './../api/user';

interface UserInfo {
  username: string
  userId: string
  nickName: string
  avatarUrl: string
  gameAvatar: string
  email: string
  phone: string
  environment: string
  summonerId: string
  summonerName: string
  wxOpenId: string
  expiration: string
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserInfo => {
    return {
      username: '',
      userId: '',
      nickName: '',
      gameAvatar: '',
      avatarUrl: '',
      email: '',
      phone: '',
      environment: '',
      summonerId: '',
      summonerName: '',
      wxOpenId: '',
      expiration: '',
    }
  },
  actions: {
    async userLogin(loginForm: LoginClientUserDto) {
      const res = await login(loginForm)
      const { token, userinfo } = res.data
      this.userId = userinfo.userId
      this.username = userinfo.username
      this.nickName = userinfo.nickName
      this.avatarUrl = userinfo.avatarUrl
      this.email = userinfo.email
      this.phone = userinfo.phone
      this.wxOpenId = userinfo.wxOpenId
      Message.success('登入成功，数据加载中...')
      setToken(token)
    },
    userLogout() {
      Modal.error({
        title: '用户账号控制',
        content: '是否确定退出当前账号？',
        closable: true,
        okText: '确定',
        cancelText: '取消',
        simple: true,
        hideCancel: false,
        async onOk() {
          removeToken()
          window.location.reload()
        },
        onClose() {},
      })
    },
    async userInfo(data: MyInfoDto, showMessage: boolean = true) {
      const res = await getMyInfo(data)
      this.username = res.data.username
      this.userId = res.data.userId
      this.nickName = res.data.nickName
      this.avatarUrl = res.data.avatarUrl
      this.email = res.data.email
      this.phone = res.data.phone
      this.wxOpenId = res.data.wxOpenId
      if (showMessage) {
        Message.success(`欢迎回来：${this.nickName}`)
      }
    },
    async registerEnvironment() {
      const data: CreateEnvironmentDto = {
        summonerName: this.summonerName,
        environment: this.environment,
        summonerId: this.summonerId,
      }
      await add(data)
    },
    async updateUser() {
      await updateUserInfo({
        nickName: this.nickName,
        email: this.email,
        phone: this.phone,
      })
    }
  }

})