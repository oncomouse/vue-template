import { shallowMount, createLocalVue } from '@vue/test-utils';
{{#vuex}}
import Vuex from 'vuex';
import sinon from 'sinon';
{{else}}
import fetchMock from 'fetch-mock';
import { API_URL } from 'APP/api/config';
import post from 'TEST/fixtures/post.json';
{{/vuex}}
import Home from 'APP/pages/Home.vue';

{{#vuex}}
// If you read through it, this test is really strange. We don't appear to be doing very much
// (because we aren't). However, to get code coverage to 100%, we need to make sure that our event
// handlers are working, so that's what we do. When Home.vue gets more complex, we might write more
// robust tests here.
{{/vuex}}
describe('Home.vue', () => {
  const localVue = createLocalVue();
  {{#vuex}}
  localVue.use(Vuex);
  {{/vuex}}
  let wrapper;
  {{#vuex}}
  // We define a limited version of our store here, b/c we are not testing our module in this suite.
  const initialState = {
    samples: [],
    errors: [],
  };
  // Define our two actions as spies:
  const addSample = sinon.spy();
  const reset = sinon.spy();
  // Dummy store:
  const store = new Vuex.Store({
    modules: {
      samples: {
        state: { ...initialState },
        actions: {
          addSample,
          reset,
        },
        namespaced: true,
      },
    },
  });
  afterEach(() => {
    // Reset spies:
    reset.resetHistory();
    addSample.resetHistory();
    // Reset state:
    store.state.samples = { ...initialState };
  });
  {{/vuex}}
  beforeEach(() => {
    // Mount home:
    wrapper = shallowMount(Home, { store, localVue });
  });
  {{#vuex}}
  it('should trigger addSample() when first <button/> is clicked', () => {
    // Trigger the event:
    wrapper.vm.addSampleEvent();
    // When Vue updates, make sure that the appropriate action was called:
    return localVue.nextTick()
      .then(() => {
        expect(addSample).to.be.calledOnce;
      });
  });
  it('should trigger reset() when second <button/> is clicked', () => {
    // Trigger the event:
    wrapper.vm.resetEvent();
    // When Vue updates, make sure that the appropriate action was called:
    return localVue.nextTick()
      .then(() => {
        expect(reset).to.be.calledOnce;
      });
  });
  {{else}}
  it('should add post.title to vm.samples when addSampleEvent() is run', () => {
    fetchMock.mock(new RegExp(`${API_URL}/posts/[0-9]+.*$`), JSON.stringify(post), { method: 'get' });
    // Trigger the event:
    return wrapper.vm.addSampleEvent()
      .then(() => {
        expect(wrapper.vm.samples).to.have.lengthOf(1);
        expect(wrapper.vm.samples[0]).to.equal(post.title);
      });
  });
  it('should reset vm.samples to [] when resetEvent() is run', () => {
    wrapper.vm.samples = [
      post.title,
      post.title,
      post.title,
    ];
    // Trigger the event:
    wrapper.vm.resetEvent();
    // When Vue updates, make sure that the appropriate action was called:
    return localVue.nextTick()
      .then(() => {
        expect(wrapper.vm.samples).to.have.lengthOf(0);
      });
  });
  {{/vuex}}
});
