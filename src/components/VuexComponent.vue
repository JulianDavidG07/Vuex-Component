<template>
  <div>
    <div class="bg-indigo-200 p-4">
      <ul>
        <li v-for="(element, index) of elements" :key="element.id">
          <div class="text-center">
            {{ element.name }} 
          </div>         
          <div class="text-center pb-5">
            <span class="block">{{ element.amount }}</span>
            <button class="px-3 py-2 mr-2 rounded-lg focus:outline-none"
                    :class="[element.amount === 0 ? 'opacity-50 pointer-events-none' : 'bg-red-500 ']"
                    @click="quitElement(index)"
                  >-
            </button>

            <button class="px-3 py-2 rounded-lg focus:outline-none" 
                    :class="[element.amount === 4 ? 'opacity-50 pointer-events-none' : 'bg-green-500 ']"
                    @click="addElement(index)"
                  >+
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'HelloWorld',

  computed: {
    ...mapState(['elements'])
  },

  methods: {
    ...mapMutations(['addElement', 'quitElement'])
    },
  };

</script>
