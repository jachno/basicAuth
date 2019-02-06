<template>
    <Page>
        <FlexboxLayout class="page">
            <Image class="logo" src=""/>
            <StackLayout class="form">
                <StackLayout class="input-field" marginBottom="25">
                    <TextField class="input" hint="Email" keyboardType="email" autocorrect="false"
                               autocapitalizationType="none" v-model="user.email"
                               returnKeyType="next" @returnPress="focusPassword" fontSize="18"/>
                    <StackLayout class="hr-light"/>
                </StackLayout>

                <StackLayout class="input-field" marginBottom="25">
                    <TextField ref="password" class="input" hint="Password" secure="true" v-model="user.password"
                               :returnKeyType="isLoggingIn ? 'done' : 'next'"
                               @returnPress="focusConfirmPassword" fontSize="18"/>
                    <StackLayout class="hr-light"/>
                </StackLayout>

                <StackLayout v-show="!isLoggingIn" class="input-field">
                    <TextField ref="confirmPassword" class="input" hint="Confirm password" secure="true"
                               v-model="user.confirmPassword" returnKeyType="done"
                               fontSize="18"/>
                    <StackLayout class="hr-light"/>
                </StackLayout>
                <TextField class="input" hint="Email" keyboardType="email" autocorrect="false"
                           autocapitalizationType="none" v-model="submitting"
                           returnKeyType="next" @returnPress="focusPassword" fontSize="18"/>
                <Button :text="isLoggingIn ? 'Log In' : 'Sign Up'" @tap="submit" class="btn btn-primary m-t-20"/>
                <Label v-show="isLoggingIn" text="Forgot your password?" class="login-label" @tap="forgotPassword"/>
            </StackLayout>

            <Label class="login-label sign-up-label" @tap="toggleForm">
                <FormattedString>
                    <Span :text="isLoggingIn ? 'Don’t have an account1? ' : 'Back to Login'"/>
                    <Span :text="isLoggingIn ? 'Sign up' : ''" class="bold"/>
                </FormattedString>
            </Label>
        </FlexboxLayout>
    </Page>
</template>

<script>

    export default {
        data() {
            return {
                isLoggingIn: true,
                submitting: true,
                user: {
                    email: "email@email.com",
                    password: "password",
                    confirmPassword: "foo"
                }

            }
        },
        methods:{
            submit()
                { this.axios.post('https://backendauth.free.beeceptor.com/api/login',this.user)
                .then((response) => {
                    console.log('Detected as a success')
                    console.log(response.status)
                    console.log(response)
                    console.log(response.data.success.token)
                    this.data = JSON.stringify(response.data)
                    this.$navigateTo(this.$router['home'])
                }).catch((err)=>{
                    if (err.response.status === 401) {
                        console.log(err)
                    }
                    else
                    {
                        console.log(err.response)
                    }

                    })
                this.submitting = 'form clicked'
            }
        }
    };
</script>


<style scoped>
    .page {
        align-items: center;
        flex-direction: column;
    }

    .form {
        margin-left: 30;
        margin-right: 30;
        vertical-align: middle;
    }

    .logo {
        height: 200;

    }

    .header {
        horizontal-align: center;
        font-size: 25;
        font-weight: 600;
        margin-bottom: 10;
        text-align: center;
        color: #D51A1A;
    }

    .input-field {
        margin-bottom: 25;
    }

    .input {
        font-size: 18;
        placeholder-color: #A8A8A8;
    }

    .input-field .input {
        font-size: 54;
    }

    .btn-primary {
        height: 50;
        margin: 30 5 15 5;
        background-color: #D51A1A;
        border-radius: 5;
        font-size: 20;
        font-weight: 600;
    }

    .login-label {
        horizontal-align: center;
        color: #A8A8A8;
        font-size: 16;
    }

    .sign-up-label {
        margin-bottom: 20;
    }

    .bold {
        color: #000000;
    }
</style>
