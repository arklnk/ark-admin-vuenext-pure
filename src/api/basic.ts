import type { Menu } from '/@/router/typing'

export const Api = {
  login: '/user/login',
  captcha: '/user/login/captcha',
  info: '/user/info',
  permmenu: '/user/permmenu',
  logout: '/user/logout',
  profile: '/user/profile/info',
  avatar: '/user/avatar/generate',
  update: '/user/profile/update',
  passwd: '/user/password/update',
}

interface CaptchaImgParams {
  width?: number
  height?: number
}
interface CaptchaImgResult {
  verifyCode: string
  captchaId: string
}
export function getImageCaptcha(_params?: CaptchaImgParams): Promise<CaptchaImgResult> {
  return Promise.resolve({
    verifyCode: 'https://iph.href.lu/100x40',
    captchaId: '123456',
  })
}

interface UserLoginParams {
  account: string
  password: string
  captchaId: string
  verifyCode: string
}
interface UserLoginResult {
  token: string
}
export function userLogin(_data: UserLoginParams): Promise<Nullable<UserLoginResult>> {
  return Promise.resolve({
    token: '1234567890',
  })
}

interface UserInfoResult {
  username: string
  avatar: string
}
export function getUserInfo(): Promise<UserInfoResult> {
  return Promise.resolve({
    username: 'arklnk',
    avatar: '',
  })
}

interface PermMenuResult {
  perms: string[]
  menus: Menu[]
}
export function getPermAndMenu(): Promise<PermMenuResult> {
  return Promise.reject()
}

export function userLogout(): Promise<void> {
  return Promise.resolve()
}

interface UserProfileInfoResult {
  avatar: string
  email: string
  gender: number
  mobile: string
  nickname: string
  remark: string
  username: string
}
export function getUserProfileInfo(): Promise<UserProfileInfoResult> {
  return Promise.resolve({
    avatar: '',
    email: 'arklnk@163.com',
    gender: 0,
    mobile: '',
    nickname: '',
    remark: '',
    username: 'arklnk',
  })
}

export function generateAvatar(): Promise<{ avatarUrl: string }> {
  return Promise.resolve({
    avatarUrl: '',
  })
}

export function updateUserProfile(_data: UserProfileInfoResult) {
  // return defHttp.post({ url: Api.update, data })
}

export function updateUserPasswd(_data: { oldPassword: string; newPassword: string }) {
  // return defHttp.post({ url: Api.passwd, data })
}
