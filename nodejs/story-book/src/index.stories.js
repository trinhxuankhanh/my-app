import React from 'react';
import Zing from './components/zing.js'

export default { title: 'Components ' };

export const componentZing = () => (
    <Zing
      title='Anh Sai'
      description='kjahsdkjahsdkjhdk'
      viewCount={200}
    ></Zing>
  );
componentZing.story = {
    parameters: {
      info: { inline: false },
    },
};

const Red = props => <span style={{ color: 'red' }} {...props} />;

const TableComponent = ({ propDefinitions }) => {
    const props = propDefinitions.map(
      ({ property, propType, required, description, defaultValue }) => {
        return (
          <tr key={property}>
            <td>
              {property}
              {required ? <Red>*</Red> : null}
            </td>
            <td>{propType.name}</td>
            <td>{defaultValue}</td>
            <td>{description}</td>
          </tr>
        );
      }
    );
  
    return (
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>type</th>
            <th>default</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>{props}</tbody>
      </table>
    );
  };
