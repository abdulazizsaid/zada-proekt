import { getToken } from '@/shared/utils/auth'
import { getItem } from '@/shared/utils/storage'

export const state = () => ({
  isAuth: !!getToken(), // ✅ Token bor yoki yo‘qligini tekshiramiz
  user: getItem("user") || null,
  role: getItem("user") ? getItem("user").role : "",
})
