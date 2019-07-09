import Vue from 'vue';

import $ from 'jquery';
import '@progress/kendo-ui';
import { Scheduler, SchedulerResource, SchedulerView, SchedulerInstaller } from '@progress/kendo-scheduler-vue-wrapper';
import JSZip from 'jszip';

Vue.use(SchedulerInstaller);

new Vue({
    el: "#vueapp",
    data: {
        date: new Date('2018/6/6'),
        localDataSource: [
            {
              id: 1,
              start: new Date("2018/6/6 08:00 AM"),
              end: new Date("2018/6/6 09:00 AM"),
              title: "Interview"
            },
            {
              id: 2,
              start: new Date("2018/6/6 08:00 AM"),
              end: new Date("2018/6/6 09:00 AM"),
              title: "Meeting"
            }
        ]
    }
})
