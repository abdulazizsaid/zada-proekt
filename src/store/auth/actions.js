import { method } from '@/api/method';

import { clearForLogout, setToken, setTokenTime } from '@/shared/utils/auth';
import { setItem } from '@/shared/utils/storage';


export const actions = {

  async currentUser() {
    try {
      const res = await method("auth.profile")
      if (res.success && res.data) {
        this.user = res.data;
        this.role = res.data.role;
        this.setUser(res.data);
        return res.data;
      }
      return res;
    } catch (error) {
      console.error("Foydalanuvchi ma'lumotlarini olishda xatolik:", error);
    }
  },

  async logout() {
    try {
      const res = await method("auth.logout")
      if (res.success) {
        clearForLogout();
        this.isAuth = false;
        this.user = null;
        this.role = "";
        this.$reset()
      }
      return res;
    } catch (error) {
      console.error("Chiqishda xatolik:", error);
    }
  },

  async setTokenActions(params) {

    return new Promise((resolve) => {
      setToken(params['token']);
      setTokenTime(params['expires_in']);
      resolve(true);
    });
  },

  setUser(data) {
    this.user = data;
    if (this.user) {
      this.role_name = this.user.role;
      setItem("user", this.user);
    }
  },
  setIsAuth(value) {
    this.is_auth = value;
  },

};
