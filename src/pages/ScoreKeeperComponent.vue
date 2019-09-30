<template>
  <q-page class="bg-blue-grey-1">
    <div class="q-pa-md">
      <div class="row q-pa-md justify-center">
        <div class="col-md-auto">
          <q-btn class="buttonQ"
            size="30px"
            color="green"
            label="Toss Up"/>
        </div>
        <div class="q-ml-sm col-lg-10 col-md-10 col-sm-8 col-xs-8 self-center">
          <q-toolbar-title class="title">
            QID #001: What color is the sky?
          </q-toolbar-title>
        </div>
      </div>
      <div class="row q-pa-md justify-around">
        <!-- first team column -->
        <div class="col-md-5 q-mt-lg bg-white">
          <!-- title - Team name -->
          <div class="row q-pa-md">
            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-4">
              <q-toolbar-title class="text-h4 text-white text-center bg-accent">
                A-Team:
              </q-toolbar-title>
            </div>
            <div class="col-lg-9 col-md-8 col-sm-8 col-xs-8">
              <q-toolbar-title class="text-h4 text-left bg-accent text-white text-bold">
                Nombre equipo A
              </q-toolbar-title>
            </div>
          </div>
          <div class="row q-pa-md justify-center">
            <div class="col-12">
              <q-toolbar-title class="title1 text-h3 text-center text-primary text-bold">
                Score
              </q-toolbar-title>
            </div>
            <div class="col-xl-3 col-lg-5 col-md-6 col-sm-5 col-xs-6">
              <q-btn size="50px"
                class="score q-px-xl q-py-xs"
                align="center"
                outline
                text-color="primary"
                label="10000"/>
            </div>
          </div>
          <div class="row q-pa-md justify-center">
            <div class="col-lg-6 col-md-7">
              <q-btn color="positive"
                class="buttonG">
                <q-icon center
                  size="50px"
                  name="check" />
              </q-btn>
              <q-btn color="negative"
                class="buttonF">
                <q-icon center
                  size="50px"
                  name="close" />
              </q-btn>
            </div>
            <div class="col-lg-6 col-md-5 col-sm-8 col-xs-8">
              <q-input outlined
                type="number"
                v-model="text"
                class="bonus"
                placeholder="Bonus"
                color="primary"/>
            </div>
          </div>
        </div>
        <!-- first team column -->
        <div class="col-md-5 q-mt-lg bg-white">
          <!-- title - Team name -->
          <div class="row q-pa-md">
            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-4">
              <q-toolbar-title class="text-h4 text-white text-center bg-accent">
                A-Team:
              </q-toolbar-title>
            </div>
            <div class="col-lg-9 col-md-8 col-sm-8 col-xs-8">
              <q-toolbar-title class="text-h4 text-left bg-accent text-white text-bold">
                Nombre equipo A
              </q-toolbar-title>
            </div>
          </div>
          <div class="row q-pa-md justify-center">
            <div class="col-12">
              <q-toolbar-title class="title1 text-h3 text-center text-primary text-bold">
                Score
              </q-toolbar-title>
            </div>
            <div class="col-xl-3 col-lg-5 col-md-6 col-sm-5 col-xs-6">
              <q-btn size="50px"
                class="score q-px-xl q-py-xs"
                align="center"
                outline
                text-color="primary"
                label="10000"/>
            </div>
          </div>
          <div class="row q-pa-md justify-center">
            <div class="col-lg-6 col-md-7">
              <q-btn color="positive"
                class="buttonG">
                <q-icon center
                  size="50px"
                  name="check" />
              </q-btn>
              <q-btn color="negative"
                class="buttonF">
                <q-icon center
                  size="50px"
                  name="close" />
              </q-btn>
            </div>
            <div class="col-lg-6 col-md-5 col-sm-8 col-xs-8">
              <q-input outlined
                v-model="text"
                type="number"
                class="bonus"
                placeholder="Bonus"
                color="primary"/>
            </div>
          </div>
        </div>
      </div>
      <div class="row q-pa-md justify-center">
        <div class="col-auto">
          <!-- Save -->
          <q-btn color="positive"
            class="buttonG"
            size="30px">
            <q-icon left
              size="50px"
              name="save" />
              <span>Record</span>
          </q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
.title {
  background-color: white;
  padding: 20px;
}
.title1, .score {
  margin-top: 30px;
}
.buttonG, .buttonF {
  margin-top: 10px;
  margin-left: 10px;
}
.bonus {
  font-size: 20px;
}
</style>

<script>
export default {
  name: 'ScoreKeeperComponent'
}
</script>
