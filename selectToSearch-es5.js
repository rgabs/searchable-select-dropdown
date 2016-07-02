(function(Vue) {
  'use strict';

  function getDropdownDataFromSelect(selectDom) {
    var dropdownOptionDoms = selectDom.options;
    var optionsArray = [];
    for (var i = 0; i < dropdownOptionDoms.length; i++) {
      optionsArray.push({
        value: dropdownOptionDoms[i].value,
        text: dropdownOptionDoms[i].text
      });
    }
    return optionsArray;
  }

  function getSelectedOption(selectDom) {
    var dropdownOptionDoms = selectDom.options;
    return {
      text: dropdownOptionDoms[dropdownOptionDoms.selectedIndex].text,
      value: dropdownOptionDoms[dropdownOptionDoms.selectedIndex].value
    };
  }

  var searchableDropdown = Vue.extend({
    template: '\
    <div class="search-container">\
      <input placeholder="Please start typing.." class="search-input" @keyup="showList=true" v-model=\'selectedValue.text\' v-on:click.stop/>\
      <ul v-show=\'showList\' class="search-list overflow-effect text-left" >\
        <li class="search-name cursor" v-for="optionData in dropdownData | filterBy selectedValue.text"  v-on:click="setSelectedValue(optionData)">\
          {{optionData.text}}\
        </li>\
      </ul>\
    </div>\
    ',
    methods: {
      setSelectedValue: function setSelectedValue(optionData) {
        this.showList = false;
        this.selectedValue = Object.assign({}, optionData);
      },
      hideList: function hideList() {
        var _this = this;
        var containsFlag = false;
        this.dropdownData.forEach(function(optionData) {
          if (optionData.text === _this.selectedValue.text) {
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
    data: function data() {
      return {
        showList: false,
        dropdownData: []
      };
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
    ready: function ready() {
      var selectDom = document.querySelector(this.replaceWith);
      selectDom.remove();
      if (selectDom) {
        this.dropdownData = getDropdownDataFromSelect(selectDom, this.selectedValue);
        this.selectedValue = getSelectedOption(selectDom);
      }
      document.onclick = this.hideList;
    }
  });
  Vue.component("searchable-dropdown", searchableDropdown);
})(Vue);
