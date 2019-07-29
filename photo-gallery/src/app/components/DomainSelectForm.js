import baseEditForm from 'formiojs/components/base/Base.form';

import DomainSelectEditData from './editForm/DomainSelect.edit.data';
import DomainSelectEditValidation from './editForm/DomainSelect.edit.validation';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'data',
      components: DomainSelectEditData
    },
    {
      key: 'validation',
      components: DomainSelectEditValidation
    }
  ], ...extend);
}
