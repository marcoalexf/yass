<template>
    <div>
        Login
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import firebase from 'firebase';
import { useRouter } from 'vue-router';
import { auth, googleProvider } from '../../../firebase-config';

export default defineComponent({
    name: 'Login',
    mounted: () => {
        const router = useRouter();
        auth
        .signInWithPopup(googleProvider)
        .then((result) => {
            const credential = result.credential as firebase.auth.OAuthCredential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = credential.accessToken;
            // The signed-in user info.
            const { user } = result;
            localStorage.setItem('user', JSON.stringify(user));
            // TODO: SECURITY RISK. FOR DEMO ONLY
            localStorage.setItem('token', JSON.stringify(token));
            router.push('/');
        });
    },
})
</script>

<style>

</style>
