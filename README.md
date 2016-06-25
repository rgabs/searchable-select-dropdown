# Searchable-Select-Dropdown
A Vue Component to convert the native html select-dropdown to searchable dropdown (something similar to the datalist html tag which isn't supported in most of the browsers)

## Usage
Pass the select component's id and modelValue (containing text and value keys) as a prop.

`<searchable-dropdown replace-with="#native-select-box" :selected-value.sync='selectedData'></searchable-dropdown>`

##Screenshots


![Alt text](images/example_code.png?raw=true "Example Code")

<p align="center">
  <br>
  <img width="200" src="images/usage.png?raw=true" alt="usage">
  <img width="200" style="vertical-align:top" src="images/typeahead.png?raw=true" alt="usage">
</p>



