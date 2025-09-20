import { useAuthStore } from "@/store/auth";


export const actions = {
    async can(system, action) {
        const authStore = useAuthStore()
        if (authStore.user && authStore.user.rights && authStore.user.rights[system]) {
            if (action == "*") {
                return true;
            }
            if (authStore.user.rights[system]["actions"]) {
                return authStore.user.rights[system]["actions"].includes(action);
            }
        }
        return false;
    }
}