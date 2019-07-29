export default [
  {
    type: 'select',
    input: true,
    weight: 0,
    tooltip: 'The domain type to use for the select data.',
    key: 'dataSrc',
    defaultValue: 'worker',
    label: 'Domain Types',
    dataSrc: 'values',
    data: {
      values: [
        { label: 'Trabalhador', value: 'worker' },
        { label: 'Unidade Operacional', value: 'operationalUnit' },
        { label: 'Empresa', value: 'company' },
        { label: 'Centro de Custo', value: 'costCenter' }
      ]
    }
  }, 
  {
    type: 'checkbox',
    input: true,
    label: 'Lazy Load URL',
    key: 'lazyLoad',
    tooltip: 'When set, this will not fire off the request to the URL until this control is within focus. This can improve performance if you have many Select dropdowns on your form where the API\'s will only fire when the control is activated.',
    weight: 11
  }, 
  {
    type: 'checkbox',
    input: true,
    key: 'disableLimit',
    label: 'Disable limiting response',
    tooltip: 'When enabled the request will not include the limit and skip options in the query string',
    weight: 15
  },
  {
    type: 'textfield',
    input: true,
    key: 'searchField',
    label: 'Search Query Name',
    weight: 16,
    description: 'Name of URL query parameter',
    tooltip: 'The name of the search querystring parameter used when sending a request to filter results with. The server at the URL must handle this query parameter.'
  },
  {
    type: 'number',
    input: true,
    key: 'minSearch',
    weight: 17,
    label: 'Minimum Search Length',
    tooltip: 'The minimum amount of characters they must type before a search is made.',
    defaultValue: 0
  },
  {
    type: 'textfield',
    input: true,
    key: 'filter',
    label: 'Filter Query',
    weight: 18,
    description: 'The filter query for results.',
    tooltip: 'Use this to provide additional filtering using query parameters.'
  },
  {
    type: 'textfield',
    input: true,
    key: 'sort',
    label: 'Sort Query',
    weight: 18,
    description: 'The sort query for results',
    tooltip: 'User this to provide additional sorting using query parameters'
  },
  {
    type: 'number',
    input: true,
    key: 'limit',
    label: 'Limit',
    weight: 18,
    defaultValue: 100,
    description: 'Maximum number of items to view per page of results.',
    tooltip: 'Use this to limit the number of items to request or view.'
  },
  {
    type: 'textarea',
    input: true,
    key: 'template',
    label: 'Item Template',
    editor: 'ace',
    as: 'html',
    rows: 3,
    weight: 18,
    tooltip: 'The HTML template for the result data items.'
  },
  {
    type: 'checkbox',
    input: true,
    weight: 20,
    key: 'searchEnabled',
    label: 'Enable Static Search',
    defaultValue: true,
    tooltip: 'When checked, the select dropdown will allow for searching within the static list of items provided.'
  },
  {
    type: 'checkbox',
    input: true,
    weight: 22,
    key: 'readOnlyValue',
    label: 'Read Only Value',
    tooltip: 'Check this if you would like to show just the value when in Read Only mode.'
  },
  {
    type: 'textarea',
    as: 'json',
    editor: 'ace',
    weight: 23,
    input: true,
    key: 'customOptions',
    label: 'Custom default options',
    tooltip: 'A raw JSON object to use as default options for the Select component (Choices JS).',
	defaultValue: {}
  },
  {
    label: 'Search Threshold',
    mask: false,
    tableView: true,
    alwaysEnabled: false,
    type: 'number',
    input: true,
    key: 'selectThreshold',
    validate: {
      min: 0,
      customMessage: '',
      json: '',
      max: 1
    },
    delimiter: false,
    requireDecimal: false,
    encrypted: false,
    defaultValue: 0.3,
    weight: 30,
    tooltip: 'At what point does the match algorithm give up. A threshold of 0.0 requires a perfect match, a threshold of 1.0 would match anything.'
  }
];
