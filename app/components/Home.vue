<template>
  <Page class="page">
    <ActionBar class="action-bar" title="NSVue Axios"/>

    <StackLayout>
      <Label text="Hello world !" />
      <Button text="Get from URL" @tap="axiosGet"/>
      <Button text="Post JSON" @tap="axiosPost" />

      <Label textWrap="true">
        <FormattedString>
          <Span text="Data :" />
          <Span :text="data" />
        </FormattedString>
      </Label>
    </StackLayout>

  </Page>
</template>

<script>
export default {
  data() {
    return {
      data: ''
    }
  },
  methods: {
    axiosGet() {
        console.dir('Doing a get')
      this.axios.get('http://78eff9e6.ngrok.io/api/cars')
        .then((response) => {
          console.dir(response.data)
          this.data = JSON.stringify(response.data)
        }).catch((err)=>{
          console.log(err)
        })
    },
    axiosPost() {
      this.axios.post('https://httpbin.org/post',
        {
          headers: { "Content-Type": "application/json" },
          body: {
            foo:'bar',
            one:'two'
          }
        })
        .then((response) => {
          console.dir(response.data)
          this.data = JSON.stringify(response.data)
        }).catch((err)=>{
          console.log(err)
        })
    }
  }
}
</script>

