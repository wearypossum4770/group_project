import React, {useState} from 'react';
import Select from 'react-select';
 
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const [state, setState] = useState(null)
const handleChange = selectedOption => {
    setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
const GraphSelection = props => {
  state = {
    selectedOption: null,
  };
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
    );
  }

export default GraphSelection