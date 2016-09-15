# Searchable-Select-Dropdown
A Vue Component to convert the native html select-dropdown to searchable dropdown (something similar to the datalist html tag which isn't supported in most of the browsers)

NPM: https://www.npmjs.com/package/select-typeahead-vue

##Installation

###If you are using webpack/browserify

```
import searchableDropdown from 'select-typeahead';
import 'select-typeahead/selectToSearch.css';

new Vue({
  ...
  components: {
    ...
    'searchable-dropdown': searchableDropdown,
    ...
  },
  ...
})
```

###If you are not using webpack/browserify
Add `selectToSearch-es5.js and selectToSearch.css` to your html file and use the component.


## Usage
Pass the select component's id and modelValue (containing text and value keys) as a prop.

`<searchable-dropdown replace-with="#native-select-box" :selected-value.sync='selectedData'></searchable-dropdown>`

##Screenshots


![Alt text](images/example_code.png?raw=true "Example Code")

###Native HTML Select Tag
<p align="center">
  <br>
  <img align="top" width="200" src="images/native.png?raw=true" alt="select">
  <img align="top" width="200" src="images/native-opened.png?raw=true" alt="usage">
</p>

###VueJS Component
<p align="center">
  <br>
  <img align="top" width="200" src="images/usage.png?raw=true" alt="usage">
  <img align="top" width="200" style="vertical-align:top" src="images/typeahead.png?raw=true" alt="usage">
</p>
