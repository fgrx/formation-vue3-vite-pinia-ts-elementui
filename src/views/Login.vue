<script setup lang="ts">
import { ref } from "vue";
import authService from "@/services/authService";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import type { IUser } from "@/interfaces/IUser";

const router = useRouter();
const authStore = useAuthStore();

const email = ref("admin@gmail.com");
const password = ref("12345");
const message = ref("");

const connectAction = async () => {
  const res = await authService.signIn(email.value, password.value);
  if (!res) {
    message.value = "Mauvais couple email/mot de passe";
  } else {
    const user: IUser = { token: res.accessToken, email: res.user.email };
    authStore.setUser(user);
    router.push({ name: "AdminValidation" });
  }
};
</script>

<template>
  <div>
    <h1>Connexion</h1>

    <el-alert
      :title="message"
      v-if="message"
      type="error"
      effect="dark"
      data-test-id="errorMessage"
    >
    </el-alert>
    <el-form @submit.prevent="connectAction">
      <el-form-item label="Adresse email">
        <el-input v-model="email" data-test-id="email" />
      </el-form-item>

      <el-form-item label="Mot de passe">
        <el-input v-model="password" type="password" data-test-id="password" />
      </el-form-item>

      <el-button
        @click="connectAction"
        native-type="submit"
        type="primary"
        data-test-id="button"
        >Connexion</el-button
      >
    </el-form>
  </div>
</template>
