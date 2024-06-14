import React from 'react';

import { ReactComponent as Icon } from '@/assets/icons/clear.svg';

interface IComponentProps {
  onClick: () => void;
}

const ClearIcon: React.FC<IComponentProps> = ({ onClick }) => (
  <button type="button" onClick={onClick}>
    <Icon />
  </button>
);

export default React.memo(ClearIcon);
