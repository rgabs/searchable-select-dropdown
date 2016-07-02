'use strict';

const Vue = require('vue');

function getDropdownDataFromSelect(selectDom) {
  const dropdownOptionDoms = selectDom.options;
  let optionsArray = [];
  for (let i = 0; i < dropdownOptionDoms.length; i++) {
    optionsArray.push({
      value: dropdownOptionDoms[i].value,
      text: dropdownOptionDoms[i].text,
    });
  }
  return optionsArray;
}

function getSelectedOption(selectDom) {
  const dropdownOptionDoms = selectDom.options;
  return {
    text: dropdownOptionDoms[dropdownOptionDoms.selectedIndex].text,
    value: dropdownOptionDoms[dropdownOptionDoms.selectedIndex].value
  };
}

const searchableDropdown = Vue.extend({
  template: `
  <div class="search-container">
    <input placeholder="Please start typing.." class="search-input" @keyup="showList=true" v-model='selectedValue.text' v-on:click.stop/>
    <ul v-show='showList' class="search-list overflow-effect text-left" >
      <li class="search-name cursor" v-for="optionData in dropdownData | filterBy selectedValue.text"  v-on:click="setSelectedValue(optionData)">
        {{optionData.text}}
      </li>
    </ul>
  </div>
  `,
  methods: {
    setSelectedValue(optionData) {
      this.showList = false;
      this.selectedValue = Object.assign({}, optionData);
    },
    hideList() {
      let containsFlag = false;
      this.dropdownData.forEach((optionData) => {
        if (optionData.text === this.selectedValue.text) {
          containsFlag = true;
        }
      });
      if (!containsFlag) {
        this.selectedValue.text = '';
        this.selectedValue.value = 0;
      }
      this.showList = false;
    }
  },
  data() {
    return {
      showList: false,
      dropdownData: []
    }
  },
  props: {
    replaceWith: {
      type: String,
      required: true
    },
    selectedValue: {
      type: Object,
      default: () => {
        return {
          text: '',
          value: 0
        }
      }
    }
  },
  ready: function() {
    let selectDom = document.querySelector(this.replaceWith);
    selectDom.remove();
    if (selectDom) {
      this.dropdownData = getDropdownDataFromSelect(selectDom, this.selectedValue);
      this.selectedValue = getSelectedOption(selectDom);
    }
    document.onclick = this.hideList;
  }
});
module.exports = searchableDropdown;
