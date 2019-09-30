    <q-drawer side="right"
      :width="800"
      :breakpoint="1000"
      :mini-width="20"
      :mini="!rightDrawerOpen || miniState"
      @click.capture="drawerClick"
      v-model="rightDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2">
      <i> </i>
      <div class="q-pa-md"
        <div>
          <q-toolbar-title bordered
            class="q-mb-md text-h6 text-primary">
            Regular round: 1
          </q-toolbar-title>
        </div>
        <q-btn  class="full-width q-pa-md" align="left"
        outline
        size="25px"
          text-color="primary"
          label="ddddddddddddddd" />
        <div>
          <q-table class="my-sticky-header-table"
            title="Regular round: 1"
            :data="data"
            :columns="columns"
            row-key="name"
            color="primary" />
        </div>

                <div class="row q-pa-md">
          <div class="col-md-3 bg-white">
            <q-btn class="buttonG"
              size="22px"
              color="green"
              label="Correcto" />
          </div>
          <div class="col-md-3">
            <q-btn class="buttonF"
              size="22px"
              color="blue"
              label="Icorrecto" />
          </div>
          <div class="col-md-3 bg-white">
            <q-toolbar-title class="title2 text-h4 text-right">
              Bonus:
            </q-toolbar-title>
          </div>
          <div class="col-md-3 self-center">
            <q-input outlined
              v-model="text"
              color="grey" />
          </div>
        </div>
      </div>
    </q-drawer>
