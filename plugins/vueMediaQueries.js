import Vue from 'vue';
import json2mq from 'json2mq';

const VueMediaQuery = Vue => {
  if (Vue.prototype.$mq) return;

  Object.defineProperty(Vue.prototype, '$mq', {
    get: () => {
      return query => {
        if (typeof window === 'undefined') return false;
        const mq = window.matchMedia(
          json2mq(query),
        );

        return mq.matches;
      }
    },
  });
};

Vue.use(VueMediaQuery);
