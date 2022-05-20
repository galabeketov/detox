import React from 'react';
import { Dropdown } from 'semantic-ui-react';
const languageOptions = [
  { key: 'English', text: 'En', value: 'EN' },
  { key: 'Russian', text: 'Ru', value: 'RU' },
];
const LanguageToggle = (props) => {
  const handleChange = (event, data) => {
    props.setLanguage(data.value);
  };
  return (
    <Dropdown
      className="icon"
      // floating
      icon="flag outline"
      options={languageOptions}
      onChange={handleChange}
    />
  );
};
export default LanguageToggle;
