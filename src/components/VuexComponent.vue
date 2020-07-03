<template>
  <div class="flex">
    <div class="select-none bg-indigo-200 p-4 flex flex-row flex flex-col">
        <ul>
          <li v-for="(element, index) of elements" :key="element.id"  class="bg-orange-300 w-24 mb-3 border border-black rounded-lg">
  
                <div class="capitalize px-2">{{ element.name }} :</div>
  
                <div class="font-bold ml-2 text-center">{{ element.amount }}</div>
  
                <div class="p-2 block">
                  <button class="px-3 py-2 mr-2 rounded-lg focus:outline-none border border-gray-300"
                          :class="[element.amount === 0 ? 'opacity-50 pointer-events-none' : 'bg-red-500 ']"
                          @click="quitElement(index)"
                        >-
                  </button>
      
                  <button class="px-3 py-2 rounded-lg focus:outline-none border border-gray-300" 
                          :class="[element.amount === 4 ? 'opacity-50 pointer-events-none' : 'bg-green-500 ']"
                          @click="addElement(index)"
                        >+
                  </button>
                </div>
  
          </li>
        </ul>
    </div>
  
    <div>
      hh
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
