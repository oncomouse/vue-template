<template>
  <div>
    <sample-view :samples="samples"/>
    <Button :action="addSampleEvent">Click Me</Button>
    <Button :action="resetEvent">Reset List</Button>
  </div>
</template>

<script>
{{#vuex}}
import { mapState, mapActions } from 'vuex';
{{else}}
import { append } from 'ramda';
import PostAPI from '../api/Post';
{{/vuex}}
import SampleView from '../components/SampleView.vue';
import Button from '../components/Button.vue';

export default {
  components: { SampleView, Button },
  {{#vuex}}
  computed: mapState({
    samples: state => state.samples.samples,
  }),
  methods: {
    ...mapActions({
      addSample: 'samples/addSample',
      reset: 'samples/reset',
    }),
    /**
     * Event handler for triggering a reset.
     * @public
     */
    resetEvent() {
      this.reset();
    },
    /**
     * Event handler for requesting a new sample to be added.
     * @public
     */
    addSampleEvent() {
      this.addSample();
    },
  },
  {{else}}
  data: () => ({
    samples: [],
  }),
  methods: {
    /**
     * Event handler for triggering a reset.
     * @public
     */
    resetEvent() {
      this.samples = [];
    },
    /**
     * Event handler for requesting a new sample to be added.
     * @public
     */
    addSampleEvent() {
      const randomPostID = 1 + Math.floor(Math.random() * MAX_POSTS);
      return PostAPI.get(randomPostID)
        .then((results) => {
          this.samples = append(results.entities.posts[results.result].title, this.samples);
        });
    },
  },
  {{/vuex}}
};
</script>
