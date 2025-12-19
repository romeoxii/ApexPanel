<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { showToast } from '@/services/toastServices'
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userEmail = ref('')
const userPassword = ref('')
const userStore = useUserStore()
const signingUp = ref(false)

const handleSignup = async () => {
  signingUp.value = true
  try {
    const data = await userStore.signupUser(userEmail.value, userPassword.value)

    if (data) {
      showToast('signup success', 'success')
      router.push('/')
    }
  } catch (error) {
    showToast(`${error.message}`, 'failed')
  } finally {
    signingUp.value = false
  }
}
</script>

<template>
  <div
    class="w-[90%] sm:w-[60%] lg:w-[30%] min-h-44 bg-white border border-neutral-200 p-2 rounded-2xl"
  >
    <form
      @submit.prevent="handleSignup"
      class="w-full h-full flex flex-col items-center p-2 space-y-10"
    >
      <div class="w-full text-center">
        <h1 class="text-2xl sm:text-3xl font-medium text-neutral-600">Welcome to Apexpanel</h1>
        <p class="text-xs text-neutral-500"><i>Create an account to get started.</i></p>
      </div>
      <div class="w-full flex flex-col space-y-5">
        <div class="flex flex-col space-y-2 w-full">
          <label class="text-sm text-neutral-700" for="userEmail">Email *</label
          ><input
            type="email"
            id="userEmail"
            v-model="userEmail"
            required
            class="w-full p-2 outline outline-neutral-300 rounded-md"
          />
        </div>
        <div class="flex flex-col space-y-2 w-full">
          <label class="text-sm text-neutral-700" for="userPassword">Password *</label
          ><input
            type="password"
            id="userPassword"
            v-model="userPassword"
            required
            class="w-full p-2 outline outline-neutral-300 rounded-md"
          />
        </div>
      </div>
      <button
        type="submit"
        class="w-full p-2 bg-neutral-200 hover:bg-neutral-100 border border-neutral-300 rounded-md text-neutral-700"
        :disabled="signingUp"
      >
        {{ signingUp ? 'Signing up...' : 'Create account' }}
      </button>
      <p class="text-xs text-neutral-600">
        Already a user?<RouterLink to="/auth/login" class="underline cursor-pointer"
          ><i>Click here to login</i></RouterLink
        >
      </p>
    </form>
  </div>
</template>
