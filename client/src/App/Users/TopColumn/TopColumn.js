import PropTypes from 'prop-types';
import React from 'react';

import ColumnTop from './ColumnTop';
import GenerateFileButton from './GenerateFileButton';

const TopColumn = ({
  createFile, id, name, type, setAliceFiles, setBobFiles,
}) => (
  <ColumnTop>
    <span role="img" aria-label={name} />
    <h2>{name}</h2>
    <GenerateFileButton onClick={() => createFile(type, id, setAliceFiles, setBobFiles)}>
      Create an {type}
    </GenerateFileButton>
  </ColumnTop>
);

TopColumn.propTypes = {
  createFile: PropTypes.func,
  setAliceFiles: PropTypes.func,
  setBobFiles: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};

TopColumn.defaultProps = {
  createFile: () => {},
  setAliceFiles: () => {},
  setBobFiles: () => {},
  id: '',
  name: '',
  type: '',
};

export default TopColumn;
