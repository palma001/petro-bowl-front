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
        <div class="col-md-5 col-sm-10 q-mt-lg bg-white" v-for="(team, index) in teams" :key="team.name">
          <!-- title - Team name -->
          <div class="row q-pa-md">
            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-4">
              <q-toolbar-title class="text-h4 text-white text-center bg-accent">
                {{ (index === 0) ? 'A' : 'B'}}-Team:
              </q-toolbar-title>
            </div>
            <div class="col-lg-9 col-md-8 col-sm-8 col-xs-8">
              <q-toolbar-title class="text-h4 text-left bg-accent text-white text-bold">
                {{team.name}}
              </q-toolbar-title>
            </div>
          </div>
          <div class="row q-pa-md justify-center">
            <div class="col-12">
              <q-toolbar-title class="title1 text-h3 text-center text-primary text-bold">
                Score
              </q-toolbar-title>
            </div>
            <div class="col-auto">
              <q-btn size="50px"
                class="score q-px-xl q-py-xs"
                align="center"
                outline
                text-color="primary"
                :label="score"/>
            </div>
          </div>
          <div class="row q-pa-md justify-center">
            <div class="col-lg-6 col-md-7">
              <q-btn color="positive"
                :class="classBtn">
                <q-icon center
                  size="50px"
                  name="check"
                  :disabled="status.buttonG"
                  @click="point(10)"/>
              </q-btn>
              <q-btn color="negative"
                :class="classBtn">
                <q-icon center
                  size="50px"
                  name="close"
                  :disabled="status.buttonF"
                  @click="point(-5)"/>
              </q-btn>
            </div>
            <div class="col-lg-6 col-md-5 col-sm-8 col-xs-8">
              <q-input outlined
                type="number"
                class="bonus"
                placeholder="Bonus"
                v-model="team.name"
                color="primary"
                :disable="status.bonus"/>
            </div>
          </div>
        </div>
      </div>
      <div class="row q-pa-md justify-center">
        <div class="col-auto">
          <!-- Save -->
          <q-btn color="positive"
            class="buttonG"
            size="30px"
            @click="saveRecords">
            <q-icon left
              size="50px"
              name="save"/>
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
.buttonF {
  margin-top: 10px;
  margin-left: 10px;
}
.bonus {
  font-size: 20px;
}
</style>

<script>
export default {
  name: 'ScoreKeeperComponent',
  data () {
    return {
      status: {
        buttonF: false,
        buttonG: false,
        bonus: false
      },
      classBtn: 'buttonF',
      ponitQuestion: 0,
      score: 2,
      getConfrontations: [],
      teams: [
        {
          teamId: 1,
          name: 'UDO'
        },
        {
          teamId: 2,
          name: 'IUTA'
        }
      ]
    }
  },
  created () {
    this.getServices()
  },
  methods: {
    point (point) {
      if (point > 0 && !this.status.buttonG) {
        this.changeStatus(1)
        this.ponitQuestion = point
        this.score = 1
      } else if (point < 0 && !this.status.buttonF) {
        this.changeStatus(0)
        this.ponitQuestion = point
      }
    },
    saveRecords () {
      console.log(0)
    },
    changeStatus (data) {
      if (data > 0) {
        this.status.buttonF = !this.status.buttonF
        this.status.bonus = !this.status.bonus
      } else {
        this.status.buttonG = !this.status.buttonG
        this.status.bonus = !this.status.bonus
      }
    },
    getServices () {
      console.log(this)
    }
  }
}
</script>
