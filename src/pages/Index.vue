<template>
  <q-page class="bg-blue-grey-1">
    <!-- relleno -->
    <div class="row">
      <div class="col-auto justify-center self-end q-pa-md">
      </div>
    </div>
    <!-- question section -->
    <div class="row q-pa-md">
      <div class="col-md-auto">
        <q-btn class="buttonQ"
          size="30px"
          color="green"
          label="Toss Up" />
      </div>
      <div class="col-md-10 self-center">
        <q-toolbar-title class="title">
          QID #001: What color is the sky?
        </q-toolbar-title>
      </div>
    </div>
    <!-- MAIN CONTENT - EQUIPMENT INFORMATION -->
    <div class="row q-pa-md"
      style="height: 600px">
      <!-- first team column -->
      <div class="col-md-5 team1 bg-white">
        <!-- title - Team name -->
        <div class="row q-pa-md">
          <div class="col-md-2">
            <q-toolbar-title class="text-h4 text-white text-center bg-accent">
              A-Team:
            </q-toolbar-title>
          </div>
          <div class="col-md-10">
            <q-toolbar-title class="text-h4 text-left bg-accent text-white text-bold">
              Nombre equipo A
            </q-toolbar-title>
          </div>
        </div>
        <!-- Score -->
        <q-toolbar-title class="title1 text-h3 text-center text-primary text-bold">
          Score
        </q-toolbar-title>
        <q-btn size="22px"
          class="score q-px-xl q-py-xs"
          align="center"
          outline
          text-color="primary"
          label="10000" />
        <!-- Toolbar button -->
        <q-toolbar class="marks">

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
          <q-btn size="22px"
            class="buttonF q-px-md q-py-xs"
            align="center"
            outline
            text-color="grey-8"
            label="Null" />
          <q-space></q-space>
          <q-toolbar-title class="title2 text-h4 text-primary text-right">
            Bonus:
          </q-toolbar-title>
          <q-input outlined
            v-model="text"
            color="primary" />
        </q-toolbar>
        <!-- Save -->
        <q-toolbar class="marks">
          <q-space></q-space>
          <q-btn color="positive"
            class="buttonG">
            <q-icon left
              size="50px"
              name="save" />
            <div>Record</div>
          </q-btn>
        </q-toolbar>
      </div>
      <!-- second  team column -->
      <div class="col-md-5 team bg-white">
        <!-- title - Team name -->
        <div class="row q-pa-md">
          <div class="col-md-2 bg-secondary">
            <q-toolbar-title class="text-h4 text-white text-center">
              B-Team:
            </q-toolbar-title>
          </div>
          <div class="col-md-10">
            <q-toolbar-title class="text-h4 text-left text-white text-bold bg-secondary">
              Nombre equipo B
            </q-toolbar-title>
          </div>
        </div>
        <!-- Score -->
        <q-toolbar-title class="title1 text-h3 text-center text-secondary text-bold">
          Score
        </q-toolbar-title>
        <q-btn size="22px"
          class="score q-px-xl q-py-xs"
          align="center"
          outline
          text-color="secondary"
          label="10000" />
        <!-- Toolbar button -->
        <q-toolbar class="marks">

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
          <q-btn size="22px"
            class="buttonF q-px-md q-py-xs"
            align="center"
            outline
            text-color="grey-8"
            label="Null" />
          <q-space></q-space>
          <q-toolbar-title class="title2 text-h4 text-secondary text-right">
            Bonus:
          </q-toolbar-title>
          <q-input outlined
            v-model="text"
            color="secondary" />
        </q-toolbar>
        <!-- Save -->
        <q-toolbar class="marks">
          <q-space></q-space>
          <q-btn color="positive"
            class="buttonG">
            <q-icon left
              size="50px"
              name="save" />
            <div>Record</div>
          </q-btn>
        </q-toolbar>
      </div>
    </div>
  </q-page>
</template>

<style>
.title {
  background-color: white;
  padding: 20px;
  margin-inline-start: 10px;
}

.buttonQ {
  margin-inline-start: 40px;
}
.score {
  margin-inline-start: 355px;
  margin-top: 50px;
}
.title1 {
  margin-top: 30px;
}
.marks {
  margin-top: 70px;
}
.buttonF {
  margin-inline-start: 10px;
}
.buttonG {
  margin-inline-start: 10px;
}
.team {
  margin-inline-start: 150px;
}
.team1 {
  margin-inline-start: 40px;
}
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
